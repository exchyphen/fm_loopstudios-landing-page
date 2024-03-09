import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import Hamburger from "./assets/images/icon-hamburger.svg";
import Close from "./assets/images/icon-close.svg";
import InteractiveDesktop from "./assets/images/desktop/image-interactive.jpg";
import InteractiveMobile from "./assets/images/mobile/image-interactive.jpg";

/* grid images */
import CuriosityDesktop from "./assets/images/desktop/image-curiosity.jpg";
import DeepEarthDesktop from "./assets/images/desktop/image-deep-earth.jpg";
import FisheyeDesktop from "./assets/images/desktop/image-fisheye.jpg";
import FromAboveDesktop from "./assets/images/desktop/image-from-above.jpg";
import GridDesktop from "./assets/images/desktop/image-grid.jpg";
import NightArcadeDesktop from "./assets/images/desktop/image-night-arcade.jpg";
import PocketBorealisDesktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import SoccerTeamDesktop from "./assets/images/desktop/image-soccer-team.jpg";

import CuriosityMobile from "./assets/images/mobile/image-curiosity.jpg";
import DeepEarthMobile from "./assets/images/mobile/image-deep-earth.jpg";
import FisheyeMobile from "./assets/images/mobile/image-fisheye.jpg";
import FromAboveMobile from "./assets/images/mobile/image-from-above.jpg";
import GridMobile from "./assets/images/mobile/image-grid.jpg";
import NightArcadeMobile from "./assets/images/mobile/image-night-arcade.jpg";
import PocketBorealisMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import SoccerTeamMobile from "./assets/images/mobile/image-soccer-team.jpg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileBreakpoint = 800;

  const navItemData = ["About", "Careers", "Events", "Products", "Support"];

  const gridImgData = [
    {
      title: "Deep Earth",
      desktop: DeepEarthDesktop,
      mobile: DeepEarthMobile,
    },
    {
      title: "Night Arcade",
      desktop: NightArcadeDesktop,
      mobile: NightArcadeMobile,
    },
    {
      title: "Soccer Team VR",
      desktop: SoccerTeamDesktop,
      mobile: SoccerTeamMobile,
    },
    {
      title: "The Grid",
      desktop: GridDesktop,
      mobile: GridMobile,
    },
    {
      title: "From Up Above VR",
      desktop: FromAboveDesktop,
      mobile: FromAboveMobile,
    },
    {
      title: "Pocket Borealis",
      desktop: PocketBorealisDesktop,
      mobile: PocketBorealisMobile,
    },
    {
      title: "The Curiosity",
      desktop: CuriosityDesktop,
      mobile: CuriosityMobile,
    },
    {
      title: "Make It Fisheye",
      desktop: FisheyeDesktop,
      mobile: FisheyeMobile,
    },
  ];

  /* creation functions */
  const createNavItems = (menu) => {
    return navItemData.map((title, index) => {
      return (
        <a
          key={`navItem${index}`}
          className={
            "nav-item" + (menu ? " header-font menu__nav-item" : " std-font")
          }
        >
          {title}
        </a>
      );
    });
  };

  const createGridItems = () => {
    const mobile = windowWidth <= mobileBreakpoint;

    return gridImgData.map((data, index) => {
      return (
        <div key={`gridItem${index}`} className="grid__item">
          <img
            className="grid__img"
            src={mobile ? data.mobile : data.desktop}
            alt={`grid img number ${index}`}
          ></img>
          <h3 className="grid__title header-font">{data.title}</h3>
        </div>
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
      {mobileMenu ? (
        <div className="menu">
          <hgroup className="menu__hgroup">
            <img className="menu__logo" src={Logo} alt="logo icon"></img>
            <img
              className="menu__close"
              src={Close}
              alt="close button"
              onClick={() => setMobileMenu(false)}
            ></img>
          </hgroup>
          <div className="menu__nav">{createNavItems(true)}</div>
        </div>
      ) : null}

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
              onClick={() => setMobileMenu(true)}
            ></img>
          )}
        </nav>
        <h1 className="header__h1 header-font">
          immersive experiences that deliver
        </h1>
      </header>
      <main className="main">
        <article className="description">
          <img
            className="description__img"
            src={InteractiveDesktop}
            alt="description img"
          ></img>
          <hgroup className="description__hgroup">
            <h2 className="description__h2 header-font">
              the leader in interactive vr
            </h2>
            <p className="description__text std-font">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </hgroup>
        </article>
        <article className="creations">
          <hgroup className="creations__hgroup">
            <h2 className="header-font">our creations</h2>
            <button className="creations__button std-font">see all</button>
          </hgroup>
          <div className="creations__grid">{createGridItems()}</div>
        </article>
      </main>
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
