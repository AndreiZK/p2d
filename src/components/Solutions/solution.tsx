import "../../css/Solutions.scss";

interface SolutionProps {
  name: string;
  title: string;
}

const Solution = ({ name, title }: SolutionProps) => {
  return (
    <div className="solution">
      <div className="solution-icons">
        <img
          src={`solutions-icons/${name}/Duotone.svg`}
          alt=""
          className="solution-icon"
        />
        <img
          src={`solutions-icons/${name}/Duotone-1.svg`}
          alt=""
          className="solution-icon dark"
        />
      </div>
      <span data-title={title} className="solution-title">
        {title}
      </span>
    </div>
  );
};

export default Solution;
