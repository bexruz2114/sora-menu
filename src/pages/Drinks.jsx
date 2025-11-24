
import "./ichim.css";

// Images
import choy1 from "../assets/ichimliklar/imbar.webp";
import choy2 from "../assets/ichimliklar/tashkentskiy.webp";
import choy3 from "../assets/ichimliklar/arabiskiy.webp";
import choy4 from "../assets/ichimliklar/limonlichay.jpg";
import choy5 from "../assets/ichimliklar/turetskiy.png";
import cofe6 from "../assets/ichimliklar/cofe1.jpg";
import cofe7 from "../assets/ichimliklar/cofe2.jpg";
import cofe8 from "../assets/ichimliklar/cofe3.jpg";
import cofe9 from "../assets/ichimliklar/cofe4.jpg";
import bar10 from "../assets/ichimliklar/bar1.jpg";
import bar11 from "../assets/ichimliklar/bar2.jpg";
import bar12 from "../assets/ichimliklar/bar3.jpg";
import bar13 from "../assets/ichimliklar/bar4.jpg";
import sal14 from "../assets/ichimliklar/sal1.jpg";
import sal15 from "../assets/ichimliklar/sal2.jpg";
import sal16 from "../assets/ichimliklar/sal3.jpg";
import sal17 from "../assets/ichimliklar/sal4.jpg";
import sal18 from "../assets/ichimliklar/sal5.jpg";

// Separated categories
const teaMenu = [
  { id: 1, img: choy1, name: "Имбир", price: "20.000" },
  { id: 2, img: choy2, name: "Ташкентский", price: "20.000" },
  { id: 3, img: choy3, name: "Арабский", price: "15.000" },
  { id: 4, img: choy4, name: "С Лимонам", price: "10.000" },
  { id: 5, img: choy5, name: "Турецкий", price: "5.000" }
];

const coffeeMenu = [
  { id: 6, img: cofe6, name: "Американо", price: "10.000" },
  { id: 7, img: cofe7, name: "Капучино", price: "15.000" },
  { id: 8, img: cofe8, name: "Айс латте", price: "20.000" },
  { id: 9, img: cofe9, name: "Айс Капучино", price: "15.000" }
];

const barMenu = [
  { id: 10, img: bar10, name: "Тархун", price: "20.000" },
  { id: 11, img: bar11, name: "Айс ти", price: "15.000" },
  { id: 12, img: bar12, name: "Манго маракуя", price: "20.000" },
  { id: 13, img: bar13, name: "Океан", price: "20.000" }
];
const salqinMenu = [
  { id: 14, img: sal14, name: "Milliy kola ", price: "10.000" },
  { id: 15, img: sal15, name: "Черноголовка", price: "12.000" },
  { id: 16, img: sal16, name: "Нашсад", price: "10.000" },
  { id: 17, img: sal17, name: "Айс тие 0.5 ", price: "5.000" },
   { id: 18, img: sal18, name: "Вико", price: "15.000" }
];

const Section = ({ title, items }) => (
  <div className="drink-section">
    <h2 className="section-title">{title}</h2>
    <div className="card-container">
      {items.map(({ id, img, name, price }) => (
        <article key={id} className="drink-card">
          <div className="drink-img-wrapper">
            <img src={img} alt={name} className="drink-img" />
          </div>
          <div className="drink-info">
            <h3 className="drink-name">{name}</h3>
            <p className="drink-price">{price} so'm</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Drinks = () => {
  return (
    <section className="page drinks-page">
      <h1 className="page-title">🥤 Ichimliklar menyusi</h1>

      <Section title="☕ Choylar" items={teaMenu} />
      <Section title="🍵 Kofelar" items={coffeeMenu} />
      <Section title="🍹 Bar ichimliklari" items={barMenu} />
      <Section title="🍹 Salqin ichimliklar" items={salqinMenu} />
    </section>
  );
};

export default Drinks;
