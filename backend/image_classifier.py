from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel #used for data validation,create data models for request and response bodies, ensuring the data conforms to the expected format.
import tensorflow as tf #load and run pretrained model
import cv2
import logging #log messages
import shutil #handling file operation like copying and moving
import os #using os dependent functionalities like making directories
import numpy as np #handling numeric operations

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = FastAPI()

# Directory to save uploaded files
UPLOAD_DIRECTORY = "uploaded_files"
os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)  # Create the directory if it doesn't exist

# Load the model once at the startup
model_path = 'C:/Users/rawat/Downloads/NewSavedModel/model.h5'
logger.debug(f"Loading model from: {model_path}")
model = tf.keras.models.load_model(model_path)
model.trainable = False
logger.info("Model loaded successfully")

# Print the model summary
# print("Model Summary:")
# model.summary()

class_labels = ["varroa", "pollen", "wasps", "cooling"]

class PredictionResult(BaseModel):
    label: str
    probability: float

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
        with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
        
        # Perform prediction after saving the file
        prediction = predict(file_location)

        return prediction
    except Exception as e:
        logger.error(f"Error uploading file: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

def predict(image_path: str) -> PredictionResult:
    try:
        # Load and preprocess the image
        img = cv2.imread(image_path)
        if img is None:
            raise HTTPException(status_code=400, detail="Invalid image path")
        
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img_resized = tf.image.resize(img_rgb, [150, 75])
        img_expanded = tf.expand_dims(img_resized, 0)

        prediction = model.predict(img_expanded)
        logger.debug(f"Model prediction output: {prediction}")

        # Handle the list of arrays output
        probabilities = [pred[0][0] for pred in prediction]
        max_prob_index = np.argmax(probabilities)
        max_label = class_labels[max_prob_index]
        max_prob = probabilities[max_prob_index]

        return PredictionResult(label=max_label, probability=max_prob)
    
    except Exception as e:
        logger.error(f"Failed to process the image and generate prediction: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
