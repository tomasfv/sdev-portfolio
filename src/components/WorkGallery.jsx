import ProjectCard from "./ProjectCard";
import projectsData from "../utils/ProjectsBulk.json";

export default function WorkGallery() {
  const featuredProjects = projectsData.filter((p) => p.stack && p.contract);

  const frontendProjects = featuredProjects.filter(
    (p) => p.category === "frontend",
  );
  const gameProjects = featuredProjects.filter((p) => p.category === "game");

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Work</h2>
        </div>

        <div className="gallery-subheading-container">
          <h3 className="gallery-subheading">Web & Desktop Applications</h3>
        </div>
        <div className="row">
          {frontendProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              image={project.images[0]}
            />
          ))}
        </div>

        <div className="gallery-subheading-container">
          <h3 className="gallery-subheading">Game Development Experience</h3>
        </div>
        <div className="row">
          {gameProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              image={project.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
