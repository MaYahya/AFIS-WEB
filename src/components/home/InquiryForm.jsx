import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './Sections.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', product: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been submitted. We will contact you shortly.');
    setFormData({ name: '', company: '', phone: '', email: '', product: '', message: '' });
  };

  return (
    <section className="section inquiry-section">
      <div className="container">
        <div className="inquiry-wrapper">
          <div className="inquiry-header">
            <h2>Send Us An Inquiry</h2>
            <p>Have any questions or need a quote? Fill the form and our team will get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="Your full name"
                  value={formData.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text" id="company" name="company"
                  placeholder="Your company"
                  value={formData.company} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone"
                  placeholder="Your phone number"
                  value={formData.phone} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="Your email address"
                  value={formData.email} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="product">Product Interested In</label>
                <select id="product" name="product" value={formData.product} onChange={handleChange}>
                  <option value="">Select a product</option>
                  <option value="pos-systems">POS Systems</option>
                  <option value="receipt-printers">Receipt Printers</option>
                  <option value="barcode-scanners">Barcode Scanners</option>
                  <option value="cash-drawers">Cash Drawers</option>
                  <option value="label-printers">Label Printers</option>
                  <option value="software">POS Software</option>
                  <option value="networking">Networking</option>
                  <option value="cctv">CCTV</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Write your message..."
                  value={formData.message} onChange={handleChange}
                  rows="4"
                />
              </div>
              <div className="full-width">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Inquiry <FiSend size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
