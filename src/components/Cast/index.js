import React from "react";
import { getCastImage } from "./../../helpers";

const Cast = props => {
  const { name, character, profile_path } = props.cast;
  return (
    <div className="cast">
      <img className="cast__img" src={getCastImage(profile_path)} alt={name} />
      <div className="cast__name">{name}</div>
      <div className="cast__character">{character}</div>
    </div>
  );
};

export default Cast;
