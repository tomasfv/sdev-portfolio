import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGear, faGamepad } from '@fortawesome/free-solid-svg-icons';
import useReveal from '../hooks/useReveal';

function ServiceCard({ icon, title, text }) {
  const [ref, isVisible] = useReveal(0.1);
  return (
    <div className={`col-lg col-sm-6 mt-4 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="card">
        <i className=""><FontAwesomeIcon icon={icon} /></i>
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">What I Do </h2>
        <div className="row">
          <ServiceCard 
            icon={faLaptopCode} 
            title="Frontend Development" 
            text="React, TypeScript, JavaScript, Next.js, HTML, CSS, React Query, Redux, Electron, Tailwind, Material UI, Bootstrap." 
          />
          <ServiceCard 
            icon={faGear} 
            title="Backend, APIs & Deployment" 
            text="Node.js, Express.js, PostgreSQL, REST APIs, Sequelize, Netlify, Railway, Cloud Deployment." 
          />
          <ServiceCard 
            icon={faGamepad} 
            title="Game Development (Additional Background)" 
            text="Unity3D, C#, AI Navigation, ML-Agents, Netcode, UnityWebRequest." 
          />
        </div>
      </div>
    </section>
  );
}
