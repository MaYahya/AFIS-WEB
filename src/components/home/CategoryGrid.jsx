import { Link } from 'react-router-dom';
import { FiMonitor, FiPrinter, FiMaximize, FiBox, FiTag, FiCpu } from 'react-icons/fi';
import { categories } from '../../data/siteData';
import './ProductSections.css';

const iconMap = {
  FiMonitor: FiMonitor,
  FiPrinter: FiPrinter,
  FiMaximize: FiMaximize,
  FiBox: FiBox,
  FiTag: FiTag,
  FiCpu: FiCpu,
};

const CategoryGrid = () => {
  return (
    <section className="section categories-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Browse Categories</span>
          <h2>Shop By Category</h2>
          <p>Find the perfect hardware for your business needs</p>
        </div>
        <div className="grid-categories">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || FiMonitor;
            return (
              <Link to={`/products?category=${cat.slug}`} className="category-card" key={cat.id}>
                <div className="category-icon">
                  <Icon />
                </div>
                <h3>{cat.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
