import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <h1 className="main-list-title">상품 리스트</h1>
        <h1 className="main-list-title">북마크 리스트</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
