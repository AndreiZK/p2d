import "../../css/Solutions.scss";

import Solution from "./solution";

const solutionsData = [
  {
    name: "Fork and Knife",
    title: "Рестораны",
  },
  {
    name: "Delivery Truck",
    title: "Аренда транспорта",
  },
  {
    name: "Gift",
    title: "Сувенирные лавки",
  },
  {
    name: "Home",
    title: "Частные арендодатели",
  },
  {
    name: "Hand Cart",
    title: "Доставка",
  },
  {
    name: "Route",
    title: "Гиды и экскурсоводы",
  },
  {
    name: "Shop",
    title: "Отели и хостелы",
  },
];

const Solutions = () => {
  return (
    <div className="solutions">
      <h4>Решения от Pay2Day подходят для бизнеса из любой сферы</h4>
      <div className="solutions-items">
        {solutionsData.map((item, i) => (
          <Solution key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
