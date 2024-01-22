
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
// var myBeer;
  
const beerUrl = 'http://localhost:3000/beers';

fetch(beerUrl)
.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json(); // Assuming the response is JSON
  })
  .then((data) => navigation(data))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

//fetch ends here 
function navigation(data){
    for(let item=0; item < data.length; item++)
{
    let navb = document.createElement("ul");
    navb.className="navb";
    navb.innerHTML = `
        <div class = "navigate">
            <a onClick = "navigate('${data[item].id}')"><h4>${data[item].name}</h4></a>
        </div>`;
    document.querySelector('#beer_nav').append(navb);

    document.querySelector('#mybeer').innerHTML = '';
}
}
    
    


