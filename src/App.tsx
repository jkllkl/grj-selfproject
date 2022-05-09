import React from "react";
import Library from "./components/Library";
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
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
