import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <p>
          Created by &copy;{" "}
          <span style={{ fontWeight: "600" }}>Anushri Rawat</span> ,
          <span style={{ fontWeight: "600" }}>Mohd. Rehan</span> ,
          <span style={{ fontWeight: "600" }}>Shushant Kohli</span> and{" "}
          <span style={{ fontWeight: "600" }}>Atul Chaudhary</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
