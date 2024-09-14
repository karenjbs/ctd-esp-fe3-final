<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const res = await axios.get(url);
        setDentist(res.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los detalles del dentista");
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Detail Dentist {id}</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ width: "90%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
=======
import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
