import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "../header/Header";
import Card from "../ui/card/Card";

function App() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <Header />
        </div>
      </div>
      <div className={styles.card__content}>
        <Card>
          <Outlet />
        </Card>
      </div>
    </>
  );
}

export default App;
