//import { useEffect } from "react";
//import { useRef } from "react";
//import { useParams } from "react-router-dom";
// import { useState } from "react";
import Booklist from "./components/Booklist";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Booklist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
