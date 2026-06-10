import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel/Carousel";
import projectsData from "../utils/ProjectsBulk.json";
import { logos } from "../utils/assetMapper";
import useReveal from "../hooks/useReveal";

export default function Project() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const projectImages = project.images.filter(Boolean);
  const [metaRef, metaVisible] = useReveal(0.1);
  const [linksRef, linksVisible] = useReveal(0.1);
  const [descRef, descVisible] = useReveal(0.1);

  const linkButtons = [
    { key: "demo", label: "Demo" },
    { key: "company", label: "Company" },
    { key: "store", label: "Store" },
    { key: "code", label: "Code" },
  ].filter((l) => project.links[l.key]);

  return (
    <section className="project-page">
      <div className="container-lg py-5">
        {/* <Link to="/#projects" className="project-back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Projects
        </Link> */}

        <div className="section-title-container">
          <h2 className="section-title">
            {project.name}
            {project.company}
          </h2>
        </div>

        <div
          className={`d-flex flex-wrap gap-3 justify-content-center mb-4 reveal ${metaVisible ? "active" : ""}`}
          ref={metaRef}
        >
          <div className="project-meta-card flex-shrink-0">
            <span className="project-meta-label">Role</span>
            <span className="project-meta-value">{project.role}</span>
          </div>
          <div className="project-meta-card flex-shrink-0">
            <span className="project-meta-label">Date</span>
            <span className="project-meta-value">{project.date}</span>
          </div>
          {project.stack && project.stack.length > 0 && (
            <div
              className="project-meta-card flex-shrink-1"
              style={{ minWidth: "200px" }}
            >
              <span className="project-meta-label">Stack</span>
              <div className="project-stack-row">
                {project.stack.map((tech) =>
                  logos[tech] ? (
                    <img
                      key={tech}
                      src={logos[tech]}
                      alt={tech}
                      className="tech-icon"
                      title={tech}
                    />
                  ) : null,
                )}
              </div>
            </div>
          )}
        </div>

        {linkButtons.length > 0 && (
          <div
            className={`project-links-row mb-5 reveal ${linksVisible ? "active" : ""}`}
            ref={linksRef}
          >
            {linkButtons.map((l) => (
              <a
                key={l.key}
                href={project.links[l.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {l.label}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ms-2"
                />
              </a>
            ))}
          </div>
        )}

        <div
          className={`project-description-card reveal ${descVisible ? "active" : ""}`}
          ref={descRef}
        >
          <div className="project-desc-header">
            <div className="project-desc-dot"></div>
            <span>Project Overview</span>
          </div>
          <div className="project-desc-body">
            {project.intro && (
              <p className="project-desc-intro">{project.intro}</p>
            )}
            <p className="project-desc-text">{project.description}</p>
          </div>
        </div>

        <div className="text-center my-5">
          {project.type === 1 && project.videos && (
            <div className="mb-5">
              <div
                className="ratio ratio-16x9 responsive-video"
                style={{
                  border: "2px solid #000000",
                  borderRadius: "8px",
                  boxShadow: "4px 4px #000000",
                }}
              >
                <iframe
                  src={project.videos}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          {projectImages.length > 0 && <Carousel images={projectImages} />}
        </div>
      </div>
    </section>
  );
}
