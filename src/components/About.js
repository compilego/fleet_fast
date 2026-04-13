import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';
import darkLogo from '../assets/image-truck.png';


const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container about-container">
        <motion.div 
          className="about-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="img-placeholder">
  <img src={darkLogo} alt="Truck" style={{ height: "500px", width: "100%", objectFit: "cover" }} />
</div>
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="section-subtitle">About Us</h4>
          <h2 className="section-title">Industry Expertise You Can Trust</h2>
          <p>
            At FleetFast, we act as an extension of your business. We understand that the logistics industry demands precision, speed, and strict compliance. Our team is dedicated to providing superior dispatching, meticulous compliance handling, and robust fleet management solutions.
          </p>
          <div className="about-features">
            <motion.div 
              className="feature"
              whileHover={{ y: -5 }}
            >
              <h3>Mission</h3>
              <p>To streamline transport operations and maximize efficiency for carriers nationwide.</p>
            </motion.div>
            <motion.div 
              className="feature"
              whileHover={{ y: -5 }}
            >
              <h3>Vision</h3>
              <p>To be the industry-leading partner for comprehensive fleet and logistics management.</p>
            </motion.div>
          </div>
          <Link to="/contact" className="btn btn-primary mt-4">Partner With Us</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
