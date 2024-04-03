import "../../css/Webversion.scss";

const perksData = [
  {
    title: {
      bold: "Платежный",
      regular: "виджет",
    },
    description: `Поможем добавить на сайт удобную форму, которую легко заполнить за пару кликов`,
  },
  {
    title: {
      bold: "интеграция",
      regular: "по api",
    },
    description: `Готовые решения и документация для самописных сайтов, сайтов на CMS`,
  },
  {
    title: {
      bold: "кастомизированная",
      regular: "платежная страница",
    },
    description: `Подберем платежный модуль к вашей CMS. Наши разработчики помогут его настроить`,
  },
];

const Webversion = () => {
  return (
    <div className="webversion">
      <div className="webversion-header">
        <h3 className="webversion-title">Web версия приложения</h3>
        <span className="webversion-subtitle">
          Выставляйте счета и принимайте платежи из личного кабинета или web
          версии приложения{" "}
        </span>
      </div>
      <div className="webversion-content">
        <img src="webversion.png" alt="" />
        <div className="webversion-perks">
          {perksData.map((perk) => (
            <div className="webversion-perk">
              <span className="perk-title">
                <span className="perk-title-bold">{perk.title.bold} </span>
                {perk.title.regular}
              </span>
              <p className="perk-description">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webversion;
