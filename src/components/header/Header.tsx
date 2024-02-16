import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import styles from "./Header.module.scss";

const Header: React.FC<{}> = () => {
  const isAuthenticated = false;
  const navigate = useNavigate();

  function handleAuthenticationClick() {
    if (!isAuthenticated) {
      navigate("authenticate/login");
    }

    // TODO: Handle logout
  }

  return (
    <header className={styles.header}>
      <strong>Sample react routes</strong>
      <div className={styles.authentication}>
        <Button type="button" onClick={handleAuthenticationClick}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
