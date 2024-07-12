import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: reservations.nyc@indianaccent.com</p>
          <p>Location: Indian Accent, India</p>
          <p>Mobile: +91 22 3525 1500</p>
                <div className="share">
                <a href="https://www.facebook.com/indianaccent" className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://twitter.com/indianaccent" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.instagram.com/indianaccent" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.linkedin.com/company/indianaccent" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.pinterest.com/indianaccent" className="fab fa-pinterest" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Opening</h3>
                <p>Monday - Saturday<br/>09AM - 09PM</p>
                <p>Sunday<br/>10AM - 08PM</p>
            </div>
        </footer>
    );
};

export default Footer;
