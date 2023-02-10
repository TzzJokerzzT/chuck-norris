import "./Jesting-Random.css";

const JestingRandom = ({ valor }) => {
  return (
    <article>
      <div className="jesting-random-position">
        <p key={valor.id}>{valor.value}</p>
      </div>
    </article>
  );
};
export default JestingRandom;
