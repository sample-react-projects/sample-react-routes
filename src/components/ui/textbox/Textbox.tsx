import { useId } from "react";
import styles from "./Textbox.module.scss";

interface ITextbox {
  label?: string;
  [key: string]: any;
}
const Textbox: React.FC<ITextbox> = ({ label, ...props }) => {
  const id = useId();

  return (
    <div className={styles.textbox}>
      {label && (
        <label className={styles["textbox__label"]} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={styles["textbox__input"]}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Textbox;
