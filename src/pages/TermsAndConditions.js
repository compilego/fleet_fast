import { motion } from 'framer-motion';
import './ServicePage.css';
import '../styles/LegalPages.css';

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="service-hero contact-bg">
        <div className="service-hero-overlay"></div>
        <motion.div
          className="service-hero-content container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Terms & Conditions</h1>
          <p>Please read our terms carefully before using our services</p>
        </motion.div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <div className="last-updated">
              <strong>Last Updated:</strong> April 12, 2026
            </div>

            <motion.p
              className="intro"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Welcome to FleetFast ("we," "us," or "our"). By using our website and services, you agree to the following terms and conditions. Please read them carefully.
            </motion.p>

            {/* Section 1 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using our website or services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>2. Use of the Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="legal-list">
                <li>Violate any applicable laws or regulations.</li>
                <li>Engage in any activity that could damage, disable, or impair the website.</li>
                <li>Interfere with another user's ability to use the website or services.</li>
                <li>Attempt to gain unauthorized access to any portion or feature of the website.</li>
                <li>Transmit any harmful or malicious code.</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>3. Account Registration</h2>
              <p>To access certain features of our services, you may need to create an account. You agree to:</p>
              <ul className="legal-list">
                <li>Provide accurate and complete information during the registration process.</li>
                <li>Keep your account details and password confidential.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
                <li>Be responsible for all activities that occur under your account.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>4. Intellectual Property</h2>
              <p>All content on the website, including text, graphics, logos, images, and software, is owned by or licensed to FleetFast and is protected by copyright and other intellectual property laws. You may not copy, distribute, reproduce, modify, or transmit any content without our prior written permission. Unauthorized use of any content may violate copyright, trademark, and other laws.</p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>5. Payments and Billing</h2>
              <p>If you purchase any products or services from us, you agree to:</p>
              <ul className="legal-list">
                <li>Provide accurate and current payment information.</li>
                <li>Accept all costs and fees associated with your purchase, including applicable taxes.</li>
                <li>Understand that prices may change from time to time with notice.</li>
                <li>Comply with all payment terms and conditions outlined in your service agreement.</li>
              </ul>
              <p>We reserve the right to suspend service for non-payment or billing disputes.</p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, FleetFast will not be liable for any damages, losses, or costs arising from your use of the website or services, including but not limited to:</p>
              <ul className="legal-list">
                <li>Direct, indirect, or consequential damages.</li>
                <li>Loss of profits, revenue, data, or business opportunities.</li>
                <li>Any errors or interruptions in the website or services.</li>
                <li>Third-party claims or actions.</li>
              </ul>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>7. Privacy Policy</h2>
              <p>Your use of the website and services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review our <a href="/privacy-policy" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Privacy Policy</a> for complete details on our data practices.</p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>8. Termination</h2>
              <p>We may suspend or terminate your access to the website or services at any time and for any reason, including if you violate these Terms and Conditions. You may also terminate your account or service at any time by contacting us in writing. Upon termination, your right to use the services immediately ceases.</p>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>9. Changes to Terms</h2>
              <p>We reserve the right to update, modify, or change these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website or services after changes are posted constitutes your acceptance of the modified terms. We encourage you to review these Terms and Conditions periodically to stay informed of any updates.</p>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>10. Governing Law</h2>
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law principles. Any disputes, claims, or actions arising from or relating to these Terms and Conditions or your use of the website and services shall be resolved in the appropriate courts of the relevant jurisdiction.</p>
            </motion.section>

            {/* Section 11 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>11. Severability</h2>
              <p>If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be reformed to the minimum extent necessary to make it valid and enforceable.</p>
            </motion.section>

            {/* Section 12 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>12. Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <div className="contact-box">
                <p><strong>Email:</strong> <a href="mailto:support@fleetfast.us">support@fleetfast.us</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1-(877)-468-7701">+1-(877)-468-7701</a></p>
                <p><strong>Address:</strong> 2555 <br/>114th Street Grand Prairie, TX 75050<br/>United States</p>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsAndConditions;
