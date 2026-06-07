import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiStar, FiChevronRight, FiChevronLeft, FiFilter, FiMonitor, FiPlus, FiTrash2 } from 'react-icons/fi';
import { siteConfig } from '../data/siteData';
import { useCart } from '../context/CartContext';
import './Pages.css';

const banners = [
  {
    id: 1,
    title: 'Enterprise Software Solutions',
    subtitle: 'Power your business with industry-standard POS engines and security tools.',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  },
  {
    id: 2,
    title: 'Genuine System Licenses',
    subtitle: 'Secure, permanent OS & Office licenses for your workspace.',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
  }
];

const softwareProducts = [
  { id: 101, name: 'Totem POS Software', description: 'Advanced Point of Sale software optimized for retail and restaurants.', price: '1,500', rating: 4.8, reviews: 124, brand: 'Totem', badge: 'Best Seller', icon: 'POS', categorySlug: 'pos' },
  { id: 102, name: 'Totem Inventory Manager', description: 'Comprehensive stock and warehouse multi-location management.', price: '2,200', rating: 4.9, reviews: 89, brand: 'Totem', icon: 'INV', categorySlug: 'pos' },
  { id: 103, name: 'Windows 11 Professional', description: 'Genuine permanent license key for business workstations.', price: '650', rating: 4.7, reviews: 312, brand: 'Microsoft', icon: 'WIN', categorySlug: 'os' },
  { id: 104, name: 'Microsoft Office 2021', description: 'Lifetime license for Word, Excel, PowerPoint, and Outlook.', price: '850', rating: 4.5, reviews: 204, brand: 'Microsoft', icon: 'OFF', categorySlug: 'productivity' },
  { id: 105, name: 'Kaspersky Endpoint Security', description: 'Enterprise-grade antivirus and network protection.', price: '300 / yr', rating: 4.6, reviews: 156, brand: 'Kaspersky', icon: 'SEC', categorySlug: 'security' },
  { id: 106, name: 'Tally Prime Gold', description: 'High-performance multi-user accounting and compliance software.', price: '3,500', rating: 4.8, reviews: 78, brand: 'Tally Solutions', icon: 'ACC', categorySlug: 'accounting' },
];

const softwareCategories = [
  { id: 1, name: 'POS & Retail', slug: 'pos' },
  { id: 2, name: 'Operating Systems', slug: 'os' },
  { id: 3, name: 'Productivity', slug: 'productivity' },
  { id: 4, name: 'Security', slug: 'security' },
  { id: 5, name: 'Accounting', slug: 'accounting' },
];

const Software = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, removeFromCart, cartItems } = useCart();
  const activeCategory = searchParams.get('category') || 'all';

  const isInCart = (productId) => cartItems.some(item => item.id === productId);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? softwareProducts 
    : softwareProducts.filter(p => p.categorySlug === activeCategory);

  return (
    <div className="page-wrapper">
      {/* Landscape Sliding Banner */}
      <div className="products-banner-wrapper">
        <div className="products-banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {banners.map((banner) => (
            <div className="products-banner-slide" key={banner.id} style={{ background: banner.gradient }}>
              <div className="container">
                <div className="banner-content">
                  <h2>{banner.title}</h2>
                  <p>{banner.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn prev" onClick={prevSlide}><FiChevronLeft size={24} /></button>
        <button className="slider-btn next" onClick={nextSlide}><FiChevronRight size={24} /></button>
        <div className="slider-dots">
          {banners.map((_, idx) => (
            <button key={idx} className={`slider-dot ${currentSlide === idx ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} />
          ))}
        </div>
      </div>

      <div className="container page-content">
        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="sidebar-widget">
              <h3><FiFilter size={16} /> Categories</h3>
              <ul className="category-list">
                <li>
                  <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>
                    All Software
                  </button>
                </li>
                {softwareCategories.map((cat) => (
                  <li key={cat.id}>
                    <button className={activeCategory === cat.slug ? 'active' : ''} onClick={() => handleCategoryChange(cat.slug)}>
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="products-main">
            <div className="products-header">
              <h1>Software Solutions</h1>
              <span>Showing {filteredProducts.length} items</span>
            </div>

            <div className="page-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  
                  {/* Distinct Software Image Placeholder */}
                  <Link to={`/products/${product.id}`} className="product-image" style={{ background: '#f8fafc', padding: '24px', textDecoration: 'none' }}>
                    <div className="product-image-placeholder" style={{ 
                      width: '100%', height: '160px', 
                      background: 'var(--primary-light)', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      fontSize: '32px',
                      fontWeight: '800'
                    }}>
                      {product.icon}
                    </div>
                  </Link>

                  <span className="product-brand">{product.brand}</span>
                  <Link to={`/products/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
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
                    {isInCart(product.id) ? (
                      <button 
                        className="product-view-btn" 
                        onClick={() => removeFromCart(product.id)}
                        style={{ borderColor: '#ef4444', color: '#ef4444' }}
                      >
                       <FiTrash2 size={14} /> Remove
                      </button>
                    ) : (
                      <button className="product-view-btn" onClick={() => addToCart(product)}>
                        <FiPlus size={14} /> Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Software;
