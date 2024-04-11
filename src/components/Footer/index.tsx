import "../../css/Footer.scss";
import Button from "../Button";

const systems = ["visa", "master", "mir", "pci"];

const Footer = () => {
  return (
    <footer>
      <div className="systems">
        {systems.map((i) => (
          <img src={`/payment-systems/large/${i}.svg`} />
        ))}
      </div>
      <div className="contact">
        <div className="left">
          <img src="mail.svg" alt="" />
          <div className="left-text">
            <span>ОСТАЛИСЬ ВОПРОСЫ?</span>
            <a href="mailto:info@pay2day.io">info@amoka.io</a>
          </div>
        </div>
        <div className="right">
          <Button fontSize="lg" variant="white">
            Скачать презентацию
          </Button>
          <Button to="form" fontSize="lg" variant="blue">
            Напишите нам
          </Button>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <a href="/">Политика конфиденциальности</a>
          <a href="/">Договор-оферта</a>
        </div>
        <span>© Amoka LLC 2015-2024</span>
      </div>
    </footer>
  );
};

export default Footer;
