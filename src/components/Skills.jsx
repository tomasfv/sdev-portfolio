const logos = {
  unity: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  postgre: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  sequelize: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  electron: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
  materialui: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
};

export default function Skills() {
  const skillsList = [
    { name: 'React', logo: logos.react },
    { name: 'Redux', logo: logos.redux },
    { name: 'Electron', logo: logos.electron },
    { name: 'Javascript', logo: logos.javascript },
    { name: 'TypeScript', logo: logos.typescript },
    { name: 'Next.js', logo: logos.nextjs },
    { name: 'HTML', logo: logos.html },
    { name: 'CSS', logo: logos.css },
    { name: 'Material UI', logo: logos.materialui },
    { name: 'Tailwind CSS', logo: logos.tailwind },
    { name: 'Bootstrap', logo: logos.bootstrap },
    { name: 'Node.js', logo: logos.node },
    { name: 'Express.js', logo: logos.express },
    { name: 'PostgreSQL', logo: logos.postgre },
    { name: 'Sequelize', logo: logos.sequelize },
    { name: 'Unity3D', logo: logos.unity },
    { name: 'C#', logo: logos.csharp },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Skills</h2>
        <div id="carouselExample" className="carousel slide carousel-dark carousel-fade">
          <div className="carousel-inner">
            {skillsList.map((skill, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={skill.name}>
                <h5>{skill.name}</h5>
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
