import { getData } from "../../services/getAds"
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Card from '../Card/Card'
import './ListOfCards.css'
import '../SearchBar.css'

const ListOfCards = () => {
  const [ads, setAds] = useState([])
  const [search, setSearch] = useState('')
  const { id } = useParams()
  const [hideSearchBtn, setHideSearchBtn] = useState(false);

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
    result = ads.filter(ad => ad.name.toLowerCase().includes(search) || ad.location.toLowerCase().includes(search) || ad.time.toLowerCase().includes(search) || ad.description.toLowerCase().includes(search))
  }else{
    result = ads
  }

  console.log(id)

  return <>
    <div className="search-box">
      <form onMouseEnter={() => setHideSearchBtn(true)} onMouseLeave={() => setHideSearchBtn(false)} onSubmit={handleSubmit}>
      <input type="text" placeholder="Busca un anuncio!" onChange={handleChange} className="search-input"/>
        <button style={{display: hideSearchBtn ? 'none' : 'block' }} type="submit" className="search-btn">
          <i className="fas fa-search"/>
        </button>
      </form>
    </div>

    <div className="container">
      {
        result.length === 0 ? <p>Aún no hay datos que coincidan</p> : 
        result.map(({id, name, image, location, description, time, days, verified}) =>(
          <Link to={`/home/${id}`} key={id}>
            <Card id={id} name={name} image={image} location={location} description={description} time={time} days={days} verified={verified} detail={id === undefined ? true : false}/>
          </Link>
        ))
      }
    </div>
  </>
}

export default ListOfCards