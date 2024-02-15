import styles from "./App.module.scss";
import ProjectsContextProvider from "../../context/ProjectsContextProvider";
import RightRail from "../right-rail/RightRail";
import LeftRail from "../left-rail/LeftRail";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../ui/modal/Modal";

function App() {
  return (
    <div className={`${styles.container} container--vertical`}>
      <Header></Header>
      <div className={`container--horizontal ${styles["container__content"]}`}>
        <ProjectsContextProvider>
          <Modal>
            <LeftRail></LeftRail>
            <RightRail></RightRail>
          </Modal>
        </ProjectsContextProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
