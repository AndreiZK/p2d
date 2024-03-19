import "../../css/Dropdown.scss";
import { useState } from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`dropdown-selected ${open ? "open" : ""}`}
      >
        <span className="dropdown-selected-value">{selected}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <use
            x="6"
            y="8"
            className={`dropdown-arrow ${open ? "open" : ""}`}
            xlinkHref={`icons.svg#arrow`}
          ></use>
        </svg>
      </div>
      <div className={`dropdown-options ${open ? "open" : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className="dropdown-option"
            onClick={() => {
              setOpen(false);
              setSelected(option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
