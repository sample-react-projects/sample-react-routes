import styles from "./Header.module.scss";

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <strong>Projects Lister</strong>
      </div>
    </header>
  );
};

export default Header;
