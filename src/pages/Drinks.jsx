// === Drinks.jsx (FULLY FIXED) ===
import React from "react";
import "./ichim.css";

// Images
import choy from "../assets/ichimliklar/Choylar.jpg";
import kofe from "../assets/ichimliklar/Coffe.jpg";
import bar from "../assets/ichimliklar/Moxito.jpg";
import sovuq from "../assets/ichimliklar/Salqin ichimliklar.jpg";
import cola from "../assets/ichimliklar/milliy cola.jpg";
import sok from "../assets/ichimliklar/nash-sad.jpg";
import ays from "../assets/ichimliklar/ays-tea.jpg";
import amer from "../assets/ichimliklar/americano.webp";
import cap from "../assets/ichimliklar/cappuccino.jpg";
import fa from "../assets/ichimliklar/ice-latte.jpg";

// Unified menu structure (includes price + description where needed)
const drinksMenu = [
  { id: 1, img: choy, name: "Choylar", descr: "Turli xil issiq choylar", price: null },
  { id: 2, img: kofe, name: "Kofe", descr: "Amerikano, Espresso, Latte", price: null },
  { id: 3, img: bar, name: "Bar ichimliklari", descr: "Mojito, Tarxun va boshqalar", price: null },
  { id: 4, img: sovuq, name: "Sovuq ichimliklar", descr: "Ays-ti, soda, sharbatlar", price: null },

  { id: 5, img: cola, name: "Milliy cola", descr: "", price: 12000 },
  { id: 6, img: sok, name: "Наш-сад", descr: "", price: 10000 },
  { id: 7, img: ays, name: "Айс-теа", descr: "", price: 10000 },
  { id: 8, img: cap, name: "Cappuccino cofe", descr: "", price: 10000 },
  { id: 9, img: amer, name: "Americano cofe", descr: "", price: 10000 },
  { id: 10, img: fa, name: "Ice-latte", descr: "", price: 20000 }
];

const Drinks = () => {
  return (
    <section className="page drinks-page">

      <h2 className="page-title">🥤 Ichimliklar menyusi</h2>

      <div className="card-container">
        {drinksMenu.map(({ id, img, name, descr, price }) => (

          <article key={id} className="drink-card">

            <div className="drink-img-wrapper">
              <img src={img} alt={name} className="drink-img" />
            </div>

            <div className="drink-info">
              <h3 className="drink-name">{name}</h3>

              {descr && <p className="drink-desc">{descr}</p>}
              {price && <p className="drink-price">{price} so'm</p>}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
