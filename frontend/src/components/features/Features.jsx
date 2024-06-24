import React from "react";
import "./features.scss";
import ImageUploader from "./components/ImageUploader";
import VideoUploader from "./components/VideoUploader";

const Features = () => {
  return (
    <section class="features-sec" id="features">
      <div class="container">
        <div class="bees-features">
          <h4 class="heading-text">
            BeeCognition<span> Features</span>
          </h4>
          <p class="content-p">
            BeeCognition monitors all bees and uses a neural network to detect
            the above mentioned characteristics, counts all findings and sends
            them to the ThingsNetwork using LoRaWAN.
          </p>
        </div>
        <div class="feature-content">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="feature-1-tab"
                data-bs-toggle="tab"
                data-bs-target="#feature1"
                type="button"
                role="tab"
                aria-controls="feature-1"
                aria-selected="true"
              >
                Image Classification
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="feature-2-tab"
                data-bs-toggle="tab"
                data-bs-target="#feature2"
                type="button"
                role="tab"
                aria-controls="feature-2"
                aria-selected="false"
              >
                Video Monitoring
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="feature1"
              role="tabpanel"
              aria-labelledby="feature-1-tab"
              tabindex="0"
            >
              <ImageUploader />
            </div>
            <div
              class="tab-pane fade"
              id="feature2"
              role="tabpanel"
              aria-labelledby="feature-2-tab"
              tabindex="0"
            >
              <VideoUploader />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
