// Getting the data from Flickr´s API and returning an array of photo objects
export let getData = async (inputValue, images) => {
  const BASE_API_URL = "https://api.flickr.com/services/rest/";
  const API_KEY = "?api_key=19d3e6e0acfe9c438f368e2c2bab1c5d";
  const METHOD = "&method=flickr.photos.search";
  const FORMAT = "&format=json&nojsoncallback=1";
  const TEXT = "&text=";
  const SORT_RELEVANCE = "&sort=relevance";
  const PER_PAGE = "&per_page=";
  let url = `${BASE_API_URL}${API_KEY}${METHOD}${FORMAT}${TEXT}${inputValue()}${SORT_RELEVANCE}${PER_PAGE}${images()}`;
  console.log(url)
  let response = await fetch(url, {
    method: "GET"
  });
  let data = await response.json();
  return await data.photos.photo;
};