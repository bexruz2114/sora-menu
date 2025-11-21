import React from "react";
import "./Pages.css";

// 🍛 Somsa rasmlari
import food1 from "../assets/Somsa/22.png";
import food2 from "../assets/Somsa/32.png";
import food3 from "../assets/Somsa/42.png";
import food4 from "../assets/Somsa/52.png";
import food5 from "../assets/Somsa/62.png";
import food6 from "../assets/Somsa/sam31.png";
import food7 from "../assets/Somsa/sam35.png";

// 🍴 Taomlar ma'lumotlari
// Mapping tartibi: 1→3, 2→6, 3→4, 4→8, 5→1, 6→2, 7→9, 8→7, 9→5
const foods = [
  { id: 3, img: food3, name: "Ko'k somsa", price: 5000 },              // 1→3
  { id: 6, img: food6, name: "Kartoshka ", price: 6000 },               // 2→6
  { id: 4, img: food4, name: "Tovuq sir", price: 8000 },                // 3→4
  { id: 8, img: food2, name: "Achhiq somsa", price: 13000 },            // 4→8
  { id: 1, img: food1, name: "Mol go'shti", price: 10000 },             // 5→1
  { id: 2, img: food2, name: "Boy somsa", price: 13000 },               // 6→2
  { id: 9, img: food2, name: "Baliq somsa", price: 8000 },              // 7→9
  { id: 7, img: food7, name: "Pide tovuq sir", price: 16000 },          // 8→7
  { id: 5, img: food5, name: "Pide go'sht sir", price: 18000 },         // 9→5
];

// 💰 Narx formatlovchi funksiya
const formatPrice = (price) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  }).format(price);

const Foods = () => {
  return (
    <section className="page foods-page">
      <h2 className="page-title">🍛 Somsa va pide</h2>

      <div className="card-container">
        {foods.map(({ id, img, name, desc, price }) => (
          <article key={id} className="food-card" aria-label={name}>
            <div className="food-img-wrapper">
              <img
                src={img}
                alt={`${name} — ${desc}`}
                loading="lazy"
                className="food-img"
              />
            </div>
            <div className="food-info">
              <h3 className="food-name">{name}</h3>
              <p className="food-desc">{desc}</p>
              <span className="food-price">{formatPrice(price)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Foods;
