import './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('/character').then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.error('Deu ruim', error)
    })    
  }, [])

  return (
    <>
      <img src="" alt="" />
      <main>
        {data.map((item, index) => (
          <div key={index}>
            <img src="" alt="" />
            <h2>{item.name}</h2>
            <p>{item.status}</p>
            {item.status === 'Alive' ? "status: alive" : "status: dead"}
            <p>{item.species}</p>
          </div>
        ))}
      </main>
    </>
  )
}

export default App
