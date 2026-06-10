import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "services", "about", "projects", "testimonials", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navLinks = [
    { label: "Home", section: "hero" },
    { label: "Services", section: "services" },
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Skills", section: "testimonials" },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-lg">
        <Link to="/" className="navbar-brand fw-bold">
          <span className="highlight-text">Tomas</span> Fernandez Valdes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.section}>
                <span
                  className={`nav-link${activeSection === link.section ? " active" : ""}`}
                  onClick={() => handleNavigation("/", link.section)}
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li className="nav-item">
              <span
                className="nav-link d-lg-none"
                onClick={() => handleNavigation("/", "contact")}
                style={{ cursor: "pointer" }}
              >
                Contact
              </span>
            </li>
            <li className="nav-item d-lg-none">
              <a
                href="TomásFernándezValdés_FullStack_ENG2026.pdf"
                download="TomásFernándezValdés_FullStack_ENG2026.pdf"
                className="nav-link"
              >
                Download CV
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-flex align-items-center gap-3">
            <span
              className="hero-btn-primary"
              onClick={() => handleNavigation("/", "contact")}
              style={{ cursor: "pointer", fontSize: "0.9rem", padding: "0.5rem 1.2rem" }}
            >
              Lets Talk
            </span>
            <a
              href="/TomásFernándezValdés_FullStack_ENG2026.pdf"
              download="TomásFernándezValdés_FullStack_ENG2026.pdf"
              className="hero-btn-secondary"
              style={{ fontSize: "0.9rem", padding: "0.5rem 1.2rem" }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
