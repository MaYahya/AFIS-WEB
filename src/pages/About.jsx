import { FiTarget, FiAward, FiUsers } from 'react-icons/fi';
import './Pages.css';

const About = () => {
  return (
    <div className="page-wrapper" style={{ paddingBottom: 0 }}>
      <div className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>
            AFIS IT & POS Solutions began with a simple mission: to empower businesses 
            with reliable, lightning-fast hardware built for modern retail and hospitality.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Pioneering Digital Retail</h2>
            <p>
              We understand that point-of-sale systems are the heartbeat of your operations. 
              Downtime is not an option. That's why we meticulously curate and build hardware 
              that withstands the incredible demands of high-traffic environments. 
            </p>
            <p>
              From seamless touchscreen terminals to blazing fast thermal receipt printers, 
              everything we do is engineered around speed, reliability, and unparalleled technical support.
            </p>
          </div>
          <div className="about-image">
            <div style={{ background: '#e2e8f0', borderRadius: '16px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#94a3b8', fontSize: '18px', fontWeight: '500' }}>[ Premium Team / Office Image ]</span>
            </div>
          </div>
        </div>

        <div className="about-grid" style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="about-image" style={{ order: -1 }}>
            <div style={{ background: '#e2e8f0', borderRadius: '16px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#94a3b8', fontSize: '18px', fontWeight: '500' }}>[ Operations / Warehouse Image ]</span>
            </div>
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              To relentlessly provide cutting-edge hardware solutions coupled with proactive 
              support services, ensuring that local businesses thrive without technical friction.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FiTarget size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Laser Focused</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-sub)' }}>We only deal in hardware technologies we absolutely master.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FiAward size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Guaranteed Quality</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-sub)' }}>Every system is rigorously benchmarked before deployment.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FiUsers size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Dedicated Support</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-sub)' }}>Our local engineers are available 24/7 to keep you running.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
