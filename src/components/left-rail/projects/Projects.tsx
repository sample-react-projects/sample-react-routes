import { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContextProvider";
import styles from "./Projects.module.scss";
import { SlideoutMenuContext } from "../../ui/slideout-menu/SlideoutMenu";

const Projects: React.FC<{}> = () => {
  const { getProjects, getActiveProjectId, setActiveProjectId } =
    useContext(ProjectsContext);
  const { closeMenu } = useContext(SlideoutMenuContext);
  const projects = getProjects();
  const activeProjectId = getActiveProjectId();

  function activateProject(projectId: string) {
    setActiveProjectId(projectId);
    if (closeMenu) {
      closeMenu();
    }
  }

  return projects.length ? (
    <ul className={styles.projects}>
      {projects.map((project) => {
        return (
          <li
            key={project.id}
            onClick={() => activateProject(project.id)}
            className={`${styles.project} ${
              activeProjectId === project.id ? styles.active : null
            }`}
          >
            {project.title}
          </li>
        );
      })}
    </ul>
  ) : (
    <p className={styles["projects__empty"]}>No projects available</p>
  );
};

export default Projects;
