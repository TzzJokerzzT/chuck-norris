import { useState } from "react";
import { ChuckAPIRandom } from "../api/API";
import JestingRandom from "./Jesting-Random";
import "./Bottom-Random.css";

const Random = () => {
  const [value, setValue] = useState([]);
  const fetchChuck = async () => {
    const chuckResp = await ChuckAPIRandom();
    setValue(chuckResp);
  };
  return (
    <div className="button-random-position">
      <JestingRandom valor={value} />
      <button className='random-button' type="submit" onClick={() => fetchChuck()}>
        Generate Random Phrase
      </button>
    </div>
  );
};

export default Random;
