import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div class="bees-features">
          <h4 class="heading-text">
            <span>About</span> us
          </h4>
          <p class="content-p">
            Welcome to BeeCognition, the forefront of innovative bee-hive
            monitoring systems developed by a dedicated team of final-year
            Computer Engineering students from COT,GBPUAT. Our project,
            BeeCognition, represents a significant leap in the application of
            technology to aid beekeepers and researchers in understanding and
            preserving bee populations.
          </p>
        </div>
        <div className="about-content">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Our Vision
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    At BeeCognition, our vision is to provide an advanced,
                    reliable, and easy-to-use monitoring system that leverages
                    state-of-the-art machine learning and computer vision
                    techniques to support sustainable beekeeping practices. We
                    aim to help in identifying and tracking bees, detecting bee
                    characteristics such as pollen packages, varroa mite
                    infestations, and even wasps, and ensuring the health and
                    productivity of hives.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What we do
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Our system utilizes a combination of hardware and software
                    to deliver real-time insights and data about bee activity
                    within a hive. Here's what BeeCognition can do:
                  </p>
                  <ul>
                    <li>
                      <span>Count Bees Entering or Leaving the Hive:</span>By
                      monitoring hive entrances and exits, we can provide
                      accurate counts of bee traffic.
                    </li>
                    <li>
                      <span>Detect Varroa Infected Bees:</span>Using neural
                      networks, our system identifies bees that are infested
                      with varroa mites.
                    </li>
                    <li>
                      <span>Identify Bees Cooling the Hive:</span>Bees that fan
                      their wings to cool the hive are detected and counted.
                    </li>
                    <li>
                      <span>Detect Bees with Pollen:</span>We identify and count
                      bees carrying pollen packets.
                    </li>
                    <li>
                      <span>Detect Wasps:</span>The system also detects wasps,
                      which can be a threat to the hive.
                    </li>
                  </ul>
                  <p style={{ marginTop: "1rem" }}>
                    Each frame from the camera is processed to identify bees,
                    track their movements, and classify their activities using a
                    neural network. The results are sent to The Things Network
                    via LoRaWAN, allowing for seamless data collection and
                    monitoring.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How it works
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Our monitoring system processes video frames from a camera
                    or video file to detect and track bees using kalman filters.
                    Each bee's movement is monitored, and specific
                    characteristics are identified using a neural network. This
                    sophisticated processing allows for detailed monitoring and
                    data collection, providing valuable insights into hive
                    health and activity.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Our Journey and team
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    This ambitious project would not have been possible without
                    the guidance and support of our Head of Department, Sri
                    Sarangdhar Samantaray Sir, whose expertise and encouragement
                    have been invaluable throughout this journey. His mentorship
                    has been a cornerstone of our success.Our team comprises
                    Anushri Rawat,Atul Chaudhary,Shushant Kohli,Mohd. Rehan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
