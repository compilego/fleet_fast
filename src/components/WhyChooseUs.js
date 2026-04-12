import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Experienced Team',
      desc: 'Our logistics experts bring years of industry knowledge directly to your operations.',
      icon: '👥'
    },
    {
      title: 'Reliable Support',
      desc: 'We are here when you need us. 24/7 dedicated support for dispatch and compliance.',
      icon: '🛡️'
    },
    {
      title: 'Real-time Coordination',
      desc: 'Stay informed with instant updates on fleet movements and compliance status.',
      icon: '⏱️'
    },
    {
      title: 'Industry-focused Solutions',
      desc: 'Strategies customized exclusively for the transport and logistics sector.',
      icon: '🎯'
    },
    {
      title: 'Scalable Operations',
      desc: 'Our solutions grow alongside your fleet, ensuring seamless expansion over time.',
      icon: '📈'
    }
  ];

  return (
    <section id="why-us" className="why-us section-padding">
      <div className="container">
        <div className="why-us-content">
          <motion.div 
            className="why-us-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="section-subtitle">Why Choose Us</h4>
            <h2 className="section-title">Your Trusted Logistics Partner</h2>
            <p>
              We know that every minute counts in transportation. That is why choosing the right partner is critical. 
              FleetFast combines advanced technology with human expertise to bring unparalleled value to your supply chain,
              dispatch operations, and compliance management.
            </p>
            <div className="why-us-list">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index} 
                  className="reason-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-details">
                    <h3>{reason.title}</h3>
                    <p>{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="why-us-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="why-us-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <h3>98%</h3>
              <p>On-time Delivery Rate</p>
            </motion.div>
            <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fleet Management Team" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
