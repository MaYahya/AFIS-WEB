import { FiMapPin } from 'react-icons/fi';
import './Sections.css';

const GoogleMap = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.454778986113!2d51.5164638!3d25.2889202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5005c62e0dd%3A0xd97738a654617814!2sAl%20Darwish%20Jewellery!5e0!3m2!1sen!2sqa!4v1780429182503!5m2!1sen!2sqa"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        />
      </div>
    </section>
  );
};

export default GoogleMap;
