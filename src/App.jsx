import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/handleRandom'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentList from './components/ResidentList'
import ResidentForm from './components/ResidentForm'


//cuando el numero va a hacer una constante el nombre debe ir con mayuscula
const RESIDENTS_PERPAGE = 12;



function App() {
  //Estado que almacena la informacion de la location
  const [location, setLocation] = useState()
  //Estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("")

  //estado que muestra en que pagina estamos
  const [page, setPage] = useState(1)

  //Funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }
  //funcion que se encarga de obtener los residentes dependiendo de la pagina actual
  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }



  //Funcion que se ejecuta en el primer render y cuando cambia el nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))

  }, [nameLocation])

  return (
    <div className="App">
      
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}  setPage={ setPage} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}  setPage={ setPage} />   


    </div>
  )
}

export default App
