import { Link } from 'react-router-dom';
import { logos } from '../utils/assetMapper';

export default function ProjectCard({ id, image, name, type, role, contract, contractColor, stack, category }) {
  return (
    <div className="col-lg-4 col-sm-6 mt-4">
      <div className={`card ${category === "game" ? 'game-project-card-container' : 'project-card-container' }`}>
        <img src={image} className={`card-img-top ${id === 8 ? 'project-card-img-small' : ''}`} alt={name} />
        <div className="card-body card-body-flex">
          <div className="tech-icons-container">
            {stack && stack.map(tech => (
              <img key={tech} src={logos[tech]} alt={tech} className="tech-icon" />
            ))}
          </div>
          <div className="mt-auto">
            <h5 className="card-title fw-bold">{name}</h5>
            <p className="card-text mb-1">{role}</p>
            <p className="card-text fw-bold mb-3" style={{ color: contractColor }}>{contract}</p>
            <Link to={`/project/${id}`} className="btn btn-outline-dark align-self-start">
              More information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
