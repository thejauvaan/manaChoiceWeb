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
import "intersection-observer";
import Privacypolicy from "./Privacypolicy";

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
          alt="Farmer App"
          className="center-image animate-fade-in"
        />
        <h1 className="heading animate-fade-in">manaChoice</h1>
        <h1 className="heading animate-fade-in">
          100% Natural, Organic, and Best Delivery Services
        </h1>
        <p className="description animate-fade-in">
          Your all-in-one solution for finding fresh, organic vegetables,
          fruits, and groceries.
        </p>

        <PlayStoreButton className="animate-fade-in" />
      </div>

      {/* Cards */}
      <div className="cards-wrapper">
        <Card
          title="Fresh Organic Vegetables"
          content="Browse through our selection of fresh, organic vegetables sourced directly from local farms."
        />
        <Card
          title="Ripe Juicy Fruits"
          content="Discover a variety of ripe and juicy fruits, handpicked to ensure the highest quality and taste."
        />
        <Card
          title="Groceries and More"
          content="Explore our wide range of groceries, including water, milk, and other essential items, to fulfill all your household needs."
        />
      </div>

      {/* Sections */}
      <div id="whatWeDo">
        <WhatWeDo />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="Privacypolicy">
        <Privacypolicy />
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
