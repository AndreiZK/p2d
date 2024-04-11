import { useState } from "react";
import "../../css/Header.scss";
import Button from "../Button";
import Dropdown from "../Dropdown";

const navLinksData = [
  {
    topText: "Приложение",
    bottomText: "Для iOS",
    icon: "apple",
    link: "/",
  },
  {
    topText: "Приложение",
    bottomText: "Для Android",
    icon: "android",
    link: "/",
  },
  {
    topText: "Презентация",
    bottomText: "О продукте",
    icon: "pdf",
    link: "/",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"ru" | "en">("ru");

  return (
    <header className="header-wrapper">
      <div className="header-content">
        <div className="nav">
          <img className="header-logo" src="logo.svg" alt="" />
          <div className="nav-links">
            {navLinksData.map((link, i) => (
              <>
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use
                      className="nav-link-icon"
                      xlinkHref={`icons.svg#${link.icon}`}
                    ></use>
                  </svg>
                  <div className="nav-link-text">
                    <span className="nav-link-text-top">{link.topText}</span>
                    <span className="nav-link-text-bottom">
                      {link.bottomText}
                    </span>
                  </div>
                </div>
                {i < 2 && <div className="nav-links-divider"></div>}
              </>
            ))}
          </div>
        </div>
        <div className="header-btns">
          <Dropdown options={["Ru", "Eng"]} />
          <Button>Написать нам</Button>
          <Button variant="blue">Личный кабинет</Button>
        </div>
      </div>
      <div className="header-mobile">
        <img src="logo.svg" alt="" className="logo-mobile" />
        <div className="header-btns-mobile">
          <Button variant="blue">Личный кабинет</Button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="burger-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <use
                y="2"
                className="burger-icon"
                xlinkHref={`icons.svg#burger`}
              ></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <svg
            onClick={() => setMenuOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <use className="close-menu-icon" xlinkHref="icons.svg#close"></use>
          </svg>
          <span className="menu-title">Меню</span>
        </div>
        <div className="mobile-menu-links">
          <div className="nav-links">
            {navLinksData.map((link, i) => (
              <>
                <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <use
                      className="nav-link-icon"
                      xlinkHref={`icons.svg#${link.icon}`}
                    ></use>
                  </svg>
                  <div className="nav-link-text">
                    <span className="nav-link-text-top">{link.topText}</span>
                    <span className="nav-link-text-bottom">
                      {link.bottomText}
                    </span>
                  </div>
                </div>
                {i < 2 && <div className="nav-links-divider"></div>}
              </>
            ))}
          </div>
        </div>
        <div className="mobile-menu-langs">
          <span className="mobile-menu-langs-title">Выбрать язык</span>
          <div
            onClick={() =>
              setActiveLang((prev) => (prev === "ru" ? "en" : "ru"))
            }
            className={`mobile-menu-langs-switch ${
              activeLang === "en" ? "toggled" : ""
            }`}
          >
            <span className={`lang ${activeLang === "ru" ? "active" : ""}`}>
              Русский
            </span>
            <span className={`lang ${activeLang === "en" ? "active" : ""}`}>
              English
            </span>
          </div>
        </div>
        <div className="mobile-menu-bottom">
          <Button fontSize="lg">Написать нам</Button>
          <Button fontSize="lg" variant="blue">
            Личный кабинет
          </Button>
        </div>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`backdrop ${menuOpen ? "open" : ""}`}
      ></div>
    </header>
  );
};

export default Header;
