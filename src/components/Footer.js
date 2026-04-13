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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">tw</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">fb</a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#why-us">Why Choose Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services">DOT Compliance</Link></li>
            <li><Link to="/services">Freight Dispatch</Link></li>
            <li><Link to="/services">Fleet Management</Link></li>
            <li><Link to="/services">Safety Audits</Link></li>
            <li><Link to="/services">Route Planning</Link></li>
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
    <p>&copy; {new Date().getFullYear()} FleetFast Management. All rights reserved.</p>

    <p>
      Designed by :{" "}
      <a
        href="https://compilego.com"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'var(--accent-color)' }}
      >
        CompileGo Technologies
      </a>
    </p>
  </div>
</div>
    </footer>
  );
};

export default Footer;
