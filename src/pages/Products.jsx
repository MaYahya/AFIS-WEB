import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiStar, FiMonitor, FiChevronRight, FiChevronLeft, FiFilter, FiPlus, FiTrash2 } from 'react-icons/fi';
import { siteConfig, featuredProducts, categories } from '../data/siteData';
import terminalImg from '../assets/terminal.png';
import printerImg from '../assets/printer.png';
import scannerImg from '../assets/scanner.png';
import { useCart } from '../context/CartContext';
import './Pages.css';

const banners = [
  {
    id: 1,
    title: 'Modern POS Solutions',
    subtitle: 'Streamline your retail or restaurant operations with the latest terminal hardware.',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    image: terminalImg
  },
  {
    id: 2,
    title: 'Precision Printing',
    subtitle: 'High-speed thermal and label printers for every business need.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    image: printerImg
  }
];

const Products = () => {
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

  // Extend mock products for a fuller grid
  const allProducts = [
    { ...featuredProducts[0], categorySlug: 'pos-systems' },
    { ...featuredProducts[1], categorySlug: 'receipt-printers' },
    { ...featuredProducts[2], categorySlug: 'barcode-scanners' },
    { ...featuredProducts[3], categorySlug: 'cash-drawers' },
    { ...featuredProducts[4], categorySlug: 'label-printers' },
    { id: 6, name: 'EPSON TM-U220', description: 'Dot Matrix Kitchen Printer', price: '950', rating: 4.4, reviews: 21, brand: 'EPSON', categorySlug: 'receipt-printers' },
    { id: 7, name: 'SUNMI V2 Pro', description: 'Mobile Handheld POS', price: '1,200', rating: 4.9, reviews: 67, badge: 'New', brand: 'SUNMI', categorySlug: 'pos-systems' },
    { id: 8, name: 'Zebra DS2208', description: '2D Handheld Imager Scanner', price: '520', rating: 4.6, reviews: 34, brand: 'Zebra', categorySlug: 'barcode-scanners' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.categorySlug === activeCategory);

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
                <div className="banner-image">
                  <img src={banner.image} alt={banner.title} />
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
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
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
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <Link to={`/products/${product.id}`} className="product-image">
                    {product.id === 1 && <img src={terminalImg} alt={product.name} />}
                    {product.id === 2 && <img src={printerImg} alt={product.name} />}
                    {product.id === 3 && <img src={scannerImg} alt={product.name} />}
                    {product.id > 3 && (
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
                      <button className="product-view-btn" onClick={() => addToCart({ ...product, price: product.price.toString() })}>
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

export default Products;
