import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
