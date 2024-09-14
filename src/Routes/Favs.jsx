
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { favs } = useContext(ContextGlobal);

  if (!Array.isArray(favs)) {
    console.error('Error: `favs` no es un array:', favs);
    return <p>Error: Los favoritos no están disponibles.</p>;
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No se encontraron favoritos</p>
        )}
      </div>
    </>
  );
};

export default Favs;
