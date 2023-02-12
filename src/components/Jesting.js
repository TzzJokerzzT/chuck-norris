import "./Jesting.css";

const Jesting = ({ value }) => {
  return (
    <div className="text-position-1">
      {value.map((jesting) => {
        return (
          <ul key={jesting.id}>
            <li>{jesting.value}</li>
          </ul>
        );
      })}
    </div>
  );
};
//Esto para mostrar datos
Jesting.defaultProps = {
  value: Array(5).fill(""),
};

export default Jesting;
