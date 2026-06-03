import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import './Pages.css';

const About = () => {
  return (
    <div className="page-placeholder">
      <div className="page-icon"><FiUsers /></div>
      <h1>About Us</h1>
      <p>We are a leading provider of IT hardware and POS solutions in Qatar with over 10 years of experience.</p>
      <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
    </div>
  );
};

export default About;
