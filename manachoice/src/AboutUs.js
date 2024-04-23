import React from "react";

const AboutUs = () => {
  return (
    <div className="section">
      <h2>About Us</h2>
      <p>
        We are a team of passionate individuals dedicated to promoting organic
        farming. manaChoice is a startup company registered in Pakala, India.
        Utilizing emerging technologies, including web and mobile app-based
        services, we aim to transform the food industry. Initially, our goal is
        to connect not only vegetable lovers, but also fruit enthusiasts, and
        those seeking groceries, mineral water, and milk, on one platform to
        deliver freshly made, hygienic produce and products to the community.
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
