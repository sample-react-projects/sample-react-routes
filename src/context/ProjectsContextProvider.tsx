import { PropsWithChildren, createContext, useState } from "react";
import { Project } from "../types/Project";

export interface IProjectsContext {
  addProject(project: Project): void;
  deleteProject(): void;
  getActiveProject(): Project | undefined;
  getActiveProjectId(): string;
  getProjects(): Project[];
  setActiveProjectId(projectId: string): void;
}

type ProjectsState = {
  activeProjectId?: string;
  projects: Project[];
};

const anyFunction = (...args: any[]) => args as any;

const DEFAULT_PROJECT_STATE: ProjectsState = { projects: [] };

export const ProjectsContext = createContext<IProjectsContext>({
  addProject: anyFunction,
  deleteProject: anyFunction,
  getActiveProject: anyFunction,
  getActiveProjectId: anyFunction,
  getProjects: anyFunction,
  setActiveProjectId: anyFunction,
});

const ProjectsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [projectsState, setProjectsState] = useState<ProjectsState>(
    DEFAULT_PROJECT_STATE
  );

  function addProject(project: Project) {
    setProjectsState((currentProjectsState) => {
      currentProjectsState.projects.push(project);
      return { ...currentProjectsState };
    });
  }

  function deleteProject() {
    setProjectsState((currentProjectState) => {
      const projects = currentProjectState.projects.filter(
        (project) => project.id !== projectsState.activeProjectId
      );

      return { projects };
    });
  }

  function getActiveProject() {
    return projectsState.projects.find(
      (project) => project.id == projectsState.activeProjectId
    );
  }

  function getActiveProjectId() {
    return projectsState.activeProjectId || "";
  }

  function getProjects() {
    return projectsState.projects;
  }

  function setActiveProjectId(projectId: string) {
    setProjectsState((currentProjectsState) => {
      currentProjectsState.activeProjectId = projectId;
      return { ...currentProjectsState };
    });
  }

  const ProjectsContextProviderValue = {
    addProject,
    deleteProject,
    getActiveProject,
    getActiveProjectId,
    getProjects,
    setActiveProjectId,
  };

  return (
    <ProjectsContext.Provider value={ProjectsContextProviderValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
