import React from "react";
import { FaUser, FaHeart, FaBriefcase, FaCamera, FaClock, FaStar } from "react-icons/fa";
  
import "./customer.css";
const services = [
  {
    icon: FaUser,
    title: "Portrait Photography",
    description:
      "Professional headshots and personal portraits that capture your unique personality and style.",
    features: ["Individual sessions", "Professional retouching", "Multiple outfit changes", "Digital gallery"],
    price: "Starting at $299",
  },
  {
    icon: FaHeart,
    title: "Wedding Photography",
    description:
      "Comprehensive wedding coverage from ceremony to reception, preserving your special day forever.",
    features: ["Full day coverage", "Engagement session", "Online gallery", "Print release"],
    price: "Starting at $2,499",
  },
  {
    icon: FaBriefcase,
    title: "Corporate Photography",
    description:
      "Professional business photography for teams, events, and corporate branding needs.",
    features: ["Team headshots", "Event coverage", "Brand photography", "Quick turnaround"],
    price: "Starting at $399",
  },
];

const features = [
  { icon: FaCamera, text: "Professional Equipment" },
  { icon: FaClock, text: "Quick Turnaround" },
  { icon: FaStar, text: "Expert Retouching" },
];
const Customer = () => {
  return (<div>
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <h2>Photography Services</h2>
          <p>
            We offer a comprehensive range of photography services tailored to capture
            your most important moments with artistic excellence and professional quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <span className="price">{service.price}</span>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="features-section">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <Icon className="feature-icon" />
                <span>{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default Customer;