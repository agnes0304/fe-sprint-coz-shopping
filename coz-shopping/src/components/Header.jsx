import React from "react";
import { useState } from "react";
import './Header.css';
import imgBurger from '../assets/burger.png';
import imgLogo from '../assets/logo.png';
import imgGiftbox from '../assets/giftbox.png';
import imgStar from '../assets/star.png';

function Header() {
  const [isopen, setIsopen] = useState("false");

  function toggleHandler() {
    setIsopen(!isopen);
  }

  return (
    <>
      <header>
        <div className="nav-logo">
          <img src={imgLogo} />
          <h1>COZ Shopping</h1>
        </div>
        <div className="nav-menu" onClick={toggleHandler}>
          <img src={imgBurger} />
          {isopen && (
            <nav className="nav-menu-items">
              <p>jiwoo님, 안녕하세요!</p>
              <div>
                <img src={imgGiftbox} />
                상품리스트 페이지
              </div>
              <div>
                <img src={imgStar} />
                북마크 페이지
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
