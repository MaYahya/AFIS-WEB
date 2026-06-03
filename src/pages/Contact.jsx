import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { siteConfig } from '../data/siteData';
import GoogleMap from '../components/home/GoogleMap';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-wrapper" style={{ paddingBottom: 0 }}>
      {/* Contact Hero */}
      <div className="contact-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Get in Touch</h1>
          <p style={{ color: 'var(--text-sub)', fontSize: '18px', lineHeight: '1.6' }}>
            Have a question about our POS systems or need technical support? 
            Our team is standing by to help you streamline your operations.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          
          {/* Form Section */}
          <div className="contact-card">
            <h2>Send a Request</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="+974 0000 0000" />
              </div>
              <div className="form-group">
                <label>How can we help?</label>
                <textarea className="form-control" placeholder="Tell us about your hardware requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Message <FiSend size={16} />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>Contact Information</h2>
            <p style={{ color: 'var(--text-sub)', lineHeight: '1.6', marginBottom: '40px' }}>
              We operate exclusively out of Doha to provide ultra-fast fulfillment 
              and localized support algorithms engineered for Qatar's business ecosystem.
            </p>

            <div className="contact-info-list" style={{ marginBottom: '48px' }}>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMapPin /></div>
                <div className="contact-info-text">
                  <h4>Headquarters</h4>
                  <p>{siteConfig.address}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiPhone /></div>
                <div className="contact-info-text">
                  <h4>Sales & Support</h4>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMail /></div>
                <div className="contact-info-text">
                  <h4>Email Address</h4>
                  <p>{siteConfig.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', height: '280px' }}>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
