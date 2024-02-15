import { useCallback, useLayoutEffect, useRef, useState } from "react";
import SlideoutMenu from "../ui/slideout-menu/SlideoutMenu";
import Card from "../ui/card/Card";
import styles from "./LeftRail.module.scss";
import ManageProjects from "./manage-projects/ManageProjects";

const DEBOUNCE_TIME = 100;

enum Device {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
}

function determineCurrentMedia() {
  if (window.innerWidth < 576) {
    return Device.Mobile;
  } else if (window.innerWidth < 992) {
    return Device.Tablet;
  }
  return Device.Desktop;
}

const LeftRail: React.FC<{}> = () => {
  const [renderMenu, setRenderMenu] = useState<boolean | null>(null);
  let timeoutId = useRef<number>();

  const shouldRenderMenu = useCallback(function shouldRenderMenu() {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      const currentMedia = determineCurrentMedia();
      setRenderMenu(currentMedia === Device.Mobile);
    }, DEBOUNCE_TIME);
  }, []);

  useLayoutEffect(() => {
    shouldRenderMenu();
    window.addEventListener("resize", shouldRenderMenu);

    return () => {
      window.removeEventListener("resize", shouldRenderMenu);
    };
  }, []);

  return (
    <>
      {renderMenu === true && (
        <SlideoutMenu>
          <ManageProjects></ManageProjects>
        </SlideoutMenu>
      )}
      {renderMenu === false && (
        <div className={`container--vertical ${styles["rail-left"]}`}>
          <Card>
            <ManageProjects></ManageProjects>
          </Card>
        </div>
      )}
    </>
  );
};

export default LeftRail;
