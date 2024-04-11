import "../../css/Button.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "white" | "gray" | "blue";
  to?: string;

  fontSize?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "white",
  fontSize,
  to,
  ...rest
}: ButtonProps) => {
  const handleClick = () => {
    if (to) {
      document.getElementById(to)!.style.scrollMarginTop = "15vh";
      document.getElementById(to)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      {...rest}
      className={`custom-button ${variant} ${fontSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
