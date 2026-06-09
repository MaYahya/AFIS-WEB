import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiStar, FiMonitor, FiChevronRight, FiChevronLeft, FiFilter, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useSiteData } from '../context/SiteContext';
import { getImageUrl } from '../services/api';
import heroProduct from '../assets/hero1.png';
import './Pages.css';

const Products = () => {
  const { allProducts, categories, banners: allBanners, config, loading } = useSiteData();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, removeFromCart, cartItems } = useCart();
  const activeCategory = searchParams.get('category') || 'all';
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter banners for the products page
  const pageBanners = allBanners.filter(b => b.page === 'products');

  useEffect(() => {
    if (pageBanners.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % pageBanners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [pageBanners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % pageBanners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + pageBanners.length) % pageBanners.length);

  if (loading) return <div className="loading-state">Loading products...</div>;

  const isInCart = (productId) => cartItems.some(item => item.id === productId);

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  // Only show hardware/product categories in sidebar
  const productCategories = categories.filter(cat => cat.type === 'product');

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts.filter(p => !p.category || p.category.type === 'product') 
    : allProducts.filter(p => p.category?.slug === activeCategory);

  return (
    <div className="page-wrapper">
      {/* Dynamic Landscape Banner */}
      {pageBanners.length > 0 && (
        <div className="products-banner-wrapper">
          <div className="products-banner-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {pageBanners.map((banner) => (
              <div className="products-banner-slide" key={banner.id}>
                <div className="container">
                  <div className="banner-content">
                    <h2>{banner.title}</h2>
                    <p>{banner.subtitle}</p>
                  </div>
                  <div className="banner-image">
                    <img src={banner.image ? getImageUrl(banner.image) : heroProduct} alt={banner.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {pageBanners.length > 1 && (
            <>
              <button className="slider-btn prev" onClick={prevSlide}><FiChevronLeft size={24} /></button>
              <button className="slider-btn next" onClick={nextSlide}><FiChevronRight size={24} /></button>
              <div className="slider-dots">
                {pageBanners.map((_, idx) => (
                  <button key={idx} className={`slider-dot ${currentSlide === idx ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="container page-content" style={{ paddingTop: pageBanners.length > 0 ? '40px' : '120px' }}>
        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="sidebar-widget">
              <h3><FiFilter size={16} /> Categories</h3>
              <ul className="category-list">
                <li>
                  <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>
                    All Products
                  </button>
                </li>
                {productCategories.map((cat) => (
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
              <h1>Our Products</h1>
              <span>Showing {filteredProducts.length} items</span>
            </div>

            <div className="page-grid">
              {filteredProducts.length > 0 ? filteredProducts.map((product) => (
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
                        className="product-view-btn" 
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
                <div className="no-products-msg">No products found for this category.</div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
