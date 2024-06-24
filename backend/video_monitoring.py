import subprocess
from fastapi import FastAPI, BackgroundTasks, File, UploadFile, HTTPException
import os
import shutil
from typing import Optional
import logging
import sys

logger = logging.getLogger(__name__)

app = FastAPI()

# Directory to save uploaded files
UPLOAD_DIRECTORY = r"C:\Users\rawat\Desktop\BeeAlarmed"
os.makedirs(UPLOAD_DIRECTORY, exist_ok=True)  # Create the directory if it doesn't exist

monitoring_process = None
script_path = r"C:\Users\rawat\Desktop\BeeAlarmed\main.py"

def start_monitoring(video_path: Optional[str] = None):
    global monitoring_process
    command = ["python", script_path]
    if video_path:
        command.extend(["--video", video_path])

    monitoring_process = subprocess.Popen(command)

def stop_monitoring():
    global monitoring_process
    if monitoring_process and monitoring_process.poll() is None:
        monitoring_process.kill()  # Use kill() instead of terminate()
        monitoring_process.wait()
        return {"message": "Monitoring stopped successfully"}

@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...)):
    try:
        file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
        with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
        return {"file_location": file_location}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {e}")


@app.post("/start-monitoring")
async def start_monitoring_endpoint(background_tasks: BackgroundTasks,file_location: str):
    if (file_location):
        print(f"File location received: {file_location}")
        background_tasks.add_task(start_monitoring, file_location)
        return {"message": "Monitoring started", "file_location": file_location}
    else:
        return {"error": "File not found", "file_location": file_location}

@app.post("/stop-monitoring")
async def stop_monitoring_endpoint():
    stop_monitoring()
    return {"message": "Monitoring stopped"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
