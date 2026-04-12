import { motion } from 'framer-motion';
import './ServicePage.css';
import '../styles/LegalPages.css';

const PrivacyPolicy = () => {
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
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Learn how we protect your data.</p>
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
              FleetFast ("we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in other ways.
            </motion.p>

            <motion.p
              className="intro"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              By using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </motion.p>

            {/* Section 1 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information when you interact with our website or use our services:</p>
              <ul className="legal-list">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide to us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, such as pages viewed, time spent on the site, clicks, and referral sources.</li>
                <li><strong>Cookies:</strong> Small data files that are stored on your device to track activity and preferences.</li>
              </ul>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>2. How We Use Your Information</h2>
              <p>We may use the information we collect for the following purposes:</p>
              <ul className="legal-list">
                <li>To provide and improve our services.</li>
                <li>To communicate with you, including sending marketing communications (with your consent).</li>
                <li>To personalize your experience on our website.</li>
                <li>To comply with legal obligations.</li>
                <li>To respond to your inquiries and support requests.</li>
                <li>To conduct research and analytics to enhance our offerings.</li>
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
              <h2>3. How We Share Your Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following cases:</p>
              <ul className="legal-list">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website or providing services.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to a legal request (e.g., court order, subpoena).</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
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
              <h2>4. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our security measures include encryption, secure servers, and access controls. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.</p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>5. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="legal-list">
                <li>Access and update your personal information.</li>
                <li>Request the deletion of your personal information.</li>
                <li>Opt-out of receiving marketing communications.</li>
                <li>Withdraw your consent at any time, where applicable.</li>
                <li>Request a copy of the data we hold about you.</li>
              </ul>
              <p>To exercise these rights, please contact us at the information provided in the "Contact Us" section below.</p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>6. Cookies</h2>
              <p>Our website uses cookies to enhance your experience and gather data on site usage. Cookies help us remember your preferences, understand how you use our site, and improve functionality. You can control cookies through your browser settings. Most web browsers allow you to disable cookies or alert you when a cookie is being sent.</p>
              <p>For more information about cookies, visit www.allaboutcookies.org.</p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>7. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              className="legal-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
              <div className="contact-box">
                <p><strong>Email:</strong> <a href="mailto:support@fleetfast.us">support@fleetfast.us</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1-(877)-468-7701">+1-(877)-468-7701</a></p>
                <p><strong>Address:</strong> 2555<br/>114th Street Grand Prairie,TX-75050<br/>United States</p>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
