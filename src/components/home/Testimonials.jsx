import { FiStar } from 'react-icons/fi';
import { testimonials } from '../../data/siteData';
import './Sections.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What They Say</span>
          <h2>Customer Testimonials</h2>
          <p>Hear from businesses we've helped grow</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} fill="#FFC107" size={16} />
                ))}
              </div>
              <blockquote>"{t.review}"</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
