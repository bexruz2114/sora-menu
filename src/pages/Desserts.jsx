import React from "react";
import "./Pages.css";

// 🍰 Rasmlar
import dessert2 from "../assets/Perojni/13.png";
import dessert4 from "../assets/Perojni/75.png";
import dessert5 from "../assets/Perojni/14.png";
import dessert6 from "../assets/Perojni/15.png";
import dessert7 from "../assets/Perojni/17.png";

import dessert9 from "../assets/Perojni/18.png";
import dessert10 from "../assets/Perojni/62.png";
import dessert12 from "../assets/Perojni/snikers.jpg";
import dessert13 from "../assets/Perojni/mango.jpg";
import dessert14 from "../assets/Perojni/tbk.jpg";
import dessert15 from "../assets/Perojni/sansebstan.jpg";
import dessert16 from "../assets/Perojni/jarto.jpg";
import dessert17 from "../assets/Perojni/tvorojniy.jpg";
import dessert18 from "../assets/Perojni/ptichniymoloko.jpg";


import dessert22 from "../assets/Perojni/26.png";
import dessert24 from "../assets/Perojni/25.png";
import dessert25 from "../assets/Perojni/24.png";
import dessert27 from "../assets/Perojni/23.png";
import dessert28 from "../assets/Perojni/19.png";
import dessert29 from "../assets/Perojni/20.png";

import dessert31 from "../assets/Perojni/77.png";
import dessert32 from "../assets/Perojni/94.png";
import dessert33 from "../assets/Perojni/97.png";
import dessert34 from "../assets/Perojni/98.png";
import dessert35 from "../assets/Perojni/99.png";
import dessert40 from "../assets/Perojni/opera.jpg";

import dessert42 from "../assets/Perojni/medovik.jpg";
import dessert43 from "../assets/Perojni/italyansikiytrufek.jpg";
import dessert44 from "../assets/Perojni/fransuzkiy.jpg";
import dessert45 from "../assets/Perojni/dubayskitrafel.jpg";
import dessert46 from "../assets/Perojni/bezamendey.jpg"
import dessert47 from "../assets/Perojni/avgansikiy.jpg"
import dessert48 from "../assets/Perojni/SHOKOLAD.png"
import dessert49 from "../assets/Perojni/d2.jpg"
import dessert50 from "../assets/Perojni/KLASIKCIS.png"

// 🍰 Ma'lumotlar
const desserts = [
  { id: 2, img: dessert2, name: "Каймокли бисквит", price: 15000 },
  { id: 41, img: dessert12, name: "Сникерс", price: 15000 },
  { id: 43, img: dessert14, name: "Тбк", price: 15000 },
  { id: 31, img: dessert31, name: "Банан бисквит", price: 15000 },
  { id: 6, img: dessert6, name: "Эклер творожный", price: 12000 },
  { id: 34, img: dessert34, name: "Малина банан", price: 15000 },
  { id: 53, img: dessert45, name: "Дубайский-Трафель", price: 20000 },
  { id: 52, img: dessert44, name: "Французский", price: 20000 },
  { id: 51, img: dessert43, name: "Итальянский Тирамису ", price: 25000 },
  
  { id: 10, img: dessert10, name: "Шоколадный трафель", price: 15000 },
  {id: 132 , img:dessert49 , name:"Белая трафель " , price: 15000},
  { id: 39, img: dessert22, name: "Лотус", price: 23000 },
  { id: 35, img: dessert35, name: "Кит-кат", price: 18000 },
  { id: 99, img: dessert27, name: "Шоколадный", price: 12000 },
  { id: 4, img: dessert4, name: "Малина банан", price: 15000 },
  { id: 5, img: dessert5, name: "Напалён", price: 12000 },
  { id: 28, img: dessert28, name: "Захер", price: 23000 },
  { id: 17, img: dessert17, name: "Творожный", price: 12000 },
  { id: 55, img: dessert47, name: "Авансиккий", price: 12000 },
  { id: 48, img: dessert40, name: "Опера", price: 15000 },
  { id: 21, img: dessert24, name: "ТРИ ШОКОЛАДА", price: 25000 },
  { id: 44, img: dessert15, name: "Сан-Себастан", price: 25000 },
  { id: 41, img: dessert12, name: "Сникерс", price: 18000 },
  { id: 29, img: dessert29, name: "Настоящий Раффаэлло", price: 23000 },
  { id: 40, img: dessert25, name: "Чиз-кейк", price: 18000 },
  { id: 47, img: dessert18, name: "Птиче Молоко", price: 10000 },
  { id: 42, img: dessert13, name: "Манго", price: 15000 },
  {id:156 , img : dessert46 , name:"Без менделый", price:20000},
  { id: 7, img: dessert7, name: "Красный Бархат", price: 15000 },
  { id: 9, img: dessert9, name: "Фисташковый", price: 20000 },
  { id: 32, img: dessert32, name: "Баунти Дю", price: 15000 },
  {id:321 , img:dessert50, name:"Классическая чиз-кейк", price:20000},
  { id: 33, img: dessert33, name: "Эстерхейзер", price: 18000 },
  { id: 31, img: dessert31, name: "Банан бисквит", price: 15000 },
  { id: 56, img: dessert48, name: "Вишнёвый", price: 15000 },
  { id: 50, img: dessert42, name: "Медовик", price: 15000 },
  { id: 45, img: dessert16, name: "Жато", price: 15000 },
];

// 💰 Narx formatlovchi
const formatPrice = (price) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  }).format(price);

const Desserts = () => {
  return (
    <section className="page desserts-page">
      <h2 className="page-title">🍰 Shirinliklar</h2>

      {/* 🍮 Karta ro‘yxati */}
      <div className="card-container">
        {desserts.map(({ id, img, name, price }) => (
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
};

export default Desserts;
