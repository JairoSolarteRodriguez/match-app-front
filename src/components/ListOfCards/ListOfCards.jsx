import { getData } from "../../services/getAds"
import {Link, useLocation, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"

import icon from './icon.svg'

import Card from '../Card/Card'
import './ListOfCards.css'
import '../SearchBar.css'

const ListOfCards = () => {
  const [ads, setAds] = useState([])
  const [search, setSearch] = useState('')
  const { idUrl } = useParams()
  const [hideSearchBtn, setHideSearchBtn] = useState(false);
  const {pathname} = useLocation();


  useEffect(()=>{
    if(idUrl !== undefined){
      getData(idUrl).then(async (ad)=> setAds([ad]))
    }else{
      getData().then(async (ad)=> setAds(ad))
    }
  }, [ idUrl ])

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

  return <>
    { pathname === '/home/:idUrl' ?
        <div className="section-location">
          <div className="unosec">
            <img src={icon} alt="search icon" width='100px'/>
            <h2>¡Prueba tu mismo! Busca por palabras clave</h2>
            <form className="form-section-search" onMouseEnter={() => setHideSearchBtn(true)} onMouseLeave={() => setHideSearchBtn(false)} onSubmit={handleSubmit}>
              <input type="text" placeholder="Busca un anuncio!" onChange={handleChange} className="search-input"/>
              <button style={{display: hideSearchBtn ? 'none' : 'block' }} type="submit" className="search-btn">
                <i className="fas fa-search"/>
              </button>
            </form>
          </div>
          <h2 className='subtitle'>Personas con tiempo libre</h2>
        </div>
        : '' }

    <div className="container" id="container">
      {
        result.length === 0 ? <p>Aún no hay datos que coincidan</p> :
            result.map(({id, name, image, location, description, time, days, verified}) =>(
          <Link to={`/home/${id}`} key={id}>
            <Card id={id} name={name} image={image} location={location} description={description} time={time} days={days} verified={verified} detail={idUrl !== undefined ? false : true}/>
          </Link>
        ))
      }

    </div>
  </>
}

export default ListOfCards