// EmailJS Configuration
// ====================
// Fill in your EmailJS credentials below
// Get these from: https://emailjs.com

export const emailConfig = {
  // Your EmailJS Service ID (e.g., "service_a1b2c3d4e5f6g7h8")
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',

  // Your EmailJS Template ID (e.g., "template_x1y2z3a4b5c6d7e8")
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',

  // Your EmailJS Public Key (e.g., "public_a1b2c3d4e5f6g7h8i9j0k1l")
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
};

// Validate configuration
export const isEmailConfigValid = () => {
  return (
    emailConfig.SERVICE_ID &&
    emailConfig.TEMPLATE_ID &&
    emailConfig.PUBLIC_KEY
  );
};

// Get missing credentials for error reporting
export const getMissingCredentials = () => {
  const missing = [];
  if (!emailConfig.SERVICE_ID) missing.push('SERVICE_ID');
  if (!emailConfig.TEMPLATE_ID) missing.push('TEMPLATE_ID');
  if (!emailConfig.PUBLIC_KEY) missing.push('PUBLIC_KEY');
  return missing;
};
