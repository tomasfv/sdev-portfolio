import ProjectCard from './ProjectCard';
import { projectMainImages } from '../utils/assetMapper';
import projectsData from './ProjectsBulk.json';

export default function WorkGallery() {
  const featuredProjects = projectsData.filter(p => p.stack && p.contract);

  const frontendProjects = featuredProjects.filter(p => p.category === 'frontend');
  const gameProjects = featuredProjects.filter(p => p.category === 'game');

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">My Work</h2>
        
        <h1 className="fw-bold mt-4">Frontend & Web Applications</h1>
        <div className="row">
          {frontendProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              image={projectMainImages[project.id]} 
            />
          ))}
        </div>

        <h1 className="fw-bold my-4">Game Development Experience</h1>
        <div className="row">
          {gameProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              image={projectMainImages[project.id]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
