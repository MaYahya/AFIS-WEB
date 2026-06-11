import { useSiteData } from '../../context/SiteContext';
import { getImageUrl } from '../../services/api';
import './HappyClients.css';

const HappyClients = () => {
  const { clients, loading } = useSiteData();

  if (loading) return null;
  if (!clients || clients.length === 0) return null;

  const doubled = [...clients, ...clients];

  return (
    <section className="section clients-section-new">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Trusted By</span>
          <h2>Our Happy Clients</h2>
        </div>
      </div>
      <div className="clients-marquee-wrap">
        <div className="clients-marquee-track">
          {doubled.map((client, i) => (
            <div className="client-card" key={`${client.id}-${i}`}>
              <div className="client-card-logo">
                {client.logo ? (
                  <img src={getImageUrl(client.logo)} alt={client.name} />
                ) : (
                  <span className="client-card-initials">{client.name.charAt(0)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
