import React from "react";

export default function Country(props) {
  const { name, flags, capital, population, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <div className="country">
      <img className="flag" src={flags.png} alt={name.common} />
      <h3>Name : {name.common}</h3>
      <h3>Population : {population}</h3>
      <h3>Capital : {capital}</h3>
      <h3>Area : {area}</h3>
      <button
        onClick={() => {
          handleRemoveCountry(name.common);
        }}
        className="btn"
      >
        Remove Country
      </button>
    </div>
  );
}
