import { Link, useParams } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import './Pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiPackage /></div>
      <h1>Product Details</h1>
      <p>Detailed information for product #{id}. Coming soon with full specifications, gallery, and quote form.</p>
      <Link to="/products" className="btn btn-primary">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
