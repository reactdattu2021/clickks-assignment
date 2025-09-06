import React from "react";
import "./pagesft.css";

const footerLinks = {
  services: [
    "Portrait Photography",
    "Wedding Photography",
    "Corporate Photography",
    "Event Photography",
  ],
  company: ["About Us", "Portfolio", "Testimonials", "Blog"],
  support: ["Contact", "FAQ", "Pricing", "Booking"],
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About */}
          {/* <div>
            <p className="footer-text">
              Professional photography services that capture your most precious
              moments with artistic excellence and technical perfection.
            </p>
          </div> */}

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              {footerLinks.services.map((item, index) => (
                <li key={index} className="footer-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              {footerLinks.company.map((item, index) => (
                <li key={index} className="footer-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              {footerLinks.support.map((item, index) => (
                <li key={index} className="footer-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Studio Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
