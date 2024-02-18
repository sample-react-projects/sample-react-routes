import { Form, Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import styles from "./Header.module.scss";
import { getAuthToken } from "../../util/localStorage";

const Header: React.FC<{}> = () => {
  const isAuthenticated = !!getAuthToken();
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("authenticate/login");
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <strong>Sample react routes</strong>
      </Link>
      <div className={styles.right}>
        {isAuthenticated ? (
          <>
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

            <Form action="/logout" method="POST">
              <Button>Logout</Button>
            </Form>
          </>
        ) : (
          <Button type="button" onClick={handleLoginClick}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
