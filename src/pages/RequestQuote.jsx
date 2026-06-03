import { Link } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';
import './Pages.css';

const RequestQuote = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiFileText /></div>
      <h1>Request a Quote</h1>
      <p>Fill out the form below to receive a customized quote for your business requirements.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default RequestQuote;
