import React, { useState } from "react";
import axios from "axios";
import "./footer.css";
import logo from "../../src/assets/images/logo/mesarg-logo-favico.ico";

// Social Icons
import Instagram from "../../src/assets/images/icons/Instagram.svg";
import Facebook from "../../src/assets/images/icons/Facebook.svg";
import Telegram from "../../src/assets/images/icons/Telegram.svg";
import Whatsapp from "../../src/assets/images/icons/Whatsapp.svg";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:5000/newsletter-subscribe", {
        subscriber_name: formData.name,
        subscriber_email: formData.email,
      });

      setMessage(response.data.message);
      setFormData({ name: "", email: "" }); // Reset form fields
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="footer-top-right">
            <div className="footer-links">
              <div className="link-cl-1">
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="">Careers</a>
                <a href="">Press</a>
                <a href="">Blog</a>
                <a href="">Help</a>
                <a href="">FAQ</a>
                <a href="">Affiliate Program</a>
                <a href="">Shipping & Returns</a>
                <a href="">Returns Policy</a>
              </div>
            </div>
          </div>

          <div className="footer-top-left">
            <div className="contact-info">
              <div className="social-media-footer">
                <a href=""><img className='footer-social-icons' src={Instagram} alt="" /></a>
                <a href=""><img className='footer-social-icons' src={Telegram} alt="" /></a>
                <a href=""><img className='footer-social-icons' src={Facebook} alt="" /></a>
                <a href=""><img className='footer-social-icons' src={Whatsapp} alt="" /></a>
              </div>

              <div className="basic-contact-info">
                <p>Email: <a href="">support@mesarg.com</a></p>
                <p>Phone: <a href="">+251 968 804 248</a></p>
              </div>

              {/* Newsletter Subscription Form */}
              <div className="subscription-footer">
                <form onSubmit={handleSubmit}>
                  <h3>Join our Newsletter</h3>
                  <input
                    className='footer-form-input'
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className='footer-form-input'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Join</button>
                </form>
                {message && <p className="message">{message}</p>}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; MesArg <span>Shampoo & Conditioner</span> 2024. <span>All rights reserved.</span></p>
          </div>
          <div className="footer-bottom-right">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
