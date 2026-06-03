import { useState, useEffect, useRef } from 'react';
import { FiCheck, FiAward, FiTool, FiUsers, FiShield, FiHeadphones } from 'react-icons/fi';
import { whyChooseUsFeatures, statistics } from '../../data/siteData';
import './WhyChooseUs.css';

const iconMap = {
  FiCheck: FiCheck,
  FiAward: FiAward,
  FiTool: FiTool,
  FiUsers: FiUsers,
  FiShield: FiShield,
  FiHeadphones: FiHeadphones,
};

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <h2>Why Choose Us?</h2>
            <p>We are a trusted partner for complete POS and IT solutions in Qatar with years of experience serving businesses across industries.</p>
            <div className="why-features-list">
              {whyChooseUsFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon] || FiCheck;
                return (
                  <div className="why-feature" key={index}>
                    <div className="why-feature-icon"><Icon /></div>
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="why-stats">
            {statistics.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-value">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
