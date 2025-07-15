import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are <span style={{color:"purple"}}>Aahar AI</span> a team of passionate food enthusiasts
            and tech innovators dedicated to making meal planning and food
            discovery easy and enjoyable. Our food-suggesting AI leverages
            advanced algorithms to provide personalized food recommendations
            based on your tastes, dietary preferences, and nutritional needs.
          </p>
        </div>
        <div className="about-image">
          <img src="/aahar-logo.png" alt="Food Suggesting AI" />
        </div>
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to help people discover new foods and make informed
          choices about their meals. We believe that food is not just about
          sustenance but also about joy, culture, and community.
        </p>
      </section>
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> Continuously improving our AI to
            provide the best recommendations.
          </li>
          <li>
            <strong>Health:</strong> Promoting nutritious and balanced meal
            choices.
          </li>
          <li>
            <strong>Diversity:</strong> Celebrating a wide variety of cuisines
            from around the world.
          </li>
          <li>
            <strong>Community:</strong> Building a supportive community of food
            lovers.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
