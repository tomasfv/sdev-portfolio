export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container-lg">
        <div className="section-title-container">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="row gy-5 align-items-stretch">
          {/* Columna Izquierda: Tarjeta de perfil Neo-brutalista */}
          <div className="col-lg-4">
            <div className="about-profile-card">
              <div className="about-profile-header">
                <div className="about-profile-dot"></div>
                <span>Developer Profile</span>
              </div>
              <ul className="about-profile-details">
                <li>
                  <strong>Name:</strong> <span>Tomás Fernández Valdés</span>
                </li>
                <li>
                  <strong>Role:</strong> <span>Full Stack Developer</span>
                </li>
                <li>
                  <strong>English Level:</strong> <span>C1 Advanced</span>
                </li>
                <li>
                  <strong>Location:</strong> <span>Argentina (Remote)</span>
                </li>
                <li>
                  <strong>Key Stack:</strong> <span>React, TypeScript, Node.js & PostgreSQL</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Texto Narrativo */}
          <div className="col-lg-8">
            <div className="about-text-content">
              <p className="about-intro-paragraph">
                I am a <strong>Full Stack Software Engineer</strong> with 3 years of professional experience building web and desktop applications. I specialize in developing end-to-end features, designing responsive user interfaces, building REST APIs, modeling databases, and integrating AI-powered features using Large Language Models (LLMs).
              </p>

              <p className="mb-3">
                My background includes developing SaaS platforms, transactional systems, administrative dashboards, and desktop applications using <strong>React, TypeScript, Node.js, PostgreSQL</strong>, and <strong>Electron</strong>. I have contributed to production software used by real businesses while collaborating with international remote teams across multiple countries.
              </p>

              <p className="mb-0">
                I also have a strong foundation in game development with <strong>Unity and C#</strong>, which helped me develop strong problem-solving skills, systems thinking, and adaptability. Currently, I am expanding my expertise in backend automation, Python, software testing, cloud technologies, and advanced AI integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjetas inferiores de Quick Facts */}
        {/* <div className="row mt-5 pt-3 g-4">
          <div className="col-md-4">
            <div className="about-fact-card">
              <div className="fact-icon">💻</div>
              <h4>Full Stack Stack</h4>
              <p>Specialized in building end-to-end applications from database modeling to pixel-perfect UIs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-fact-card">
              <div className="fact-icon">🎮</div>
              <h4>Unity & Game Dev</h4>
              <p>Solid backend logic and problem-solving skills acquired through C# and game programming.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-fact-card">
              <div className="fact-icon">🤖</div>
              <h4>AI & Automation</h4>
              <p>Integrating large language models (LLMs) and automating workflows to build smart products.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

