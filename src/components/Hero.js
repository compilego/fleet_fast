import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroVideo from '../assets/hero_video.mp4';

// Animation variants
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
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Reliable Logistics <br />
          Fast & Secure Deliveries
        </motion.h1>

        <motion.p variants={itemVariants}>
          We provide efficient transport and delivery solutions to move your goods safely, on time, every time.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >
          <Link to="/contact" className="btn btn-primary">
            Book a Service
          </Link>

          <Link to="/services/dispatch" className="btn btn-secondary">
            View Services
          </Link>
        </motion.div>

        <motion.div
          className="hero-contact"
          variants={itemVariants}
        >
          📞 +1 (877) 468-7701
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;