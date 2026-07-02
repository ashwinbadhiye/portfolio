import { useState } from "react";
import "./styles/Work.css";
import { projects, Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["all", "websites", "web apps", "ai and automation"];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                onClick={() => setActiveFilter(category)}
                data-cursor="disable"
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              className="project-box"
              key={index}
              onClick={() => setActiveProject(project)}
              data-cursor="disable"
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-details-hint">View Details</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-title-row">
                  <h4>{project.title}</h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-visit-icon"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${project.title}`}
                    data-cursor="disable"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
                <span className={`project-source-badge ${project.source === "Freelance" ? "badge-freelance" : "badge-oriens"}`}>
                  {project.source}
                </span>
                <p>{project.description}</p>
                <div className="project-tools">
                   {project.tools.map((tool, i) => (
                     <span key={i} className="tool-tag">{tool}</span>
                   ))}
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="no-projects">Stay tuned! Exciting projects in this category are coming soon.</p>
          )}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
};

export default Work;
