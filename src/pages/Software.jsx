import { Link } from 'react-router-dom';
import { FiCpu } from 'react-icons/fi';
import './Pages.css';

const Software = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiCpu /></div>
      <h1>POS Software Solutions</h1>
      <p>Discover our Totem POS software features, modules, and pricing plans.</p>
      <Link to="/request-quote" className="btn btn-primary">Request a Demo</Link>
    </div>
  );
};

export default Software;
