import { brands } from '../../data/siteData';
import './Marquee.css';

const BrandsMarquee = () => {
  const doubledBrands = [...brands, ...brands];

  return (
    <section className="section brands-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Partners</span>
          <h2>Brands We Carry</h2>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {doubledBrands.map((brand, i) => (
            <div className="brand-logo" key={`${brand.id}-${i}`}>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
