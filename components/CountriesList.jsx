import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { useFilter } from "../hooks/useFilter";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
  },[]);

  return (
    <>
      {!countriesData.length ? (<CountriesListShimmer/>) : <div className="countries-container">
        {
        useFilter(countriesData,query).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          );
        })
      }
      </div>}
    </>
  )
};

export default CountriesList;
