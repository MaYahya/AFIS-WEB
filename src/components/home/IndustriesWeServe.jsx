import { FiCoffee, FiShoppingBag, FiShoppingCart, FiHeart, FiCpu, FiTag, FiTruck } from 'react-icons/fi';
import { industries } from '../../data/siteData';
import './Sections.css';

const iconMap = {
  FiCoffee: FiCoffee,
  FiShoppingBag: FiShoppingBag,
  FiShoppingCart: FiShoppingCart,
  FiHeart: FiHeart,
  FiCpu: FiCpu,
  FiTag: FiTag,
  FiTruck: FiTruck,
};

const IndustriesWeServe = () => {
  return (
    <section className="section industries-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Serve</span>
          <h2>Industries We Serve</h2>
          <p>Tailored POS and IT solutions for every business type</p>
        </div>
        <div className="grid-industries">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || FiCpu;
            return (
              <div className="industry-card" key={ind.id}>
                <div className="industry-icon"><Icon /></div>
                <h3>{ind.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
