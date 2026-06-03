import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiMail /></div>
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to our team at any time. We are here to help.</p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="tel:+97444445555" className="btn btn-primary">Call Us</a>
        <a href="mailto:info@totempos.com" className="btn btn-outline">Email Us</a>
      </div>
    </div>
  );
};

export default Contact;
