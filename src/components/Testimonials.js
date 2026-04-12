import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      quote: "FleetFast revolutionized our dispatch operations. Our drivers are happier, and our routes are significantly more profitable. The real-time support is unmatched.",
      author: "Michael T.",
      position: "Fleet Owner, Atlas Cargo"
    },
    {
      quote: "DOT compliance used to be a massive headache for our team. Since partnering with FleetFast, we've had flawless audits and absolute peace of mind.",
      author: "Sarah L.",
      position: "Safety Director, TransRoute"
    },
    {
      quote: "The fleet management insights we receive are game-changing. We have reduced our fuel costs and optimized maintenance schedules efficiently.",
      author: "David K.",
      position: "Operations Manager, FastFreight"
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="text-center">
          <h4 className="section-subtitle">Testimonials</h4>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{review.quote}</p>
              <div className="testimonial-author">
                <h4>{review.author}</h4>
                <span>{review.position}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
