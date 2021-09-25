import { Button } from "@mui/material";

import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
const App = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    setCountries([]);
    const url =
      "https://restcountries.com/v3/region/asia?fields=name,capital,flag,region,subregion,population,borders,languages";

    const res = await fetch(url);
    const data = await res.json();

    setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <Button onClick={getCountries} variant="outlined">
        Refresh
      </Button>
      <div className="countries">
        {countries.map((country) => (
          <CountryCard
            name={country.name.common}
            flag={country.flags[0]}
            capital={country.capital[0]}
            languages={country.languages.eng}
            region={country.region}
            subregion={country.subregion}
            borders={country.borders}
            population={country.population}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
//"https://restcountries.com/v2/alpha/col")
