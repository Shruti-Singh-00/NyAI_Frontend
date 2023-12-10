import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "../../assets/Images";
import "../CSS/Header.css";

const Header = () => {
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
          <NavLink className={"a"} to={"/"}>
            <img src={Images.logo} alt="logo.png"/>
          </NavLink>
        </div>
        <ul className="links">
          <NavLink className={"a"} to={"/"}>
            HOME
          </NavLink>
          <NavLink className={"a"} to={"/drafting"}>
            DRAFTING
          </NavLink>
          <NavLink className={"a"} to={"/advocates"}>
            ADVOCATES
          </NavLink>
          <NavLink className={"a"} to={"/about"}>
            ABOUT US
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
          <NavLink to={"/"} className="action_btn">
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
