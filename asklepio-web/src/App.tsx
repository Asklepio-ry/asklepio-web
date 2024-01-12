import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import Board from "./pages/Board";
import Freshmen from "./pages/Freshmen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hallitus" element={<Board />} />
          <Route path="/uusiopiskelija" element={<Freshmen />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
