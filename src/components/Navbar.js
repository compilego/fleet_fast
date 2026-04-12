import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/fleet_fast_1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open (mobile only)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const isActive = (path) => (location.pathname === path ? 'active-link' : '');

  // Animation variants for mobile menu links (staggered effect)
  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' } },
  };

  // List of navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services/compliance', label: 'Compliance' },
    { path: '/services/dispatch', label: 'Dispatch' },
    { path: '/services/fleet-management', label: 'Fleet Management' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="FleetFast Logo" className="logo-img" />
        </Link> 

        {/* Desktop Menu - visible on larger screens*/ }
        <div className="navbar-menu desktop-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                {item.label === 'Contact' ? (
                  <Link
                    to={item.path}
                    className={`btn-primary ${isActive(item.path)}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link to={item.path} className={isActive(item.path)} onClick={closeMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="menu-content">
              <ul className="menu-links">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.path}
                      className={isActive(item.path)}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;