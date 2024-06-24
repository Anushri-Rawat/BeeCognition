import React from "react";
import "./homeBanner.scss";
import Header from "../header/Header";

const HomeBanner = () => {
  return (
    <section class="home-banner">
      <div class="container">
        <Header />
        <div class="flex main-banner">
          <div class="left-side-part">
            <video autoPlay muted loop playsInline>
              <source src="/videos/Gobuzzr-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="right-side-part flex">
            <div class="right-content">
              <h3>
                Empowering Beekeepers with AI.
                <p>Monitor your bees. Remotely.</p>
              </h3>
              <p>
                An initiative by Computer engineering students from college of
                technology,to monitor the real-time traffic to enhance the
                pollination productivity with advanced image classification and video
                monitoring for effective bee management. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
