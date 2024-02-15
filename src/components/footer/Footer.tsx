import styles from "./Footer.module.scss";

const Footer: React.FC<{}> = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.content}>Copyright © {year}</div>
    </footer>
  );
};

export default Footer;
