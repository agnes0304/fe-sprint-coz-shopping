import { useState } from "react";

function Header() {
  const [isopen, setIsopen] = useState("false");

  function toggleHandler() {
    setIsopen(!isopen);
  }

  return (
    <>
      <header>
        <div className="nav-logo">
          <img src="../assets/giftbox.png" />
          <h1>COZ Shopping</h1>
        </div>
        <div className="nav-menu" onClick={toggleHandler}>
          <img src="../assets/burger.png" />
        </div>
      </header>
      {isopen && (
        <nav className="nav-menu-items">
          <p>jiwoo님, 안녕하세요!</p>
          <div>
            <img src="../assets/giftbox.png" />
            상품리스트 페이지
          </div>
          <div>
            <img src="../assets/star.png" />
            북마크 페이지
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
