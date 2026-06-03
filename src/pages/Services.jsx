import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './Pages.css';

const Services = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiSettings /></div>
      <h1>Our IT Services</h1>
      <p>From POS installation to CCTV and networking, we cover all your IT needs.</p>
      <Link to="/contact" className="btn btn-primary">Inquire Now</Link>
    </div>
  );
};

export default Services;
