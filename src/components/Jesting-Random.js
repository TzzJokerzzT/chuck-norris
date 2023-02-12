import "./Jesting-Random.css";

const JestingRandom = ({ valor }) => {
  return (
    <article className="text-position">
      <div>
        <p key={valor.id}>{valor.value}</p>
      </div>
    </article>
  );
};
export default JestingRandom;
