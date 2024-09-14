<<<<<<< HEAD
import React, { useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const {dentist} = useContext(ContextGlobal);

=======
import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
<<<<<<< HEAD
        {dentist.length > 0 ? (
          dentist.map(dentist => (
          <Card
          key={dentist.id}
          dentist={dentist}
          />
        ))
      ) : (
        <p>No se encontraron dentistas</p>
      )}
=======
        {/* Aqui deberias renderizar las cards */}
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
      </div>
    </main>
  )
}

<<<<<<< HEAD
export default Home

=======
export default Home
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
