import { Link, useParams } from 'react-router-dom';
import { FiPackage, FiPlus, FiTrash2, FiStar, FiChevronRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useSiteData } from '../context/SiteContext';
import { getImageUrl } from '../services/api';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { allProducts, config, loading } = useSiteData();
  const { addToCart, removeFromCart, cartItems } = useCart();
  
  if (loading) return <div className="loading-state">Loading product details...</div>;

  // Find product from live data
  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts.find(p => p.slug === id);

  if (!product) {
    return (
      <div className="page-wrapper container" style={{ paddingTop: '150px' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="page-wrapper product-detail-page">
      <div className="container" style={{ paddingTop: '120px' }}>
        <div className="breadcrumb">
          <Link to="/products">Products</Link>
          <FiChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-detail-image">
            {product.image ? (
              <img src={getImageUrl(product.image)} alt={product.name} />
            ) : (
              <div className="product-detail-placeholder">
                <FiPackage size={120} />
              </div>
            )}
          </div>

          <div className="product-detail-info">
            <span className="info-brand">{product.brand}</span>
            <h1>{product.name}</h1>
            
            <div className="info-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill={i < Math.floor(product.rating || 5) ? '#FFC107' : 'none'} color="#FFC107" size={18} />
                ))}
              </div>
              <span>{product.rating || '5.0'}</span>
            </div>

            <div className="info-price">
              <span className="currency">{config.currency}</span> {product.price}
            </div>

            <p className="info-desc">{product.description}</p>

            <div className="info-actions">
              {isInCart ? (
                <button 
                  className="btn btn-outline" 
                  onClick={() => removeFromCart(product.id)}
                  style={{ borderColor: '#ef4444', color: '#ef4444' }}
                >
                  <FiTrash2 size={18} /> Remove from Cart
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  <FiPlus size={18} /> Add to Cart
                </button>
              )}
              <Link to="/contact" className="btn btn-outline">Request Custom Quote</Link>
            </div>

            <div className="info-features">
              <h3>Key Specifications</h3>
              {product.specs ? (
                <div className="specs-json">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  <li>Genuine Brand New Hardware</li>
                  <li>1 Year Local Warranty in Qatar</li>
                  <li>Free Installation & Training</li>
                  <li>24/7 Technical Support</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
