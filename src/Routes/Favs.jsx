<<<<<<< HEAD
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { favs } = useContext(ContextGlobal);

  if (!Array.isArray(favs)) {
    console.error('Error: `favs` no es un array:', favs);
    return <p>Error: Los favoritos no están disponibles.</p>;
  }

=======
import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
<<<<<<< HEAD
        {favs.length > 0 ? (
          favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No se encontraron favoritos</p>
        )}
=======
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
      </div>
    </>
  );
};

export default Favs;
