import { createPortal } from "react-dom";
import styles from "./SlideoutMenu.module.scss";
import { PropsWithChildren, createContext, useState } from "react";

interface ISlideoutMenu extends PropsWithChildren {
  title?: string;
}

interface ISlideoutMenuContext {
  closeMenu: () => void;
}

const DEFAULT_SLIDEOUT_MENU_CONTEXT = { closeMenu: () => {} };

export const SlideoutMenuContext = createContext<ISlideoutMenuContext>(
  DEFAULT_SLIDEOUT_MENU_CONTEXT
);

const SlideoutMenu: React.FC<ISlideoutMenu> = ({ children, title }) => {
  const [addAnimateClass, setaddAnimateClass] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function addAnimationClass() {
    setaddAnimateClass(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
    addAnimationClass();
  }

  const SlideoutMenuContextProviderValue = {
    closeMenu,
  };

  return createPortal(
    <SlideoutMenuContext.Provider value={SlideoutMenuContextProviderValue}>
      <div
        className={`${styles.menu__mask} ${
          isMenuOpen ? styles["menu__mask--active"] : null
        } ${addAnimateClass ? styles.animate : null}`}
        onClick={closeMenu}
      ></div>
      <span className={styles["menu__switch-open"]} onClick={openMenu}>
        =
      </span>
      <div className={styles.menu__container}>
        <div className={styles.menu__header}>
          <h3 className={styles.menu__title}>{title}</h3>
          <span className={styles["menu__switch-close"]} onClick={closeMenu}>
            x
          </span>
        </div>
        {children}
      </div>
    </SlideoutMenuContext.Provider>,
    document.body
  );
};

export default SlideoutMenu;
