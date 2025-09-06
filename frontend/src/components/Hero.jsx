import React from "react";
import heroImage from "../assets/hero-studio.jpg"; // adjust path as per your folder
import { FaCamera, FaAward, FaUsers } from "react-icons/fa";
import "./Hero.css"; // Create and import a CSS file for styling

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Professional photography studio with elegant lighting and equipment"
          className="hero-image"
        />
        <div className="overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Capturing Your <span className="highlight">Perfect Moments</span>
          </h1>
          <p>
            Professional photography services that transform your vision into
            timeless art. From portraits to events, we create stunning imagery
            that tells your unique story.
          </p>

          {/* <div className="hero-buttons">
            <button className="btn-primary">Book Your Session</button>
            <button className="btn-secondary">View Portfolio</button>
          </div> */}

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <FaCamera className="icon" />
              <h3>500+</h3>
              <p>Sessions</p>
            </div>
            <div className="stat">
              <FaAward className="icon" />
              <h3>15+</h3>
              <p>Awards</p>
            </div>
            <div className="stat">
              <FaUsers className="icon" />
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
