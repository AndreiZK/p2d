import { useEffect, useRef } from "react";
import "../../css/ArrowUp.scss";

const ArrowUp = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callback = () => {
      if (window.pageYOffset > 0) {
        ref.current?.classList.remove("hidden");
      } else ref.current?.classList.add("hidden");
    };
    document.addEventListener("scroll", callback);

    return () => document.removeEventListener("scroll", callback);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div ref={ref} onClick={handleClick} className="arrow-up hidden">
      <img src="ArrowUp.svg" alt="" />
    </div>
  );
};

export default ArrowUp;
