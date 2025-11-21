import React from "react";
import "./Pages.css";
import img1 from "../assets/Perojni/b3.png";
import img2 from "../assets/Perojni/B4.png";
import img3 from "../assets/Perojni/B5.png";
import img4 from "../assets/Perojni/b7.png";

// === Mahsulotlar ro'yxati ===
// Siz aytgan tartib: 1→1, 2→2, 3→3, 4→4
const blinokItems = [
  { id: 1, img: img1, name: "Mevali Blinok", price: 48000, category: "blinok" },
  { id: 2, img: img2, name: "Tvorogli Blinok", price: 36000, category: "blinok" },
  { id: 3, img: img3, name: "Go'shtli Blinok", price: 55000, category: "blinok" },
  { id: 4, img: img4, name: "Dubayskiy Blinok", price: 50000, category: "blinok" },
];

// === Narx formatlash funksiyasi ===
const formatPrice = (price) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  }).format(price);

function Blinok() {
  return (
    <section className="page blinok-page">
      <h2 className="page-title">🥞 Blinok menyusi</h2>

      <div className="card-container">
        {blinokItems.map(({ id, img, name, price }) => (
          <article key={id} className="dessert-card" aria-label={name}>
            <div className="dessert-img-wrapper">
              <img src={img} alt={name} loading="lazy" className="dessert-img" />
            </div>

            <div className="dessert-info">
              <h3 className="dessert-name">{name}</h3>
              <span className="dessert-price">{formatPrice(price)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blinok;
