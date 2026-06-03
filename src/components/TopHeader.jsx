import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';
import './TopHeader.css';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header-left">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
            <FiPhone size={14} />
            <span>{siteConfig.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <FiMail size={14} />
            <span>{siteConfig.email}</span>
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="whatsapp-link">
            <FaWhatsapp size={15} />
          </a>
        </div>
        <div className="top-header-right">
          <div className="top-header-hours">
            <FiClock size={14} />
            <span>{siteConfig.hours}</span>
          </div>
          <div className="top-header-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
