import React from "react";
import { ExternalLink } from "lucide-react";
import portfolioImage from "../assets/portfolio-preview.jpg"; // adjust path
import "./pagesaut.css";
const portfolioItems = [
  {
    category: "Portraits",
    title: "Executive Headshots",
    description: "Professional corporate portraits for C-suite executives",
    image: portfolioImage,
  },
  {
    category: "Weddings",
    title: "Romantic Garden Wedding",
    description: "Intimate ceremony captured in golden hour light",
    image: portfolioImage,
  },
  {
    category: "Events",
    title: "Corporate Gala",
    description: "Annual awards ceremony and networking event",
    image: portfolioImage,
  },
  {
    category: "Portraits",
    title: "Artist Portfolio",
    description: "Creative portraits for musician's album release",
    image: portfolioImage,
  },
  {
    category: "Commercial",
    title: "Brand Campaign",
    description: "Product photography for luxury fashion brand",
    image: portfolioImage,
  },
  {
    category: "Weddings",
    title: "Destination Wedding",
    description: "Beachside ceremony in the Mediterranean",
    image: portfolioImage,
  },
];

const AboutCompany = () => {
    return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <h2>Our Portfolio</h2>
          <p>
            Explore our recent work and discover the artistry and attention to
            detail that defines our photography style.
          </p>
          {/* <button className="btn">
            View Full Portfolio <ExternalLink size={16} className="icon" />
          </button> */}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="portfolio-cta">
          <h3>Ready to Create Something Beautiful?</h3>
          <p>
            Let's discuss your vision and create stunning photography that
            exceeds your expectations.
          </p>
          <button className="btn btn-primary">Start Your Project</button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutCompany;
