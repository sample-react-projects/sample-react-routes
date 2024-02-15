import FormControl from "./form-control/FormControl";
import FormDescription from "./form-description/FormDescription";

const AddProject: React.FC<{}> = () => {
  return (
    <div className="container--vertical">
      <FormDescription></FormDescription>
      <FormControl></FormControl>
    </div>
  );
};

export default AddProject;
