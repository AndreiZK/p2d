import "../../css/HowWorks.scss";

const paymentSystemsImgs = ["visa.png", "mastercard.png", "mir.png"];

const perksData = [
  {
    icon: "thumb",
    title: "Удобно",
    description: "Оплату можно принимать прямо на смартфон",
  },
  {
    icon: "Lightning",
    title: "Быстро",
    description: "Скачайте приложение и сразу принимайте платежи",
  },
  {
    icon: "chart",
    title: "Выгодно",
    description: `Вы платите % только от оборота
    и экономите на аренде терминала`,
  },
  {
    icon: "lock",
    title: "Безопасно",
    description: `Данные платежа 
    в зашифрованном виде`,
  },
];

const HowWorks = () => {
  return (
    <div className="how-works">
      <h3 className="how-works-title">Как это работает</h3>
      <span className="how-works-subtitle">
        Соответствует требованиям безопасности Мир, Visa и Mastercard
      </span>
      <div className="systems">
        {paymentSystemsImgs.map((i) => (
          <img src={`/payment-systems/${i}`} />
        ))}
      </div>
      <div className="how-works-cards">
        <div className="how-works-card first">
          <img src="/cards/first-phone.png" alt="" className="card-phone" />
          <img src="/Phone-test.svg" className="phone-mobile" alt="" />
          <div className="card-content">
            <span className="card-feature">Более 100 валют</span>
            <h4 className="card-title">
              <span className="bold">создайте заказ</span>
              <br />В удобной валюте
            </h4>
            <p className="card-caption">В приложении Pay2day мобильная касса</p>
          </div>
        </div>
        <div className="how-works-card second">
          <img src="/cards/second-phone.png" alt="" className="card-phone" />
          <img src="/Phone-test-2.svg" className="phone-mobile" alt="" />
          <img src="/cards/second-nfc.png" alt="" className="card-nfc" />
          <img
            src="/cards/second-circle.png"
            alt=""
            className="circle circle-1"
          />
          <img
            src="/cards/second-circle.png"
            alt=""
            className="circle circle-2"
          />
          <img src="/cards/second-card.jfif" alt="" className="card-card" />
          <div className="card-content">
            <span className="card-feature">
              Карта, СБП или любой гаджет с NFC
            </span>
            <h4 className="card-title">
              <span className="bold">принимайте оплату,</span>
              <br />
              как удобно вашим клиентам
            </h4>
            <p className="card-caption">
              Приложение само рассчитает сумму к оплате в рублях
            </p>
          </div>
        </div>
        <div className="how-works-card third">
          <img src="/cards/first-phone.png" alt="" className="card-phone" />
          <img src="/Phone-test-3.svg" className="phone-mobile" alt="" />
          <div className="card-content">
            <span className="card-feature">24 - 48 часов</span>
            <h4 className="card-title">
              <span className="bold">получите деньги</span>
              <br />
              без лишних задержек
            </h4>
            <p className="card-caption">
              Переведём выручку на счет в вашем банке
            </p>
          </div>
        </div>
      </div>
      <div className="perks">
        {perksData.map((perk) => (
          <div key={perk.icon} className="perk">
            <img
              src={`/perks-icons/${perk.icon}.png`}
              alt=""
              className="perk-icon"
            />
            <span className="perk-title">{perk.title}</span>
            <span className="perk-description">{perk.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
