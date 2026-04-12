import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailConfig, isEmailConfigValid, getMissingCredentials } from '../utils/emailConfig';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  // Initialize EmailJS
  useEffect(() => {
    if (emailConfig.PUBLIC_KEY) {
      emailjs.init(emailConfig.PUBLIC_KEY);
    } else {
      console.warn('EmailJS not configured. Missing credentials:', getMissingCredentials());
    }
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      errors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous status
    setSubmitStatus(null);
    setErrorMessage('');

    // Check if EmailJS is configured
    if (!isEmailConfigValid()) {
      setSubmitStatus('error');
      setErrorMessage(
        'Email service is not configured. Please contact the website administrator.'
      );
      console.error('Missing EmailJS credentials:', getMissingCredentials());
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        formRef.current,
        emailConfig.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');

        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.text || 'Failed to send message. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-header text-center">
          <h4 className="section-subtitle">Get in Touch</h4>
          <h2 className="section-title">Ready to Optimize Your Logistics?</h2>
          <p>Contact our team today to discuss how our dispatch, compliance, and fleet management services can benefit your business.</p>
        </div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Office Details</h3>
                <p>2555 114th Street Grand Prairie,TX-75050<br/></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+1-(877)-468-7701</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>support@fleetfast.us</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                className="form-message success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="form-message error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✗ {errorMessage}
              </motion.div>
            )}

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldErrors.name ? 'input-error' : ''}
                  disabled={isLoading}
                />
                {fieldErrors.name && (
                  <span className="field-error">{fieldErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldErrors.email ? 'input-error' : ''}
                  disabled={isLoading}
                />
                {fieldErrors.email && (
                  <span className="field-error">{fieldErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={fieldErrors.service ? 'input-error' : ''}
                  disabled={isLoading}
                >
                  <option value="">Service of Interest</option>
                  <option value="compliance">Compliance</option>
                  <option value="dispatch">Dispatch</option>
                  <option value="fleet">Fleet Management</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {fieldErrors.service && (
                  <span className="field-error">{fieldErrors.service}</span>
                )}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={fieldErrors.message ? 'input-error' : ''}
                  disabled={isLoading}
                ></textarea>
                {fieldErrors.message && (
                  <span className="field-error">{fieldErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="button-loading">
                    <span className="spinner"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
