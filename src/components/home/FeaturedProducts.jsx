import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiMonitor, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useSiteData } from '../../context/SiteContext';
import { getImageUrl } from '../../services/api';
import { useCart } from '../../context/CartContext';
import './ProductSections.css';

const FeaturedProducts = () => {
  const { featuredProducts, config, loading } = useSiteData();
  const { addToCart, removeFromCart, cartItems } = useCart();

  if (loading) return null;

  const isInCart = (productId) => cartItems.some(item => item.id === productId);

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
          {featuredProducts.length > 0 ? featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              {product.badge && <span className="product-badge">{product.badge}</span>}
              <Link to={`/products/${product.id}`} className="product-image">
                {product.image ? (
                  <img src={getImageUrl(product.image)} alt={product.name} />
                ) : (
                  <div className="product-image-placeholder">
                    <FiMonitor size={32} />
                  </div>
                )}
              </Link>
              <span className="product-brand">{product.brand}</span>
              <Link to={`/products/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p className="product-desc">{product.description}</p>
              <div className="product-price">
                <span className="currency">{config.currency}</span> {product.price}
              </div>
              <div className="product-meta">
                <div className="product-rating">
                  <FiStar className="star" size={14} />
                  <span>{product.rating || '5.0'}</span>
                </div>
                {isInCart(product.id) ? (
                  <button 
                    className="product-view-btn remove-btn" 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); removeFromCart(product.id); }}
                    style={{ borderColor: '#ef4444', color: '#ef4444' }}
                  >
                   <FiTrash2 size={14} /> Remove
                  </button>
                ) : (
                  <button className="product-view-btn" type="button" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    <FiPlus size={14} /> Add to Cart
                  </button>
                )}
              </div>
            </div>
          )) : (
            <div className="no-products-msg">No featured products found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
