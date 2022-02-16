const APIURL = 'http://localhost:8080/ads'

export const getData = async() => {
  // Fetching data...
  const res = await fetch(APIURL);
  const response = await res.json();

  return response
}