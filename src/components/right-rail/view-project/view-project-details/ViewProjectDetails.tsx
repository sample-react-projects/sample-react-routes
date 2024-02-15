import { useContext } from "react";
import { ProjectsContext } from "../../../../context/ProjectsContextProvider";
import { Variant } from "../../../ui/button/Button.variant";
import Button from "../../../ui/button/Button";
import styles from "./ViewProjectDetails.module.scss";
import { ModalContext } from "../../../ui/modal/Modal";
import DeleteProject from "../../../delete-project/DeleteProject";

const ViewProjectDetails: React.FC<{}> = () => {
  const { getActiveProject } = useContext(ProjectsContext);
  const { openModal } = useContext(ModalContext);
  const activeProject = getActiveProject();

  function deleteProject() {
    openModal(DeleteProject);
  }

  return activeProject ? (
    <>
      <div className={styles.header}>
        <h2 className={styles["header__title"]}>{activeProject.title}</h2>
        <Button variant={Variant.primary} onClick={deleteProject}>
          Delete
        </Button>
      </div>
      <p>
        <strong>Budget(in $mn): </strong>
        {activeProject.budget}
      </p>
      <p>
        <strong>Location: </strong>
        {activeProject.location}
      </p>
      <p>
        <strong>Tenure(in months): </strong>
        {activeProject.tenure}
      </p>
    </>
  ) : null;
};

export default ViewProjectDetails;
