import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "../data/projects";
import "./styles/ProjectModal.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const details = project.details;
  const screenshots = details?.screenshots?.length ? details.screenshots : [project.image];

  return createPortal(
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close" data-cursor="disable">
          &times;
        </button>

        <div className="pm-header">
          <div className="pm-title-row">
            <h3>{project.title}</h3>
            <span className={`pm-source ${project.source === "Freelance" ? "badge-freelance" : "badge-oriens"}`}>
              {project.source}
            </span>
          </div>
          <div className="pm-actions">
            {details?.links?.length ? (
              details.links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noreferrer" className="pm-visit" data-cursor="disable">
                  {l.label} <ExternalLinkIcon />
                </a>
              ))
            ) : (
              <a href={project.link} target="_blank" rel="noreferrer" className="pm-visit" data-cursor="disable">
                Visit Site <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        <div className="pm-gallery">
          {screenshots.map((src, i) => (
            <div className="pm-shot" key={i}>
              <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="pm-body">
          <p className="pm-description">{details?.longDescription || project.description}</p>

          {details?.highlights && details.highlights.length > 0 && (
            <div className="pm-highlights">
              <h4>Highlights</h4>
              <ul>
                {details.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pm-tech">
            <h4>Tech Stack</h4>
            <div className="pm-tech-grid">
              {details?.techStack?.length
                ? details.techStack.map((t, i) => (
                    <div className="pm-tech-item" key={i}>
                      {t.icon && <img src={t.icon} alt={t.name} />}
                      <span>{t.name}</span>
                    </div>
                  ))
                : project.tools.map((t, i) => (
                    <div className="pm-tech-item" key={i}>
                      <span>{t}</span>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
