
import React, { useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const {dentist} = useContext(ContextGlobal);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentist.length > 0 ? (
          dentist.map(dentist => (
          <Card
          key={dentist.id}
          dentist={dentist}
          />
        ))
      ) : (
        <p>Cargando Informacion...</p>
      )}
      </div>
    </main>
  )
}

export default Home

