import { useRef } from "react";
import "../../css/Hero.scss";

import Button from "../Button";

const Hero = () => {
  const mapRef = useRef<HTMLImageElement | null>(null);

  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;

  const handleMouseMove = (event: React.MouseEvent) => {
    const normalizedX = (event.clientX - clientWidth / 2) / clientWidth;
    const normalizedY = (event.clientY - clientHeight / 2) / clientHeight;
    if (mapRef.current) {
      mapRef.current.style.transform = `translate(${normalizedX * -20}px, ${
        normalizedY * -20
      }px)`;
    }
  };

  return (
    <div onMouseMove={handleMouseMove} className="hero">
      <div className="hero-top">
        <span className="hero-small">Приложение для интернет-эквайринга</span>
        <h1>
          ВАШИМ КЛИЕНТАМ
          <br />
          <span className="bold">БОЛЬШЕ НЕ НУЖНЫ НАЛИЧНЫЕ </span>
          ЗА РУБЕЖОМ
        </h1>
        <p>
          Принимайте платежи без терминала, предоставляя возможность покупателям
          оплачивать ваши товары и услуги так, как они привыкли. Вне зависимости
          от гражданства и банка
        </p>
      </div>
      <div className="hero-buttons-image">
        <div className="hero-buttons">
          <Button fontSize="lg" variant="blue">
            Подключить сервис
          </Button>
          <Button fontSize="lg" variant="gray">
            Узнать подробности
          </Button>
        </div>
        <img className="hero-iphone" src="hero-desktop.png" alt="" />
      </div>
      <img ref={mapRef} className="hero-map" src="Hero-map.svg" alt="" />
    </div>
  );
};

export default Hero;
