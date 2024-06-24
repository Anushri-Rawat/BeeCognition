import React from "react";
import "./whyBess.scss";

const WhyBees = () => {
  return (
    <section className="bees-sec" id="why-bees">
      <div className="container">
        <div className="bees-features">
          <h2 className="heading-text">
            Why <span>Bees</span> are Important
          </h2>
          <p className="content-p">
            Bees are essential creatures as they pollinate food crops. They play
            an important role in the preservation of healthy ecosystems. Apart
            from food production, they enormously contribute to the enhancement
            of landscapes. Through beekeeping, one can earn an endurable living.
            It is our foremost responsibility to protect bees and other
            pollinators.
          </p>
        </div>
        <div className="bees-important box flex">
          <div
            className="bee-important-card wow animated slideInUp"
            data-wow-duration="0.1s"
            data-wow-delay="0.1s"
            style={{ background: "#f4e8ee" }}
          >
            <img src="/images/food-icon.webp" width="63px" height="63px" />
            <h1>1/3</h1>
            <p>Of the food we eat is pollinated by Honey Bees</p>
          </div>
          <div
            className="bee-important-card wow animated slideInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
            style={{ background: "#ebebf8" }}
          >
            <img src="/images/crops-icon.webp" width="63px" height="63px" />
            <h1>
              1.85<span>M</span>
            </h1>
            <p>Types of Crops are pollinated by Honey Bees</p>
          </div>
          <div
            className="bee-important-card wow animated slideInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
            style={{ background: "#e9f5f1" }}
          >
            <img src="/images/honey-icon.webp" width="63px" height="63px" />
            <h1>
              400<span>M</span>
            </h1>
            <p>Million Metric Tons of Honey is made every year</p>
          </div>
          <div
            className="bee-important-card wow animated slideInUp"
            data-wow-duration="0.7s"
            data-wow-delay="0.7s"
            style={{ background: "#f1e8f4" }}
          >
            <img src="/images/economy-icon.webp" width="63px" height="63px" />
            <h1>70</h1>
            <p>Million is contributed to the Economy</p>
          </div>
        </div>
        <div className="quote-part flex">
          <div className="quote-left">
            <i>
              If the bee disappeared off the surface of the globe, man would
              only have four years left to live.
            </i>
            <p>-Albert Einstein</p>
          </div>
          <div className="quote-right">
            <img
              src="/images/quotes-bg.webp"
              alt="quotes-bg"
              className="lazyload"
              width="191px"
              height="194px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBees;
