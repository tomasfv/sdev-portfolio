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
        <h2 className="display-5 fw-bold mb-4">My Work</h2>

        <h1 className="fw-bold mt-4">Web & Desktop Applications</h1>
        <div className="row">
          {frontendProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              image={project.images[0]}
            />
          ))}
        </div>

        <h1 className="fw-bold my-4">Game Development Experience</h1>
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
