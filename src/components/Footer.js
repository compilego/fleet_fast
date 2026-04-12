import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-about">
          <h2>Fleet<span>Fast</span></h2>
          <p>Your dedicated partner for logistics, compliance, dispatch, and comprehensive fleet management solutions.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">tw</a>
            <a href="#" aria-label="Facebook">fb</a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#services">DOT Compliance</a></li>
            <li><a href="#services">Freight Dispatch</a></li>
            <li><a href="#services">Fleet Management</a></li>
            <li><a href="#services">Safety Audits</a></li>
            <li><a href="#services">Route Planning</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for the latest logistics news and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-col footer-legal">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} FleetFast. All rights reserved.</p>
          <p>Designed by <a href="#" style={{color: 'var(--accent-color)'}}>Compilego</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
