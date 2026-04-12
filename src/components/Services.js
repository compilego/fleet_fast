import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Compliance',
      icon: '✓',
      intro: 'Comprehensive compliance management to keep your operations legal and safe.',
      details: 'Navigating the complex landscape of DOT regulations requires expertise. Our compliance services ensure your fleet meets all state and federal guidelines, minimizing risk and maximizing uptime.',
      features: [
        'DOT compliance support',
        'Safety standards monitoring',
        'Documentation handling',
        'Regulatory monitoring',
        'Audit readiness & prep'
      ]
    },
    {
      id: 2,
      title: 'Dispatch',
      icon: '🚚',
      intro: 'Efficient load planning and route coordination tailored to your fleet\'s needs.',
      details: 'We maximize your earning potential by finding the best loads, planning optimized routes, and maintaining constant communication with your drivers to ensure timely deliveries.',
      features: [
        'Advanced load planning',
        'Route coordination',
        '24/7 communication support',
        'Shipment scheduling',
        'Driver coordination'
      ]
    },
    {
      id: 3,
      title: 'Fleet Management',
      icon: '⚙️',
      intro: 'End-to-end fleet oversight for maximum performance and cost efficiency.',
      details: 'Take control of your transport operations with our holistic fleet management solutions. From vehicle upkeep to driver performance, we provide actionable insights to drive your business forward.',
      features: [
        'Real-time vehicle tracking',
        'Maintenance monitoring',
        'Fuel efficiency overview',
        'Driver performance insights',
        'Operational efficiency analysis'
      ]
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header text-center">
          <h4 className="section-subtitle">Our Expertise</h4>
          <h2 className="section-title">Premium Logistics Services</h2>
          <p className="services-subtitle-text">We provide specialized solutions across compliance, dispatch, and fleet management to ensure your logistics business runs smoothly.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-intro">{service.intro}</p>
              <div className="service-details">
                <p>{service.details}</p>
              </div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}><span className="check">✓</span> {feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
