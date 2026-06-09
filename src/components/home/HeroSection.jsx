import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { useSiteData } from '../../context/SiteContext';
import { getImageUrl } from '../../services/api';
import heroProduct from '../../assets/hero1.png';
import './HeroSection.css';

const HeroSection = () => {
  const { banners, loading } = useSiteData();

  if (loading) return <section className="hero loading"></section>;

  // Use the first active banner or fallback to original heroProduct
  const activeBanner = banners.length > 0 ? banners[0] : null;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-label">{activeBanner?.subtitle || 'Smart Solutions For Your Business'}</span>
            <h1>
              {activeBanner ? activeBanner.title : (
                <>
                  IT Hardware &amp;
                  <span>POS Solutions</span>
                </>
              )}
            </h1>
            <p className="hero-desc">
              {activeBanner?.description || 'We provide complete range of POS systems, printers, barcode scanners and software solutions for Retail, Restaurant and Hospitality businesses.'}
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <FiArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Contact Us
              </Link>
            </div>
            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><FiCheck size={12} /></div>
                100% Genuine Products
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><FiCheck size={12} /></div>
                Best Price Guarantee
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><FiCheck size={12} /></div>
                Reliable After Sales Support
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={activeBanner?.image ? getImageUrl(activeBanner.image) : heroProduct} 
              alt="POS Terminal, Printer & Barcode Scanner" 
              className="hero-product-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
