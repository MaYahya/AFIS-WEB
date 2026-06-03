import { FiMonitor, FiWifi, FiHeadphones, FiVideo, FiCode, FiSettings } from 'react-icons/fi';
import { services } from '../../data/siteData';
import './Sections.css';

const iconMap = {
  FiMonitor: FiMonitor,
  FiWifi: FiWifi,
  FiHeadphones: FiHeadphones,
  FiVideo: FiVideo,
  FiCode: FiCode,
  FiSettings: FiSettings,
};

const ServicesSection = () => {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2>Our Services</h2>
          <p>End-to-end IT and POS solutions for your business</p>
        </div>
        <div className="grid-services">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FiSettings;
            return (
              <div className="service-card" key={service.id}>
                <div className="service-icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
