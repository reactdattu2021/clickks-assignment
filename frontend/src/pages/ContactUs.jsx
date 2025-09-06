import React from "react";
import Footer from "./footer";
import "./pagescts.css";
const contactInfo = [
  {
    icon: "📍",
    title: "Visit Our Studio",
    details: ["123 Photography Lane", "Creative District, NY 10001"]
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+1 (555) 123-4567", "Mon-Fri: 9AM-6PM"]
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: ["hello@photostudio.com", "bookings@photostudio.com"]
  },
  {
    icon: "⏰",
    title: "Studio Hours",
    details: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 4PM",
      "Sunday: By appointment"
    ]
  }
];
const socialLinks = [
  { icon: "📸", href: "#", label: "Instagram" },
  { icon: "📘", href: "#", label: "Facebook" },
  { icon: "🐦", href: "#", label: "Twitter" }
];

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (<div>
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h2>Let's Create Together</h2>
          <p>
            Ready to bring your vision to life? Get in touch with us to discuss
            your photography needs and let's create something beautiful together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="form-group">
                <label>Photography Service</label>
                <select>
                  <option>Portrait Photography</option>
                  <option>Wedding Photography</option>
                  <option>Corporate Photography</option>
                  <option>Event Photography</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tell us about your project</label>
                <textarea
                  placeholder="Describe your vision, timeline, and any specific requirements..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">{info.icon}</div>
                <div>
                  <h4>{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <div>
                <span style={{ fontSize: "2rem" }}>📍</span>
                <p>Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer/>         
     </div>
  );
};

export default ContactUs;
