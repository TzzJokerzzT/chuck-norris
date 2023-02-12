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
    <div className="button-container">
      <JestingRandom valor={value} />
      <button
        className="button-random"
        type="submit"
        onClick={() => fetchChuck()}
      >
        Generate Random Phrase
      </button>
    </div>
  );
};

export default Random;

//
