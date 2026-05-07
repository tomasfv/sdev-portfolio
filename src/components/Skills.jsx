import { logos } from '../utils/assetMapper';

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
