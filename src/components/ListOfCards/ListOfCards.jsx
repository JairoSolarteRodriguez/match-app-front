import { getData } from "../../services/getAds"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Card from '../Card/Card'
import './ListOfCards.css'

const ListOfCards = () => {
  const [ads, setAds] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    if(id !== undefined){
      getData(id).then(async (ad)=> setAds([ad]))
    }else{
      getData().then(async (ad)=> setAds(ad))
    }
  }, [ id ])

  return <>
    <div className="container">
      {
        ads.length === 0 ? <p>Cargando por favor espere...</p> :
        ads.map(({id, name, image, location, description, time}) =>(
          <Link to={`/home/${id}`} key={id}>
            <Card id={id} name={name} image={image} location={location} description={description} time={time}/>
          </Link>
        ))
      }
    </div>
  </>
}

export default ListOfCards