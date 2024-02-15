import ViewProjectDescription from "./view-project-description/ViewProjectDescription";
import ViewProjectDetails from "./view-project-details/ViewProjectDetails";

const ViewProject: React.FC<{}> = () => {
  return (
    <>
      <ViewProjectDescription></ViewProjectDescription>
      <ViewProjectDetails></ViewProjectDetails>
    </>
  );
};

export default ViewProject;
