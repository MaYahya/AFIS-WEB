import { Link } from 'react-router-dom';
import { FiStar, FiArrowRight, FiMonitor } from 'react-icons/fi';
import { featuredProducts, siteConfig } from '../../data/siteData';
import terminalImg from '../../assets/terminal.png';
import printerImg from '../../assets/printer.png';
import scannerImg from '../../assets/scanner.png';
import './ProductSections.css';

const FeaturedProducts = () => {
  return (
    <section className="section featured-section">
      <div className="container">
        <div className="featured-header">
          <div className="section-header">
            <span className="section-label">Top Picks</span>
            <h2>Featured Products</h2>
          </div>
          <Link to="/products" className="view-all-btn">
            View All Products <FiArrowRight size={16} />
          </Link>
        </div>
        <div className="grid-products">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              {product.badge && <span className="product-badge">{product.badge}</span>}
              <div className="product-image">
                {product.id === 1 && <img src={terminalImg} alt={product.name} />}
                {product.id === 2 && <img src={printerImg} alt={product.name} />}
                {product.id === 3 && <img src={scannerImg} alt={product.name} />}
                {product.id > 3 && (
                  <div className="product-image-placeholder">
                    <FiMonitor size={32} />
                  </div>
                )}
              </div>
              <span className="product-brand">{product.brand}</span>
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-price">
                <span className="currency">{siteConfig.currency}</span> {product.price}
              </div>
              <div className="product-meta">
                <div className="product-rating">
                  <FiStar className="star" size={14} />
                  <span>{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
                <Link to={`/products/${product.id}`} className="product-view-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
