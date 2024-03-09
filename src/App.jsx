import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import Hamburger from "./assets/images/icon-hamburger.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 800;

  const navItemData = ["About", "Careers", "Events", "Products", "Support"];

  /* creation functions */
  const createNavItems = (menu) => {
    const mobile = windowWidth <= mobileBreakpoint;

    return navItemData.map((title, index) => {
      return (
        <a key={`navItem${index}`} className={"nav-item std-font"}>
          {title}
        </a>
      );
    });
  };

  /* initial load */
  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <img className="nav__logo" src={Logo} alt="logo img"></img>
          {windowWidth > mobileBreakpoint ? (
            <div className="nav-container">{createNavItems(false)}</div>
          ) : (
            <img
              className="nav__menu"
              src={Hamburger}
              alt="hamburger menu icon"
            ></img>
          )}
        </nav>
        <h1 className="header__h1 header-font">
          immersive experiences that deliver
        </h1>
      </header>
      <main></main>
      <footer className="footer">
        <div className="footer__main">
          <article className="footer__container">
            <img className="footer__logo" src={Logo} alt="logo"></img>
            <div className="footer__nav-container nav-container">
              {createNavItems(false)}
            </div>
          </article>
          <article className="footer__container footer__right-container">
            <div className="footer__social-container">
              <a>
                <img
                  className="footer__social"
                  src={Facebook}
                  alt="facebook icon"
                ></img>
              </a>
              <a>
                <img
                  className="footer__social"
                  src={Twitter}
                  alt="twitter icon"
                ></img>
              </a>
              <a>
                <img
                  className="footer__social"
                  src={Pinterest}
                  alt="pinterest icon"
                ></img>
              </a>
              <a>
                <img
                  className="footer__social"
                  src={Instagram}
                  alt="instagram icon"
                ></img>
              </a>
            </div>
            <p className="footer__copyright-text std-font">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </article>
        </div>
        <div className="footer__attribution std-font">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen/" target="_blank">
            exc
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
