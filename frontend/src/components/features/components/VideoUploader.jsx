import React, { useState } from "react";
import axios from "axios";

const VideoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [monitoringStarted, setMonitoringStarted] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleStartMonitoring = async () => {
    if (!selectedFile) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Upload the video
      const response = await axios.post(
        "http://localhost:8002/upload-video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Start monitoring
      const startMonitoringResponse = await axios.post(
        "http://localhost:8002/start-monitoring",
        null, // Send an empty body
        {
          params: {
            file_location: response.data.file_location, // Send file_location as query parameter
          },
        }
      );

      // Handle success
      setMonitoringStarted(true);
    } catch (error) {
      console.error("Error uploading video and starting monitoring:", error);
      alert("Failed to upload video and start monitoring.");
    }
  };

  const handleStopMonitoring = async () => {
    setMonitoringStarted(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div class="form-group d-flex gap-2 justify-content-center align-items-center">
        <label class="control-label" for="pwd">
          Upload Your Video :
        </label>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleStartMonitoring} class="btn btn-success">
          Start Monitoring
        </button>
        <button onClick={handleStopMonitoring} class="btn btn-danger">
          Stop Monitoring
        </button>
      </div>
      {monitoringStarted && (
        <div style={{ marginTop: "20px" }} className="video-explain">
          <h3>Monitoring Started!</h3>
          <ul>
            <li>Blue dot: Pollen</li>
            <li>Red dot: Varroa mite</li>
            <li>Green dot: Bee is cooling the hive</li>
            <li>Black dot: Detected a wasp</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
