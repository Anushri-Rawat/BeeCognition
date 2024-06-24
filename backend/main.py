import subprocess
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

def main():
    # Execute the image classifier script
    subprocess.Popen(["python", "image_classifier.py"])
    
    # Execute the video monitoring script
    subprocess.Popen(["python", "video_monitoring.py"])

if __name__ == "__main__":
    main()
