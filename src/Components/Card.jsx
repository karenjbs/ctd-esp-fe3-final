import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

  const { name, username, id } = dentist;
  const {favs, setFavs} = useContext(ContextGlobal)

  const addFav = () => {
    if (!favs.some(fav => fav.id === dentist.id)) {
      setFavs([...favs, dentist]);
      alert("Odontólogo agregado a favoritos!");
    } else {
      alert("El odontólogo ya está en favoritos.");
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
      <Link to={`/detail/${id}`} className="detailsLink">
        <h4>{name}</h4>
      </Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
