import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroVideo from '../assets/hero_video.mp4';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Word splitting for h1
const splitWords = (text) => {
  return text.split(' ').map((word, i) => (
    <span key={i} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
      {word}
    </span>
  ));
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h1 variants={itemVariants}>
          {splitWords("Intelligent Logistics.")} <br />
          {splitWords("Seamless Delivery.")}
        </motion.h1>
        <motion.p variants={itemVariants}>
          Accelerate your fleet's potential with proactive dispatch and compliance.
        </motion.p>
        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >
          <Link to="/services/dispatch" className="btn btn-primary">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get Started
          </Link>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;