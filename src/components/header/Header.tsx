import styles from "./Header.module.scss";

const Header: React.FC<{}> = () => {
  

  return (
    <header className={styles.header}>
      <strong>Sample react routes</strong>
      <div className="navigation">
        Navigation
      </div>
    </header>
  );
};

export default Header;
