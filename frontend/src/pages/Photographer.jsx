import React from "react";
import { FaAward, FaCamera, FaUsers, FaHeart } from "react-icons/fa";
import photographerImage from "../assets/photographer-work.jpg"; // adjust path as needed
import "./pagesph.css";
const achievements = [
  { icon: FaAward, number: "15+", label: "Industry Awards" },
  { icon: FaCamera, number: "500+", label: "Photo Sessions" },
  { icon: FaUsers, number: "200+", label: "Happy Clients" },
  { icon: FaHeart, number: "10", label: "Years Experience" },
];
   
const Photographer = () => {
 return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Content */}
          <div className="about-text">
            <h2>
              Meet Your <span className="highlight">Photographer</span>
            </h2>

            <div className="about-description">
              <p>
                Welcome to our photography studio, where passion meets
                professionalism. With over a decade of experience in capturing
                life's most precious moments, we specialize in creating timeless
                imagery that tells your unique story.
              </p>

              <p>
                Our approach combines technical expertise with artistic vision,
                ensuring every photograph we create is not just an image, but a
                piece of art that you'll treasure forever. From intimate
                portraits to grand celebrations, we bring the same level of
                dedication and creativity to every session.
              </p>

              <p>
                We believe that great photography is about more than just
                technical skill—it's about understanding people, connecting with
                emotions, and capturing the authentic moments that make each
                story special.
              </p>
            </div>

            {/* Achievements */}
            <div className="achievements">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="achievement">
                    <div className="achievement-icon">
                      <Icon />
                    </div>
                    <div className="achievement-number">{achievement.number}</div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* <div className="about-buttons">
              <button className="btn-primary">Book a Consultation</button>
              <button className="btn-secondary">Download Portfolio</button>
            </div> */}
          </div>

          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src={photographerImage}
                alt="Professional photographer at work in studio with professional lighting"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Floating Card */}
            <div className="floating-card">
              <div className="floating-card-icon">
                <FaCamera />
              </div>
              <div>
                <div className="floating-title">Professional Studio</div>
                <div className="floating-subtitle">
                  State-of-the-art equipment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photographer;
