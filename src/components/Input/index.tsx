import { Path, UseFormRegister } from "react-hook-form";
import "../../css/Input.scss";

import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";
import { FormState } from "../Form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fixedLabel?: boolean;
  errorText?: string;
  register: UseFormRegister<FormState>;
  required: boolean;
  valueLabel: Path<FormState>;
}

const Input = ({
  label,
  fixedLabel,
  errorText,
  register,
  required,
  valueLabel,
  ...rest
}: InputProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const inputElement = containerRef.current!.children[0] as HTMLInputElement;
    inputElement.focus();
  };

  return (
    <div ref={containerRef} onClick={handleClick} className="input-container">
      <input
        className="input"
        placeholder=" "
        data-label={label}
        {...register(valueLabel)}
        {...rest}
      />
      {!!errorText && <span className="error-text">{errorText}</span>}
      <label className="label">{label}</label>
    </div>
  );
};

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  fixedLabel?: boolean;
  maxCharacters?: number;
}

export const Textarea = ({
  label,
  fixedLabel,
  maxCharacters = 200,
  ...rest
}: TextareaProps) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > maxCharacters) return;
    setValue(e.target.value);
    setCount(e.target.value.length);
  };

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div onClick={handleClick} className="input-container">
      <textarea
        value={value}
        onChange={handleChange}
        className="input textarea"
        placeholder=" "
        ref={inputRef}
        data-label={label}
        {...rest}
        rows={20}
      />
      <span className="counter">
        {count} из {maxCharacters} символов
      </span>
      <label className="label">{label}</label>
    </div>
  );
};

export default Input;
