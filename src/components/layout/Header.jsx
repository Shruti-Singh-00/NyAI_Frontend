import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Images from "../../assets/Images";
import "../CSS/Header.css";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandle = () => {
      if (isOpen === false) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

  const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue)
    useEffect(() => {
      const watcher = window.matchMedia(mediaQuery)
      setIsMatching(watcher.matches)
      const listener = (matches) => {
        setIsMatching(matches.matches)
      }
      if (watcher.addEventListener) {
        watcher.addEventListener('change', listener)
      } else {
        watcher.addEventListener(listener)
      }
      return () => {
        if (watcher.removeEventListener) {
          return watcher.removeEventListener('change', listener)
        } else {
          return watcher.removeEventListener(listener)
        }
      }
    }, [mediaQuery])
  
    return isMatching
  }

  const isDesktopResolution = useMatchMedia('(max-width:992px)', true)

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <NavLink className={`a`} to={"/"}>
            <img src={Images.logo} alt="logo.png"/>
          </NavLink>
        </div>
        <ul className="links">
          <NavLink className={`a ${location?.pathname === "/"?"active":" "}`} style={{color: `${location?.pathname === "/"?"#EB934f":"#477769"}`}} to={"/"}>
            HOME
          </NavLink>
          <NavLink className={`a ${location?.pathname === "/drafting"?"active":" "}`} style={{color: `${location?.pathname === "/drafting"?"#EB934f":"#477769"}`}} to={"/drafting"}>
            DRAFTING
          </NavLink>
          <NavLink className={`a ${location?.pathname === "/advocates"?"active":" "}`} style={{color: `${location?.pathname === "/advocates"?"#EB934f":"#477769"}`}} to={"/advocates"}>
            ADVOCATES
          </NavLink>
          <NavLink className={` a ${location?.pathname === "/about"?"active":" "}`} style={{color: `${location?.pathname === "/about"?"#EB934f":"#477769"}`}} to={"/about"}>
            ABOUT US
          </NavLink>
          <NavLink className={` a ${location?.pathname === "/help"?"active":" "}`} style={{color: `${location?.pathname === "/help"?"#EB934f":"#477769"}`}} to={"/help"}>
            Help
          </NavLink>
        </ul>
        <NavLink to={"/"} className="action_btn">
          Login
        </NavLink>
        <div className="toggle_btn" onClick={onClickHandle}>
          <i
            className={
              isOpen === false ? "fa-solid fa-bars" : "fa-solid fa-xmark"
            }
          ></i>
        </div>
      </div>

      {isDesktopResolution && (
        <div
          className="dropdown_menu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <NavLink className={"a"} to={"/"}>
            HOME
          </NavLink>
          <NavLink className={"a"} to={"/drafting"}>
            DRAFTING
          </NavLink>
          <NavLink className={"a"} to={"/simplifier"}>
            SIMPLIFIER
          </NavLink>
          <NavLink className={"a"} to={"/advocates"}>
            ADVOCATES
          </NavLink>
          <NavLink className={"a"} to={"/about"}>
            ABOUT US
          </NavLink>
          <NavLink className={"a"} to={"/help"}>
            Help
          </NavLink>
          <NavLink to={"/"} className="action_btn">
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
