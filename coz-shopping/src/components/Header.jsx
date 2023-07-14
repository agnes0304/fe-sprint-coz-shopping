import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Header.css";
import imgBurger from "../assets/burger.png";
import imgLogo from "../assets/logo.png";
import imgGiftbox from "../assets/giftbox.png";
import imgStar from "../assets/star.png";

function Header() {
  const [isopen, setIsopen] = useState("false");
  const menuRef = useRef(null);

  function toggleHandler() {
    setIsopen(!isopen);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsopen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="main-header-container">
          <div className="nav-logo">
            <img src={imgLogo} />
            <h1>COZ Shopping</h1>
          </div>
          <div className="nav-menu" onClick={toggleHandler} ref={menuRef}>
            <img className="nav-menu-img_burger" src={imgBurger} />
            {isopen && (
              <nav className="nav-menu-items">
                <p className="nav-menu-item">jiwoo님, 안녕하세요!</p>
                <div className="nav-menu-item nav-menu-item_border">
                  <img className="nav-menu-item-icon" src={imgGiftbox} />
                  <span>상품리스트 페이지</span>
                </div>
                <div className="nav-menu-item">
                  <img className="nav-menu-item-icon" src={imgStar} />
                  <span>북마크 페이지</span>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
