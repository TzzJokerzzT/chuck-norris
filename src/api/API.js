export const ChuckAPI = async (word) => {
  try {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${word}`
    );
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.logo(err);
  }
};

export const ChuckAPIRandom = async () => {
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
