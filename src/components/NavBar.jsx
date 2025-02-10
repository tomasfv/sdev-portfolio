import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function NavBar(){

    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container-lg">
        <Link to="/" className="navbar-brand fw-bold">Tomas Fernandez Valdes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavigation('/', 'hero')} style={{ cursor: 'pointer' }}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavigation('/', 'services')} style={{ cursor: 'pointer' }}>Services</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavigation('/', 'about')} style={{ cursor: 'pointer' }}>About</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavigation('/', 'projects')} style={{ cursor: 'pointer' }}>Projects</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavigation('/', 'testimonials')} style={{ cursor: 'pointer' }}>Skills</span>
            </li>
            <li className="nav-item">
              <span className="nav-link d-lg-none" onClick={() => handleNavigation('/', 'contact')} style={{ cursor: 'pointer' }}>Contact</span>
            </li>
            <li className="nav-item">
              <a href="/public/TomásFernándezValdés_ SoftwareDev_ENG2025.pdf" download="TomásFernándezValdés_SoftwareDev_ENG2025.pdf" className="nav-link d-lg-none">Download CV</a>
            </li>
          </ul>
          <span className="btn btn-outline-dark d-none d-lg-block me-4" onClick={() => handleNavigation('/', 'contact')} style={{ cursor: 'pointer' }}>Lets Talk</span>
          <a href="/public/TomásFernándezValdés_ SoftwareDev_ENG2025.pdf" download="TomásFernándezValdés_SoftwareDev_ENG2025.pdf" className="btn btn-outline-dark d-none d-lg-block">Download CV</a>
        </div>
      </div>
    </nav>
  )
}