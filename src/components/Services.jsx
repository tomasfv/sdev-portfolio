import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGear, faGamepad } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">What I Do </h2>
        <div className="row">
          <div className="col-lg col-sm-6 mt-4">
            <div className="card">
              <i className=""><FontAwesomeIcon icon={faLaptopCode} /></i>
              <div className="card-body">
                <h5 className="card-title fw-bold">Frontend Development</h5>
                <p className="card-text">React, TypeScript, JavaScript, HTML, CSS, React Query, Redux, Electron, Material UI, Tailwind, Bootstrap.</p>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 mt-4">
            <div className="card">
              <i className=""><FontAwesomeIcon icon={faGear} /></i>
              <div className="card-body">
                <h5 className="card-title fw-bold">Backend, APIs & Deployment</h5>
                <p className="card-text">Node.js, Express.js, PostgreSQL, REST APIs, Sequelize, Netlify, Railway, Cloud Deployment.</p>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 mt-4">
            <div className="card">
              <i className=""><FontAwesomeIcon icon={faGamepad} /></i>
              <div className="card-body">
                <h5 className="card-title fw-bold">Game Development (Additional Background)</h5>
                <p className="card-text">Unity3D, C#, AI Navigation, ML-Agents, Netcode, UnityWebRequest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
