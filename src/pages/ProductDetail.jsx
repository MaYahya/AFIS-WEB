import { Link, useParams } from 'react-router-dom';
import { FiPackage, FiArrowLeft, FiPlus, FiTrash2, FiStar, FiChevronRight } from 'react-icons/fi';
import { featuredProducts, siteConfig } from '../data/siteData';
import { useCart } from '../context/CartContext';
import terminalImg from '../assets/terminal.png';
import printerImg from '../assets/printer.png';
import scannerImg from '../assets/scanner.png';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useCart();
  
  // Find product from mock data
  const product = featuredProducts.find(p => p.id === parseInt(id)) || {
    id: parseInt(id),
    name: 'Standard POS Hardware',
    brand: 'AFIS',
    price: '1,000',
    description: 'High-performance hardware designed for reliability and speed in modern business environments.',
    rating: 4.5,
    reviews: 12
  };

  const isInCart = cartItems.some(item => item.id === product.id);

  const getProductImage = (id) => {
    if (id === 1) return terminalImg;
    if (id === 2) return printerImg;
    if (id === 3) return scannerImg;
    return null;
  };

  const image = getProductImage(product.id);

  return (
    <div className="page-wrapper product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/products">Products</Link>
          <FiChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-detail-image">
            {image ? (
              <img src={image} alt={product.name} />
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
                  <FiStar key={i} fill={i < Math.floor(product.rating) ? '#FFC107' : 'none'} color="#FFC107" size={18} />
                ))}
              </div>
              <span>{product.rating} ({product.reviews} Reviews)</span>
            </div>

            <div className="info-price">
              <span className="currency">{siteConfig.currency}</span> {product.price}
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
              <ul>
                <li>Genuine Brand New Hardware</li>
                <li>1 Year Local Warranty in Qatar</li>
                <li>Free Installation & Training</li>
                <li>24/7 Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
