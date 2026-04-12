import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import './ServicePage.css';

const Dispatch = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-hero dispatch-bg">
        <div className="service-hero-overlay"></div>
        <motion.div 
          className="service-hero-content container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Freight Dispatch Services</h1>
          <p>Efficient load planning and route coordination tailored exactly to your fleet's needs.</p>
        </motion.div>
      </div>

      <div className="service-details-section section-padding container">
        <div className="service-grid-layout reverse">
          <motion.div 
            className="service-text-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Maximize Your Earning Potential</h2>
            <p>We work tirelessly to find the best-paying loads, plan optimized routes, and keep your trucks moving. Our dedicated dispatchers act as your business partners.</p>
            
            <ul className="service-feature-list">
              <li><span className="check">✓</span> Advanced load planning and rate negotiation</li>
              <li><span className="check">✓</span> Route coordination for maximum profitability</li>
              <li><span className="check">✓</span> 24/7 communication and continuous support</li>
              <li><span className="check">✓</span> Precise shipment scheduling and tracking</li>
              <li><span className="check">✓</span> Direct driver coordination and check-ins</li>
            </ul>
          </motion.div>
          <motion.div 
            className="service-image-content"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://i.pinimg.com/736x/c6/fd/04/c6fd04a4998ce691675d2ae623b47c4e.jpg" alt="Dispatch Operations" />
          </motion.div>
        </div>
      </div>

      <div className="service-benefits-section section-padding bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Why Choose Us</h4>
            <h2 className="section-title">The Benefits of Professional Dispatch</h2>
          </div>
          <div className="benefits-grid">
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">📈</div>
              <h3>Higher Rates</h3>
              <p>We leverage our network to negotiate the best possible rates for your freight.</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">🛣️</div>
              <h3>Optimized Routes</h3>
              <p>Minimize empty miles and deadhead with strategic route planning.</p>
            </motion.div>
            <motion.div className="benefit-card" whileHover={{ y: -10 }}>
              <div className="benefit-icon">😌</div>
              <h3>Less Stress</h3>
              <p>We handle the broker calls and paperwork, letting you focus on driving.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="process-section section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">How It Works</h4>
            <h2 className="section-title">Our Dispatch Workflow</h2>
          </div>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Profile Analysis</h3>
              <p>We analyze your fleet, equipment types, and preferred lanes to find perfect matches.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Rate Negotiation</h3>
              <p>Our brokers negotiate aggressively on your behalf to secure the highest possible rates per mile.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Route Execution</h3>
              <p>We handle all check-calls, scheduling, and documentation while your drivers focus on the road.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Billing & Payment</h3>
              <p>We streamline the paperwork and invoicing process internally so you get paid faster.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="metrics-section section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Real Results</h4>
            <h2 className="section-title">Dispatch Impact</h2>
          </div>
          <div className="metrics-grid">
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>20%</h3>
              <p>Average increase in gross revenue</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>$0</h3>
              <p>Sign-up or hidden fees</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>24/7</h3>
              <p>Dedicated dispatch support</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>15%</h3>
              <p>Reduction in deadhead miles</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default Dispatch;
