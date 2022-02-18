export const getData = async(id = null) => {
  const APIURL = id ? `http://localhost:8080/ads/${id}` : `http://localhost:8080/ads/`

  // Fetching data...
  const res = await fetch(APIURL);
  const response = await res.json();
  
  return response
}