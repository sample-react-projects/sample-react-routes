import { FormEvent, useContext, useState } from "react";
import Button from "../../../ui/button/Button";
import { Variant } from "../../../ui/button/Button.variant";
import Textbox from "../../../ui/textbox/Textbox";
import styles from "./FormControl.module.scss";
import { v4 } from "uuid";
import { Project } from "../../../../types/Project";
import { ProjectKeys } from "../../../../types/ProjectKeys";
import {
  IProjectsContext,
  ProjectsContext,
} from "../../../../context/ProjectsContextProvider";

const EMPTY_PROJECT_FORM_STATE: Project = {
  id: "",
  title: "",
  location: "",
  tenure: "",
  budget: "",
};

const FormControl: React.FC<{}> = () => {
  const [projectForm, setProjectForm] = useState<Project>({
    ...EMPTY_PROJECT_FORM_STATE,
    id: v4(),
  });
  const { addProject, setActiveProjectId } =
    useContext<IProjectsContext>(ProjectsContext);

  const isFormValid =
    projectForm.title &&
    projectForm.budget &&
    projectForm.location &&
    projectForm.tenure;

  function updateFormState(
    key: ProjectKeys,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setProjectForm((prevProjectValue) => {
      return { ...prevProjectValue, [key]: event.target.value };
    });
  }

  function resetProjectState() {
    setProjectForm(EMPTY_PROJECT_FORM_STATE);
  }

  function saveProject(event: FormEvent) {
    event.preventDefault();
    addProject(projectForm);
    setActiveProjectId(projectForm.id);
  }

  return (
    <>
      <h3>Add a new task</h3>
      <form
        className={`container--vertical ${styles.form}`}
        onSubmit={saveProject}
      >
        <Textbox
          autoComplete="off"
          label="Title"
          value={projectForm.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("title", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Location"
          value={projectForm.location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("location", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Tenure(in months)"
          value={projectForm.tenure}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("tenure", e)
          }
        ></Textbox>
        <Textbox
          autoComplete="off"
          label="Budget(in $mn)"
          value={projectForm.budget}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFormState("budget", e)
          }
        ></Textbox>
        <div className={`container--horizontal ${styles.actions}`}>
          <Button variant={Variant.link} onClick={resetProjectState}>
            CLEAR
          </Button>
          <Button variant={Variant.primary} disabled={!isFormValid}>
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormControl;
