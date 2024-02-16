import { Link, NavLink, useNavigate } from "react-router-dom";
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
      <Link to="/" className={styles.logo}>
        <strong>Sample react routes</strong>
      </Link>
      <div className={styles.right}>
        {!isAuthenticated && (
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles["navlink--active"]}`
                : styles.navlink
            }
          >
            Products
          </NavLink>
        )}
        <Button type="button" onClick={handleAuthenticationClick}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
