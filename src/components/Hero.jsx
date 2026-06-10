import avatar from "../assets/avatar.svg";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-pattern"></div>
      <div className="container-lg position-relative">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 hero-text-container text-start">
            <div className="hero-badge mb-3">
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-text">Open to new opportunities</span>
            </div>
            <h1 className="hero-title fw-extrabold mb-3">
              Tomas <span className="highlight-text">Fernandez</span> Valdes
            </h1>
            <h2 className="hero-subtitle mb-4">Full Stack Software Engineer</h2>
            <p className="hero-lead mb-4">
              Building high-performance web applications, robust backend
              services, and interactive experiences. Focused on clean
              architecture, maintainable code, and long-term scalability.
            </p>
            <div className="hero-buttons-wrapper">
              <a href="#projects" className="hero-btn-primary">
                Projects
              </a>
              <a href="#contact" className="hero-btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-backdrop"></div>
              <img
                src={avatar}
                className="hero-avatar-img img-fluid"
                alt="Tomas avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
