import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { Variant } from "./Button.variant";

interface IButton extends PropsWithChildren {
  variant: Variant;
  [x: string]: any;
}

const Button: React.FC<IButton> = ({
  children,
  className = "",
  variant,
  ...props
}) => {
  return (
    <button className={`${className} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
