import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Salads from "./pages/Salads";
import Foods from "./pages/Foods";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Blinok from "./pages/Blinok";
import Waffle from "./pages/Waffle";
import Footer from "./components/footer/Footer";
import "./App.css";
import Fruits from "./pages/Fruits"

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar har doim tepada chiqadi */}
        <Navbar />

        {/* Sahifalar asosiy qismda ko‘rinadi */}
        <main className="main-content">
          <Routes>
            {/* Birinchi kirganda avtomatik Salads chiqadi */}
            <Route path="/" element={<Salads />} />

            {/* Boshqa sahifalar */}
            <Route path="/foods" element={<Foods />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/blinok" element={<Blinok />} />
            <Route path="/waffle" element={<Waffle />} />
            <Route path="/fruits" element={<Fruits />} />


            {/* Noto‘g‘ri yo‘l bo‘lsa — Salads sahifasiga yo‘naltiradi */}
            <Route path="*" element={<Salads />} />
          </Routes>
        </main>

        {/* Footer har doim pastda chiqadi */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
