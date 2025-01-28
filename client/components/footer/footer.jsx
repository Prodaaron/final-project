import React from 'react';
import './footer.css';
import logo from '../../src/assets/images/logo/mesarg-logo-favico.ico';

// Social Icons

import Instagram from '../../src/assets/images/icons/Instagram.svg';
import Facebook from '../../src/assets/images/icons/Facebook.svg';
import Telegram from '../../src/assets/images/icons/Telegram.svg';
import Whatsapp from '../../src/assets/images/icons/Whatsapp.svg';

const footer = () => {
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

                <div className="link-cl-2">
                  <a href="">Size Guide</a>
                  <a href="">Gift Cards</a>
                  <a href="">Customer Service</a>
                  <a href="">Store Locator</a>
                  <a href="">Payment Options</a>
                  <a href="">Store Hours</a>
                  <a href="">Tailored Needs</a>
                  <a href="">Sale & Offers</a>
                  <a href="">Testimonials</a>
                  <a href="">Press Partnerships</a>
                </div>

                <div className="link-cl-3">
                  <a href="">Product Reviews</a>
                  <a href="">Customer Testimonials</a>
                  <a href="">Factory Locations</a>
                  <a href="">Our Story</a>
                  <a href="">Press Releases</a>
                  <a href="">Press Kit</a>
                  <a href="">Press Contact</a>
                  <a href="">Press Inquiries</a>
                  <a href="">Retail</a>
                  <a href="">Wholesale</a>
                </div>
                
                <div className="link-cl-4">
                  <a href="">Press Events</a>
                  <a href="">Press Media Kit</a>
                  <a href="">Press Resources</a>
                  <a href="">Press Gallery</a>
                  <a href="">Press Interviews</a>
                  <a href="">Press Videos</a>
                  <a href="">Press Demos</a>
                  <a href="">Press Coverage</a>
                  <a href="">Press Spotlights</a>
                  <a href="">Press Partnerships</a>
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

                <div className="address-footer">
                  <p>
                    &copy; Mesarg Shampoo & Conditioner<br />
                    123 Main Street<br />
                    City, State, ZIP Code<br />
                    USA
                  </p>
                </div>

                <div className="basic-contact-info">
                  <p>Email: <a href="">support@mesarg.com</a></p>
                  <p>Phone: <a href="">+251 968 804 248</a></p>
                </div>

                <div className="subscription-footer">
                  <form action="">
                    <h3>Join our Newsletter</h3>
                    <input className='footer-form-input' type="text" name='Name' placeholder='Name' />
                    <input className='footer-form-input' type="Email" name='Email' placeholder='Email' />
                    <button>Join</button>
                  </form>
                </div>
              </div>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            
            <div className="footer-bottom-left">
              <p>
                &copy; 
                
                MesArg Shampoo & Conditioner 2024. All rights reserved.
              </p>
            </div>

            <div className="footer-bottom-right">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
