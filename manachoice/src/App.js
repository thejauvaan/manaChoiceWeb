import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PlayStoreButton from "./PlayStoreButton";
import Card from "./Card"; // Import the Card component
import "./App.css";
import WhatWeDo from "./WhatWeDo"; // Import WhatWeDo component
import AboutUs from "./AboutUs"; // Import AboutUs component
import ContactUs from "./ContactUs"; // Import ContactUs component
import Careers from "./Careers"; // Import Careers component

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <div className="container">
        <img
          src={require("./logo/logo.png")}
          alt="Farmer App Image"
          className="center-image animate-fade-in"
        />
        <h1 className="heading animate-fade-in">manaChoice</h1>
        <h1 className="heading animate-fade-in">100 % Natural and Organic</h1>
        <p className="description animate-fade-in">
          Your all-in-one solution for finding vegetables.
        </p>
        <PlayStoreButton className="animate-fade-in" />
      </div>

      {/* Cards */}
      <div className="cards-wrapper">
        <Card title="Card 1" content="Content for Card 1..." />
        <Card title="Card 2" content="Content for Card 2..." />
        <Card title="Card 3" content="Content for Card 3..." />
      </div>

      {/* Sections */}
      <div id="whatWeDo">
        <WhatWeDo />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="careers">
        <Careers />
      </div>

      <Footer />
    </div>
  );
};

export default App;
