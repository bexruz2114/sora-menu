import React from "react";
import "./Pages.css";

import dessert39 from "../assets/Perojni/K16.png";
import dessert40 from "../assets/Perojni/K7.png";
import dessert48 from "../assets/Perojni/k1.jpg";
import dessert49 from "../assets/Perojni/K6.png";
import dessert50 from "../assets/Perojni/k2.png";

const pishiriqItems = [
  { id: 39, img: dessert39, name: "Makarons шт", price: 8000, category: "croissants" },
  { id: 40, img: dessert40, name: "Kurasan", price: 23000, category: "croissants" },
  { id: 48, img: dessert48, name: "Орешки", price: 20000, category: "croissants" },
  { id: 49, img: dessert49, name: "Kurasan", price: 23000, category: "croissants" },
  { id: 50, img: dessert50, name: "Meva Assorti", price: 95000, category: "croissants" },
];

function Pishiriq() {
  // ✅ Ko‘rsatilishi kerak bo‘lgan tartib
  const sortedOrder = [40, 49, 48, 39, 50];
  const sortedItems = sortedOrder.map((id) =>
    pishiriqItems.find((item) => item.id === id)
  );

  return (
    <section className="page">
      <h2 className="page-title">Pishiriqlar</h2>

      <div className="card-container">
        {sortedItems.map((item) => (
          <article key={item.id} className="dessert-card" aria-label={item.name}>
            <img src={item.img} alt={item.name} className="dessert-img" />

            <div className="dessert-info">
              <h3 className="dessert-name">{item.name}</h3>
              <span className="dessert-price">
                {item.price.toLocaleString()} so'm
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pishiriq;
