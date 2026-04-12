import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import './ServicePage.css';

const FleetManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-hero fleet-bg">
        <div className="service-hero-overlay"></div>
        <motion.div 
          className="service-hero-content container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Complete Fleet Management</h1>
          <p>End-to-end fleet oversight for optimal performance, safety, and cost efficiency.</p>
        </motion.div>
      </div>

      <div className="service-details-section section-padding container">
        <div className="service-grid-layout">
          <motion.div 
            className="service-text-content"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Take Control of Your Operations</h2>
            <p>Our holistic fleet management solutions provide actionable insights to drive your business forward. From precise tracking to preventative maintenance, we have you covered.</p>
            
            <ul className="service-feature-list">
              <li><span className="check">✓</span> Precise real-time vehicle GPS tracking</li>
              <li><span className="check">✓</span> Preventative maintenance scheduling/monitoring</li>
              <li><span className="check">✓</span> Comprehensive fuel efficiency overview</li>
              <li><span className="check">✓</span> Detailed driver performance insights</li>
              <li><span className="check">✓</span> Overall operational efficiency metrics tracking</li>
            </ul>
          </motion.div>
          <motion.div 
            className="service-image-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://i.pinimg.com/736x/0d/99/34/0d99342000e0c9ffdc37b52d1f83fc46.jpg" alt="Fleet Management Dashboard" />
          </motion.div>
        </div>
      </div>

      <div className="service-benefits-section section-padding bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Core Advantages</h4>
            <h2 className="section-title">Why Use Our Fleet Management</h2>
          </div>
          <div className="benefits-grid">
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">🔧</div>
              <h3>Minimize Downtime</h3>
              <p>Proactive maintenance scheduling keeps your trucks on the road longer.</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">⛽</div>
              <h3>Fuel Optimization</h3>
              <p>Track routing and idling behaviors to drastically cut fuel expenses.</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">📊</div>
              <h3>Data-Driven Decisions</h3>
              <p>Access intuitive dashboards that reveal real-time operational insights.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="process-section section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Integration Steps</h4>
            <h2 className="section-title">How We Onboard Your Fleet</h2>
          </div>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>System Setup</h3>
              <p>We install and connect telematics and tracking software across your vehicles.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Data Sync</h3>
              <p>Historical data and maintenance records are imported into our centralized platform.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Goal Setting</h3>
              <p>We work with you to establish KPIs for fuel, safety, and vehicle utilization.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Active Tracking</h3>
              <p>Continuous oversight begins, providing you with weekly performance reports.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="metrics-section section-padding bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Real Results</h4>
            <h2 className="section-title">The FleetFast Impact</h2>
          </div>
          <div className="metrics-grid">
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>25%</h3>
              <p>Average reduction in administrative costs</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>15%</h3>
              <p>Increase in overall fleet fuel efficiency</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>30%</h3>
              <p>Reduction in unscheduled vehicle downtime</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>99%</h3>
              <p>On-time delivery and scheduling accuracy</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default FleetManagement;
