import { FiShoppingBag, FiShoppingCart, FiHeart, FiCoffee, FiZap, FiStar } from 'react-icons/fi';
import { clients } from '../../data/siteData';
import './Marquee.css';

const clientIcons = [FiCoffee, FiShoppingBag, FiShoppingCart, FiHeart, FiZap, FiStar];

const HappyClients = () => {
  const doubledClients = [...clients, ...clients];

  return (
    <section className="section clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Trusted By</span>
          <h2>Our Happy Clients</h2>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track" style={{ animationDuration: '35s' }}>
          {doubledClients.map((client, i) => {
            const Icon = clientIcons[i % clientIcons.length];
            return (
              <div className="client-logo" key={`${client.id}-${i}`}>
                <div className="client-icon"><Icon size={18} /></div>
                {client.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
