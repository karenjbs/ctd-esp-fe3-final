<<<<<<< HEAD
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

  const { name, username, id } = dentist;
  const {favs, setFavs} = useContext(ContextGlobal)

  const addFav = () => {
    if (!favs.some(fav => fav.id === dentist.id)) {
      setFavs([...favs, dentist]);
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
=======
import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
    </div>
  );
};

export default Card;
