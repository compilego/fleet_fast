import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import './ServicePage.css';

const Compliance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-hero compliance-bg">
        <div className="service-hero-overlay"></div>
        <motion.div 
          className="service-hero-content container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>DOT Compliance Services</h1>
          <p>Navigate the complex landscape of DOT regulations with expert guidance.</p>
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
            <h2>Stay Ahead of Regulations</h2>
            <p>Our comprehensive compliance services ensure your fleet meets all state and federal guidelines, minimizing risk, preventing costly fines, and maximizing your uptime.</p>
            
            <ul className="service-feature-list">
              <li><span className="check">✓</span> DOT compliance support and auditing</li>
              <li><span className="check">✓</span> Safety standards enforcement and monitoring</li>
              <li><span className="check">✓</span> Driver qualification file (DQF) maintenance</li>
              <li><span className="check">✓</span> Electronic Logging Device (ELD) monitoring</li>
              <li><span className="check">✓</span> IFTA fuel tax reporting and audits</li>
            </ul>
          </motion.div>
          <motion.div 
            className="service-image-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Compliance Audit" />
          </motion.div>
        </div>
      </div>

      <div className="service-benefits-section section-padding bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">The Advantages</h4>
            <h2 className="section-title">Why Professional Compliance Matters</h2>
          </div>
          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              whileHover={{ y: -10 }}
            >
              <div className="benefit-icon">🛡️</div>
              <h3>Risk Mitigation</h3>
              <p>Avoid surprising fines, out-of-service orders, and maintain a pristine safety rating.</p>
            </motion.div>
            <motion.div 
              className="benefit-card"
              whileHover={{ y: -10 }}
            >
              <div className="benefit-icon">⏱️</div>
              <h3>Time Saved</h3>
              <p>Focus on growing your fleet while we handle the endless paperwork and filings.</p>
            </motion.div>
            <motion.div 
              className="benefit-card"
              whileHover={{ y: -10 }}
            >
              <div className="benefit-icon">📈</div>
              <h3>Audit Readiness</h3>
              <p>We maintain your records so you are 100% prepared whenever inspectors arrive.</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="process-section section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Our Approach</h4>
            <h2 className="section-title">Compliance Workflow</h2>
          </div>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Initial Audit</h3>
              <p>We review your current DOT status and identify areas of risk and improvement.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Action Plan</h3>
              <p>Our experts develop a customized strategy to resolve any outstanding compliance issues.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>We establish compliant driver files, ELD monitoring, and maintenance logs.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Ongoing Management</h3>
              <p>Continuous monitoring ensures you remain audit-ready and fine-free year-round.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="metrics-section section-padding bg-light">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="section-subtitle">Proven Success</h4>
            <h2 className="section-title">Compliance by the Numbers</h2>
          </div>
          <div className="metrics-grid">
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>100%</h3>
              <p>Audit pass rate for active clients</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>0</h3>
              <p>Unexpected DOT fines or penalties</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>24hr</h3>
              <p>Turnaround on DQF updates</p>
            </motion.div>
            <motion.div className="metric-item" whileHover={{ y: -5 }}>
              <h3>30+</h3>
              <p>Years of combined DOT expertise</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default Compliance;
