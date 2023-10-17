import React, { useEffect, useState } from "react";

const WithoutReactQuery = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPokeAPI = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/1/");

        if (res.status !== 200 && !res.ok) throw new Error("Fetch data fail.");

        const data = await res.json();
        setData(data);
        console.log(data);
        setIsSuccess(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchPokeAPI();
    console.log(data);
  }, []);

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="box">{isSuccess && JSON.stringify(data, null, 2)}</div>
  );
};

export default WithoutReactQuery;

