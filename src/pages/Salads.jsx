import React from "react";
import "./Pages.css";

/* 🥗 Salat rasmlari */
import salad1 from "../assets/salat/1.png";
import salad2 from "../assets/salat/2.png";
import salad3 from "../assets/salat/3.png";
import salad4 from "../assets/salat/4.png";
import salad5 from "../assets/salat/5.png";
import salad6 from "../assets/salat/6.png";
import salad7 from "../assets/salat/7.png";
import salad8 from "../assets/salat/8.png";
import salad9 from "../assets/salat/s1.png";
import salad10 from "../assets/salat/s2.png";
import salad11 from "../assets/salat/s3.png";
import salad12 from "../assets/salat/s4.png";
import salad13 from "../assets/salat/s5.png";
import salad14 from "../assets/salat/s6.png";
import salad15 from "../assets/salat/s7.png";


/* 🥗 Список салатов (tartiblangan holda) */
const SALADS = [
  { id: 9, img: salad9, name: "Рукула с языком", price: "28,000 сум" },
  { id: 10, img: salad10, name: "Мужская каприз", price: "25,000 сум" },
  { id: 11, img: salad11, name: "Американский", price: "27,000 сум" },
  { id: 12, img: salad12, name: "Японский", price: "30,000 сум" },
  { id: 13, img: salad13, name: "Баходиршох", price: "36,000 сум" },
  { id: 14, img: salad14, name: "Цезарь", price: "30,000 сум" },
  { id: 15, img: salad15, name: "Острый", price: "45,000 сум" },
  { id: 1, img: salad1, name: "Греческий салат", price: "40,000 сум" },
  { id: 2, img: salad2, name: "Салат Сакура", price: "45,000 сум" },
  { id: 3, img: salad3, name: "Французский салат", price: "30,000 сум" },
  { id: 4, img: salad4, name: "Американский салат", price: "27,000 сум" },
  { id: 5, img: salad5, name: "Хрустящий баклажан", price: "25,000 сум" },
  { id: 6, img: salad6, name: "Тёплый салат", price: "17,000 сум" },
  { id: 7, img: salad7, name: "Барф", price: "45,000 сум" },
  { id: 8, img: salad8, name: "Дамский каприз", price: "41,000 сум" },
];

/* 💡 Карточка салата */
const SaladCard = ({ img, name, price }) => (
  <article className="card" role="listitem">
    <img src={img} alt={`${name} фото`} loading="lazy" className="card-image" />
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <span className="card-price">{price}</span>
    </div>
  </article>
);

/* 🌿 Страница салатов */
const Salads = () => {
  return (
    <section className="page" aria-labelledby="salad-heading">
      <h2 id="salad-heading">🥗 Salatlar</h2>
      <div className="card-container" role="list">
        {SALADS.map((salad) => (
          <SaladCard key={salad.id} {...salad} />
        ))}
      </div>
    </section>
  );
};

export default Salads;
