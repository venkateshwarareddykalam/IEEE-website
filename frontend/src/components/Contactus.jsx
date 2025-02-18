import React from "react";
import "../styles/Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="header-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out for any queries or collaborations.</p>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Left - Contact Details */}
        <div className="contact-details">
          <h3>Campus Address</h3>
          <p>Chaitanya Bharathi Institute of Technology</p>
          <p className="address">Gandipet, Hyderabad, Telangana - 500075</p>

          <h4>Phone:</h4>
          <p className="phone-number">040-24193276</p>

          <h4>Mobile:</h4>
          <p className="mobile-number">8466997201</p>

          <h4>Email:</h4>
          <p className="email">principal@cbit.ac.in</p>
        </div>

        {/* Right - Contact Form */}
        <div className="contact-form">
          <h3>Quick Contact</h3>
          <form>
            <label>Full Name *</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email *</label>
            <input type="email" placeholder="Your Email Address" required />

            <label>Phone/Mobile *</label>
            <input type="tel" placeholder="Your Mobile Number" required />

            <label>Your Message *</label>
            <textarea placeholder="Write your message here..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <h3>Find Us on Google Maps</h3>
        <iframe
          title="CBIT Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.940570503874!2d78.31620397485416!3d17.392449703848265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9378cd6ad5cf%3A0x29b74aa95e2c9f0b!2sChaitanya%20Bharathi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1707500000000"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactus;
