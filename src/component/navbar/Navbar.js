import React, { useState } from "react";
import "./Navbar.css";
import { FiX, FiMenu } from "react-icons/fi";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Travel 'n' Translate</div>

        <div>
          <ul className={click ? "navbar__openedOptions" : "navbar__options"}>
            <li className="navbar__option" onClick={closeMenu}>
              About T'n'T
            </li>
            <li className="navbar__option" onClick={closeMenu}>
              Why T'n'T?
            </li>
            <li className="navbar__option" onClick={closeMenu}>
              FAQs
            </li>
          </ul>

          <div className="navbar__hamburger" onClick={handleClick}>
            {click ? (
              <FiX color={"var(--tnt-blue)"} />
            ) : (
              <FiMenu color={"var(--tnt-blue)"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
