import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { totemFeatures } from '../../data/siteData';
import './TotemPOS.css';

const TotemPOS = () => {
  return (
    <section className="section totem-section">
      <div className="container">
        <div className="totem-grid">
          <div className="totem-image-wrapper">
            <div className="totem-screenshot">
              <div className="totem-screenshot-mockup">
                <div className="totem-mock-sidebar">
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                  <div className="totem-mock-sidebar-item" />
                </div>
                <div className="totem-mock-content">
                  <div className="totem-mock-header">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="totem-mock-cards">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="totem-content">
            <span className="section-label" style={{ display: 'inline-block', marginBottom: 12 }}>Our Software</span>
            <h2>Totem POS Software</h2>
            <p>A complete cloud based POS software for Retail, Restaurant and Multi-Store businesses. Manage your entire business from anywhere.</p>
            <div className="totem-features-grid">
              {totemFeatures.map((feat, i) => (
                <div className="totem-feat" key={i}>
                  <div className="totem-feat-icon"><FiCheck size={11} /></div>
                  {feat}
                </div>
              ))}
            </div>
            <div className="totem-buttons">
              <Link to="/software" className="btn btn-primary">
                Learn More <FiArrowRight size={16} />
              </Link>
              <Link to="/request-quote" className="btn btn-outline">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotemPOS;
