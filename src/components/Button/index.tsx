import "../../css/Button.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "white" | "gray" | "blue";

  fontSize?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "white",
  fontSize,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`custom-button ${variant} ${fontSize}`}>
      {children}
    </button>
  );
};

export default Button;
