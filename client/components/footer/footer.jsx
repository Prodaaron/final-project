import React from 'react';
import './footer.css';
import logo from '../../src/assets/images/logo/mesarg-logo-favico.ico';

const footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-top">
            <div className="footer-top-right">

            </div>

            <div className="footer-top-left">

            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-bottom-right">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
            </div>
            <div className="footer-bottom-left">
                <p>
                    &copy; 
                    <img className='footer-logo' src={logo} alt="" />
                    MesArg Shampoo & Conditioner 2024. All rights reserved.
                </p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
