import { useForm, SubmitHandler } from "react-hook-form";
import "../../css/Form.scss";
import Button from "../Button";
import Input, { Textarea } from "../Input";

const formStepsData = [
  {
    title: "Заявка",
    description: `Заполните онлайн-заявку
        и мы свяжемся с вами`,
  },
  {
    title: "Встреча",
    description: `Заключите договор и получите доступ к системе`,
  },
  {
    title: "Готово",
    description: `Пользуйтесь мобильной кассой в приложении и личном кабинете`,
  },
];

export interface FormState {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      name: "",
      email: "",
      phone: "+",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<FormState> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>
        Подключите <span>мобильную кассу </span>уже сегодня
      </h2>
      <div className="form-steps">
        {formStepsData.map((step, i) => (
          <div key={step.title} className="form-step">
            <div className="form-step-number">{i + 1}</div>
            <span className="form-step-title">{step.title}</span>
            <p className="form-step-description">{step.description}</p>
          </div>
        ))}
      </div>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="form-title">
          Начать пользоваться <span>мобильной кассой</span>
        </h3>
        <Input
          valueLabel="name"
          register={register}
          errorText="name error"
          required
          label="Имя"
        />
        <div className="inputs-container">
          <Input
            valueLabel="phone"
            register={register}
            required
            // pattern="^[0-9-+\s()]{6,16}"
            type="tel"
            label="Мобильный телефон"
          />
          <Input
            valueLabel="email"
            register={register}
            required
            errorText="name error"
            type="email"
            label="Электронная почта"
          />
        </div>
        <Textarea label="Комментарий" />
        <div className="form-actions">
          <div className="form-actions-guarantee">
            <img src="form-tick.png" alt="" />
            <span>
              Мы гарантируем безопасность <br /> и сохранность ваших данных
            </span>
          </div>
          <div className="form-actions-buttons">
            <div className="form-btn-wrapper">
              <Button fontSize="lg" variant="gray">
                Перезвонить мне
              </Button>
            </div>
            <div className="form-btn-wrapper">
              <Button fontSize="lg" variant="blue">
                Отправить
              </Button>
            </div>
          </div>
        </div>
        <p className="form-bottom">
          Нажимая кнопку «Отправить» или «Перезвонить мне», вы подтверждаете,
          что согласны с <a href="/">политикой конфиденциальности</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
