import "./Catalog.css";
import PizzaCard from "./PizzaCard";

export default function Catalog({ addToCart, search }) {
const pizzas = [
    {
      name: "Пицца Везувий",
      image: "https://tse2.mm.bing.net/th/id/OIP.ueNFY1mRJAPHdMOi5riI4wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Ветчина, пепперони, сыр, томаты.",
      price: 545
    },
    {
      name: "Пицца Двенчик",
      image: "https://tse4.mm.bing.net/th/id/OIP.-eUQOxqSur76_b5g_5N-AwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Грибы, кукуруза, сыр, помидоры.",
      price: 450
    },
    {
      name: "Пицца One-Ole",
      image: "https://dariakamenskaya.github.io/delivery-food/img/pizza-plus/pizza-oleole.jpg",
      description: "Моцарелла, черри, маслины, зелень.",
      price: 440
    },
    {
      name: "Пицца Плюс",
      image: "https://tse4.mm.bing.net/th/id/OIP.aTx_IyCLXUChmV6a-iMEQQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Чеддер, томаты, пепперони, зелень.",
      price: 805
    },
    {
      name: "Пицца Гавайская",
      image: "https://th.bing.com/th/id/OIP.uWsAh-TeiyJJiOCavP892QHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Ветчина, ананасы, моцарелла.",
      price: 440
    },
    {
      name: "Пицца Классика",
      image: "https://th.bing.com/th/id/OIP.ujSsHUeMnN33TcR94qlOSQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Салями, ветчина, грибы, сыр.",
      price: 510
    },
    {
      name: "Пицца Пепперони",
      image: "https://img.freepik.com/premium-photo/pepperoni-pizza-white-background_859451-339.jpg",
      description: "Пепперони, моцарелла, томатный соус.",
      price: 490
    },
    {
      name: "Пицца Маргарита",
      image: "https://tse1.mm.bing.net/th/id/OIP.31m6W-HWBBMzjVqZvfTMXwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Томаты, моцарелла, свежая зелень.",
      price: 390
    },
    {
      name: "Пицца Четыре сыра",
      image: "https://th.bing.com/th/id/OIP.FTP2BCNnrR5XnOWztc6KXQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Моцарелла, чеддер, пармезан, дорблю.",
      price: 590
    },
    {
      name: "Пицца Мясная",
      image: "https://tse2.mm.bing.net/th/id/OIP.H8Or9HgvbdVsNlN64PKYDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Ветчина, бекон, пепперони, мясо.",
      price: 650
    },
    {
      name: "Пицца Грибная",
      image: "https://tse4.mm.bing.net/th/id/OIP.4Ixxdd9uBS9PJ_G_m_u6iQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Шампиньоны, сыр, томатный соус.",
      price: 430
    },
    {
      name: "Пицца Барбекю",
      image: "https://tse4.mm.bing.net/th/id/OIP.t2a8RNq81yIoJBVcvVJITQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Курица, бекон, сыр, соус барбекю.",
      price: 570
    },
    {
      name: "Пицца Цезарь",
      image: "https://tse2.mm.bing.net/th/id/OIP.7fXv39ckdVniBGF_T5-XHQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Курица, сыр, салат, соус цезарь.",
      price: 620
    },
    {
      name: "Пицца Карбонара",
      image: "https://tse3.mm.bing.net/th/id/OIP.W40Qsq-35FqRTCQxnP7McQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Бекон, сливочный соус, сыр.",
      price: 560
    },
    {
      name: "Пицца Охотничья",
      image: "https://tse3.mm.bing.net/th/id/OIP.ca0bBdzqJlAsn-eK-os-ygHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Охотничьи колбаски, сыр, лук.",
      price: 540
    },
    {
      name: "Пицца Деревенская",
      image: "https://tse1.mm.bing.net/th/id/OIP.nw9pEq8YuZGPLIMBg7kJIgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Картофель, бекон, лук, сыр.",
      price: 500
    },
    {
      name: "Пицца Чикен",
      image: "https://tse1.mm.bing.net/th/id/OIP.3XRsAdGVY2oPktKrFv8_tAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Курица, сыр, кукуруза, томаты.",
      price: 480
    },
    {
      name: "Пицца Мексиканская",
      image: "https://tse1.mm.bing.net/th/id/OIP.lVznsZUxb1VjO5tjzVjlZwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Острый перец, мясо, фасоль, сыр.",
      price: 610
    },
    {
      name: "Пицца Овощная",
      image: "https://tse1.mm.bing.net/th/id/OIP.CaCSSnF6_38y0DKKVt0yZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Перец, томаты, кукуруза, маслины.",
      price: 420
    },
    {
      name: "Пицца Итальянская",
      image: "https://img.freepik.com/free-photo/tasty-top-view-sliced-pizza-italian-traditional-round-pizza_90220-1357.jpg?t=st=1717013467~exp=1717017067~hmac=3db93b04757a36d4275229ac288b2947772c24bbdbd65c93e671bd0cfae8e441&w=2000",
      description: "Моцарелла, салями, томаты, зелень.",
      price: 550
    },
    {
      name: "Пицца Баварская",
      image: "https://th.bing.com/th/id/OIP.S0IXVe9lEtyCT4E3RX7uggHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Колбаски, бекон, лук, сыр.",
      price: 580
    },
    {
      name: "Пицца Сырная",
      image: "https://th.bing.com/th/id/OIP.FTP2BCNnrR5XnOWztc6KXQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Много моцареллы и сливочный соус.",
      price: 470
    },
    {
      name: "Пицца Острая",
      image: "https://th.bing.com/th/id/OIP.KkGDrorsZvjRQG5Abi1CXAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Пепперони, острый перец, сыр.",
      price: 520
    },
    {
      name: "Пицца Куриная",
      image: "https://tse2.mm.bing.net/th/id/OIP.kYatQtpK-_82VfykBCozkwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Курица, грибы, сыр, соус.",
      price: 510
    },
    {
      name: "Пицца Техас",
      image: "https://img.freepik.com/premium-photo/fresh-tasty-pizza-white-background_211889-151.jpg?w=996",
      description: "Бекон, мясо, лук, барбекю.",
      price: 630
    },
    {
      name: "Пицца Пикантная",
      image: "https://th.bing.com/th/id/OIP.FMJGEH8syWRX8w8KAi3xoAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Салями, перец, сыр, томаты.",
      price: 530
    },
    {
      name: "Пицца Морская",
      image: "https://tse2.mm.bing.net/th/id/OIP.n7cyQnHxYVr1PVvKjYuoHwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Креветки, сыр, томаты, зелень.",
      price: 690
    },
    {
      name: "Пицца Туна",
      image: "https://tse1.mm.bing.net/th/id/OIP.micxbf1mbFAo5xSb9GcvKgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Тунец, лук, сыр, томатный соус.",
      price: 600
    },
    {
      name: "Пицца Неаполитана",
      image: "https://th.bing.com/th/id/OIP.hGb_AcWjXYzjodRjpHEH4AHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Томаты, моцарелла, базилик.",
      price: 450
    },
    {
      name: "Пицца Фирменная",
      image: "https://img.freepik.com/premium-photo/realistic-4k-pizza-pepperoni-on-white-background_899449-30313.jpg",
      description: "Ветчина, грибы, пепперони, сыр.",
      price: 650
    },
    {
      name: "Пицца Королевская",
      image: "https://tse4.mm.bing.net/th/id/OIP.V_N4oYfVDWEZ7QU9qlil0QHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Мясо, бекон, пепперони, сыр.",
      price: 720
    },
    {
      name: "Пицца Премиум",
      image: "https://th.bing.com/th/id/OIP.FVdA-o_YkXEDPNodAVTpwgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Пармезан, моцарелла, салями, томаты.",
      price: 700
    },
    {
      name: "Пицца Сливочная",
      image: "https://th.bing.com/th/id/OIP.uZqWMep787Rzvn7xdfdNygHaHj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Сливочный соус, курица, грибы, сыр.",
      price: 570
    },
    {
      name: "Пицца Бекон",
      image: "https://tse4.mm.bing.net/th/id/OIP.IdPwz62pAEqRLTHJHrxtygHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Бекон, моцарелла, лук, томаты.",
      price: 550
    },
    {
      name: "Пицца Салями",
      image: "https://th.bing.com/th/id/OIP.6R7J-t0HV-EgS2Bv4Qgz9wHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Салями, сыр, томатный соус.",
      price: 500
    },
    {
      name: "Пицца Фермерская",
      image: "https://tse2.mm.bing.net/th/id/OIP.VMiF6n21uuT1WUE2y77goQHaHQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Курица, овощи, сыр, зелень.",
      price: 520
    },
    {
      name: "Пицца Оливковая",
      image: "https://img.freepik.com/premium-photo/pizza-isolated-on-white-background-online-delivery-from-pizzeria-take-away-and-fast-food-concept_360074-120291.jpg",
      description: "Маслины, томаты, сыр, зелень.",
      price: 430
    },
    {
      name: "Пицца Супер Мясо",
      image: "https://th.bing.com/th/id/OIP.kYatQtpK-_82VfykBCozkwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Пепперони, бекон, ветчина, мясо.",
      price: 750
    },
    {
      name: "Пицца Супер Сыр",
      image: "https://th.bing.com/th/id/OIP.FTP2BCNnrR5XnOWztc6KXQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Моцарелла, чеддер, пармезан.",
      price: 620
    }
  ];
  const filteredPizzas = pizzas.filter((pizza) =>
  pizza.name.toLowerCase().includes(search.toLowerCase())
);
    
          return (
    <div className="catalog">
      {filteredPizzas.map((pizza) => (
        <PizzaCard
          key={pizza.name}
          pizza={pizza}
          addToCart={addToCart}
        />
      ))}

      {filteredPizzas.length === 0 && (
        <p className="no-results">Пицца не найдена</p>
      )}
    </div>
  );
}
