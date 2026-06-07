import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { navLinks } from '../data/siteData';
import logoImg from '../assets/logo.png';
import { useCart } from '../context/CartContext';
import CartDrawer from './cart/CartDrawer';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="AFIS Logo" className="logo-img" />
        </Link>

        <div className="nav-links">
          {navLinks.map((link) =>
            link.submenu ? (
              <div className="nav-dropdown" key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name} <FiChevronDown size={14} />
                </Link>
                <div className="nav-dropdown-menu">
                  {link.submenu.map((sub) => (
                    <Link to={sub.path} key={sub.name}>{sub.name}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={link.path}
                key={link.name}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="nav-actions">
          <div className="nav-cta desktop-only">
            <Link to="/request-quote" className="btn btn-primary">
              Get a Quote <FiArrowRight size={16} />
            </Link>
          </div>

          <button className="nav-cart-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`nav-mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-drawer-header">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="AFIS Logo" className="logo-img" />
          </Link>
          <button
            className="nav-mobile-drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <div className="nav-mobile-links">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.name}>
                <button onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}>
                  {link.name}
                  <FiChevronDown
                    size={16}
                    style={{
                      transform: mobileSubmenu === link.name ? 'rotate(180deg)' : 'rotate(0)',
                      transition: '0.3s'
                    }}
                  />
                </button>
                {mobileSubmenu === link.name && (
                  <div className="nav-mobile-submenu">
                    {link.submenu.map((sub) => (
                      <Link to={sub.path} key={sub.name}>{sub.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={link.path} key={link.name}>{link.name}</Link>
            )
          )}
        </div>

        <div className="nav-mobile-cta">
          <Link to="/request-quote" className="btn btn-primary">
            Get a Quote <FiArrowRight size={16} />
          </Link>
        </div>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
