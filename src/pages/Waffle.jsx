import React from "react";
import "./Pages.css";
import waffle1 from "../assets/Perojni/wafli.png";
import waffle2 from "../assets/Perojni/wafli2.png";
import waffle3 from "../assets/Perojni/w03.png";
import waffle4 from "../assets/Perojni/w1.png";
import waffle5 from "../assets/Perojni/w10.png";
import waffle6 from "../assets/Perojni/w2.png";
import waffle7 from "../assets/Perojni/w23.png";
import waffle8 from "../assets/Perojni/w34.png";
import waffle9 from "../assets/Perojni/w8.png";
import waffle10 from "../assets/Perojni/vaflid.jpg"
import waffle11 from "../assets/Perojni/vaflij.jpg"

// === Vaflilar ro‘yxati ===
// Siz bergan tartib: 1→4, 2→3, 3→6, 4→9, 5→5, 6→1, 7→2, 8→8, 9→7
const waffleItems = [
  { id: 4, img: waffle4, name: "Vafli Assprti", price: 50000, category: "waffle" },
  { id: 3, img: waffle3, name: "Vafli Oddiy", price: 30000, category: "waffle" },
  { id: 6, img: waffle6, name: "Vafli Bananli", price: 45000, category: "waffle" },
  { id: 9, img: waffle9, name: "Vafli Qulupnayli ", price: 55000, category: "waffle" },
  { id: 5, img: waffle5, name: "Vafli Malinali", price: 50000, category: "waffle" },
  {id:13 , img:waffle11, name:"Vafli Yejevikali", price:50000},
  { id: 1, img: waffle1, name: "Fondyuk Katta", price: 100000, category: "waffle" },
  { id: 2, img: waffle2, name: "Fondyuk Kichkina ", price: 800000, category: "waffle" },
  { id: 8, img: waffle8, name: "Gongkong Mix", price: 60000, category: "waffle" },
  { id: 7, img: waffle7, name: "Vafli Tvorogli", price: 45000, category: "waffle" },
  {id:82,img:waffle10, name:"Vafli Dubayskiy" ,price:45000,
  }
];

// === Narx formatlash funksiyasi ===
const formatPrice = (price) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  }).format(price);

function Waffle() {
  return (
    <section className="page waffle-page">
      <h2 className="page-title">🧇 Vafli menyusi</h2>

      <div className="card-container">
        {waffleItems.map(({ id, img, name, price }) => (
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

export default Waffle;
