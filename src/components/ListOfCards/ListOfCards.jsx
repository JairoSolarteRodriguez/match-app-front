import { getData } from "../../services/getAds"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Card from '../Card/Card'
import './ListOfCards.css'

const ListOfCards = () => {
  const [ads, setAds] = useState([])
  const [search, setSearch] = useState('')
  const { id } = useParams()

  useEffect(()=>{
    if(id !== undefined){
      getData(id).then(async (ad)=> setAds([ad]))
    }else{
      getData().then(async (ad)=> setAds(ad))
    }
  }, [ id ])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    let query = e.target.value.toLowerCase()
    setSearch(query)
  }
  
  let result = []
  if(search !== ''){
    result = ads.filter(ad => ad.name.toLowerCase().includes(search) || ad.location.toLowerCase().includes(search) || ad.time.toLowerCase().includes(search))
    console.log(result)
  }else{
    result = ads
  }

  return <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Ingrese su busqueda" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
    <div className="container">
      {
        result.length === 0 ? <p>Aún no hay datos que coincidan</p> : 
        result.map(({id, name, image, location, description, time}) =>(
          <Link to={`/home/${id}`} key={id}>
            <Card id={id} name={name} image={image} location={location} description={description} time={time}/>
          </Link>
        ))
      }
    </div>
  </>
}

export default ListOfCards