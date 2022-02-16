import { getData } from "../../services/getAds"
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { useEffect, useState } from "react"

const ListOfCards = () => {
  const [ads, setAds] = useState([])

  useEffect(()=>{
    getData().then(async (ad)=> setAds(ad))
  }, [])

  return <>
    {
      ads.map(({id, name, image, location, description, time}) =>(
        <Link to={`/home/${id}`} key={id}>
          <Card id={id} name={name} image={image} location={location} description={description} time={time}/>
        </Link>
      ))
    }
  </>
}

export default ListOfCards