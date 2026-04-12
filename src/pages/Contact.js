import React from 'react';
import { motion } from 'framer-motion';
import ContactComponent from '../components/Contact';
import './ServicePage.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-hero contact-bg">
        <div className="service-hero-overlay"></div>
        <motion.div 
          className="service-hero-content container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Contact FleetFast</h1>
          <p>We are ready to optimize your logistics operations. Get in touch with our experts today.</p>
        </motion.div>
      </div>

      <div style={{ paddingTop: '50px' }}>
        <ContactComponent />
      </div>

    </motion.div>
  );
};

export default Contact;
