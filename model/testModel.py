import tensorflow as tf
import cv2
import logging
import matplotlib.pyplot as plt

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def display_image(img):
    """Display the image using OpenCV"""
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)  # Convert back to BGR for OpenCV
    cv2.imshow('Test Image', img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

def test_model_loading():
    try:
        model_path = 'D:\programforfun\collegeprograms\BeeCognition\model\requirements.txt'
        logger.debug(f"Loading model from: {model_path}")
        model = tf.keras.models.load_model(model_path)
        model.trainable = False
        logger.info("Model loaded successfully")

        # Load a test image
        img_path = 'D:\programforfun\collegeprograms\BeeCognition\model\Images\2020.09.16_F_396925_T_2_output.avi.jpeg'  # Replace with an actual test image path
        img = cv2.imread(img_path)
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img_resized = tf.image.resize(img_rgb, [150, 75])  # Resize to the expected input shape
        img_expanded = tf.expand_dims(img_resized, 0)  # Add batch dimension

        # Display the image
        #display_image(img_rgb)

        # Perform a prediction
        prediction = model.predict(img_expanded)
        
        # Class labels
        class_labels = ["varroa", "pollen", "wasps", "cooling"]

        # Print out predictions with class names
        for i, prob in enumerate(prediction):
            logger.info(f"Prediction for {class_labels[i]}: {prob[0][0]}")

    except Exception as e:
        logger.error(f"Failed to load and test Model: {e}")

if __name__ == "__main__":
    test_model_loading()
