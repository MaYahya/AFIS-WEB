import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <img src={logoImg} alt="AFIS Logo" className="logo-img" />
            </Link>
            <p>We provide complete IT Hardware, POS Systems and Point of Sale solutions to help your business grow.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4>Products</h4>
            <div className="footer-links">
              <Link to="/products?category=pos-systems">POS Systems</Link>
              <Link to="/products?category=receipt-printers">Receipt Printers</Link>
              <Link to="/products?category=barcode-scanners">Barcode Scanners</Link>
              <Link to="/products?category=cash-drawers">Cash Drawers</Link>
              <Link to="/products?category=label-printers">Label Printers</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiMapPin /></div>
              <div className="footer-contact-text">
                <strong>Address</strong>
                {siteConfig.address}
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiPhone /></div>
              <div className="footer-contact-text">
                <strong>Phone</strong>
                {siteConfig.phone} <br />
                {siteConfig.phone2}
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiMail /></div>
              <div className="footer-contact-text">
                <strong>Email</strong>
                {siteConfig.email}
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FiGlobe /></div>
              <div className="footer-contact-text">
                <strong>Website</strong>
                www.afis.qa
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AFIS IT & POS Solutions. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button className="scroll-top-footer" onClick={scrollToTop} aria-label="Scroll to top">
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
