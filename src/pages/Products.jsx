import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import './Pages.css';

const Products = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiShoppingBag /></div>
      <h1>Our Products</h1>
      <p>Browse our complete range of POS systems, printers, scanners, and accessories.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default Products;
