
const hostUrl = 'http://localhost:3000/beers/1';

fetch(hostUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json(); // Assuming the response is JSON
  })
  .then((data) => productDisplay(data))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

  function productDisplay(data) {
    const beerName = document.querySelector(".name");
    beerName.textContent = data.name;
    
  
    const beerImage = document.querySelector(".image_url");
    beerImage.src= data.image_url;
    
 
    const beerInfo = document.querySelector(".description");
    beerInfo.textContent = data.description;

    const beerReviews = document.querySelector(".reviews");
    beerReviews.textContent = data.reviews;

  }