import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

interface ICard extends PropsWithChildren {}

const Card: React.FC<ICard> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
