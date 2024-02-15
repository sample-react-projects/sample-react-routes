import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContextProvider";
import AddProject from "./add-project/AddProject";
import ViewProject from "./view-project/ViewProject";
import Card from "../ui/card/Card";
import styles from "./RightRail.module.scss";

const RightRail: React.FC<{}> = () => {
  const { getActiveProjectId } = useContext(ProjectsContext);
  const activeProjectId = getActiveProjectId();

  return (
    <div className={styles["rail-right"]}>
      <Card>
        {activeProjectId ? (
          <ViewProject></ViewProject>
        ) : (
          <AddProject></AddProject>
        )}
      </Card>
    </div>
  );
};

export default RightRail;
