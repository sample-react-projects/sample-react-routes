import { useContext } from "react";
import Button from "../ui/button/Button";
import { Variant } from "../ui/button/Button.variant";
import styles from "./DeleteProject.module.scss";
import { ModalContext } from "../ui/modal/Modal";
import { ProjectsContext } from "../../context/ProjectsContextProvider";

const DeleteProject: React.FC<{}> = () => {
  const { closeModal } = useContext(ModalContext);
  const { deleteProject } = useContext(ProjectsContext);

  function deleteCurrentProject() {
    deleteProject();
    closeModal();
  }

  return (
    <>
      <h3>Delete project?</h3>
      <p>Are you sure you want to delete this project?</p>
      <div className={`container--horizontal ${styles.actions}`}>
        <Button variant={Variant.link} onClick={closeModal}>
          cancel
        </Button>
        <Button variant={Variant.primary} onClick={deleteCurrentProject}>
          YES
        </Button>
      </div>
    </>
  );
};

export default DeleteProject;
