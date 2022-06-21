import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

export default function Countries(props) {
  return (
    <section className="countries">
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };

        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
}
