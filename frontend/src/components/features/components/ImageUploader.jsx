import React, { useState } from "react";
import axios from "axios";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      const { label, probability } = response.data;
      setPrediction({ label, probability });
      setUploadedImageUrl(URL.createObjectURL(selectedFile));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload and process image.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <div class="form-group d-flex gap-2 justify-content-center align-items-center">
        <label class="control-label" for="pwd">
          Upload Your Image :
        </label>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit} class="btn btn-success">
          Submit
        </button>
      </div>

      <div
        className="d-flex align-content-center justify-content-center gap-3"
        style={{ marginTop: "20px" }}
      >
        {uploadedImageUrl && (
          <div>
            <h3>Uploaded Image:</h3>
            <img
              src={uploadedImageUrl}
              alt="Uploaded"
              style={{ maxWidth: "200px" }}
            />
          </div>
        )}
        {prediction && (
          <div>
            <h3>Prediction:</h3>
            <p>Label: {prediction.label}</p>
            <p>Probability: {prediction.probability}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
