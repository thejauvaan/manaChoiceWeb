import React from "react";

const AboutUs = () => {
  return (
    <div className="section">
      <h2>About Us</h2>
      <p>
        We are a team of passionate individuals dedicated to promoting organic
        farming. manaChoice is a Startup company registered in Bengaluru, India.
        With the use of emerging technologies, including web and mobile
        app-based services, we are here to transform the way that the food
        industry operates! To begin with, we aim to connect vegetable lovers on
        one platform to serve freshly made Hygiene vegetables to the community.
      </p>
      <div className="about-us-image-container">
        <div
          className="about-us-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/aboutus.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
