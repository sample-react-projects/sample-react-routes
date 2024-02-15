import { Outlet } from "react-router-dom";
import "./App.module.scss";
import Header from "../header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
