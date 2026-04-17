import { useState } from "react";
import "./styles/Work.css";
import { projects } from "../data/projects";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
            <div className="project-box" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="visit-btn">
                    Visit Site
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
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
    </div>
  );
};

export default Work;
