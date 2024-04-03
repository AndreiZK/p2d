import "../../css/Scenarios.scss";

const Scenarios = () => {
  return (
    <div className="scenarios">
      <div className="scenarios-header">
        <h3 className="scenarios-title">Настройте разные сценарии оплаты</h3>
        <span className="scenarios-subtitle">
          Безопасность платежей обеспечивается сертификатом pci dss level 1
        </span>
      </div>

      <div className="scenarios-items">
        <div className="flex">
          <div className="scenario scenario-small">
            <img
              src="/scenarios/scenarios-phone-1.png"
              alt=""
              className="scenario-phone"
            />
            <img
              src="/scenarios/scenarios-card-1.png"
              alt=""
              className="scenario-card"
            />
            <span className="scenario-title">
              <span className="bold">Использовать NFC</span> С любого гаджета
            </span>
            <p className="scenario-description">
              Покупателю нужно приложить к смартфону продавца карту, смартфон
              или платежный стикер
            </p>
          </div>
          <div className="scenario scenario-small">
            <img
              src="/scenarios/scenarios-phone-2.png"
              alt=""
              className="scenario-phone phone-2"
            />
            <img
              src="/scenarios/scenarios-card-2.png"
              alt=""
              className="scenario-card card-2"
            />
            <span className="scenario-title">
              <span className="bold">Отсканировать</span> QR код:
            </span>
            <p className="scenario-description">
              - Со смартфона продавца
              <br /> - С поверхности
              <br /> - С наклейки на кассе
            </p>
          </div>
        </div>
        <div className="scenario scenario-large">
          <img
            src="/scenarios/scenarios-phone-3.png"
            alt=""
            className="scenario-phone scenario-phone-large"
          />
          <img
            src="/scenarios/scenarios-card-3.png"
            alt=""
            className="scenario-card scenario-card-large"
          />
          <span className="scenario-title">
            <span className="bold">Оплатить</span> по ссылке
          </span>
          <p className="scenario-description">
            Выставьте счет ссылкой. Удобно, если покупатели часто обращаются
            через  мессенджеры и чаты
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
