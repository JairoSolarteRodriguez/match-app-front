import { getData } from "../../services/fakeData"
import Card from '../Card/Card'

const ListOfCards = () => {
  const data = getData();

  console.log(data)
  return <>
    {
      data.map(({id, name, image, location, description, time}) =>(
        <Card key={id} name={name} image={image} location={location} description={description} time={time}/>
      ))
    }
  </>
}

export default ListOfCards