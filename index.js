
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
    
  for(let j = 0; j < beers.length; j++)
    {
        let card = document.createElement("ul");
        b-nav.className = "b-nav";
        card.innerHTML = `
            <div class="b-nav">
                <a onClick="b-nav('${beers[j].id}')"><h2>${beers[j].name}</h2></a>
            </div>  
        `;
        document.querySelector('#beers').appendChild(b-nav);
        
        //function that calls each beer
        
    }
        
    //console.log(data);


function beer(id)
{
    document.querySelector('#beer').innerHTML = '';
    //console.log(x)
    console.log(ourdata['beers'][id-1].reviews[0]);
    var img = document.createElement('li');
    

    img.innerHTML = `
        <h2>${data[id-1].name}</h2>
        <img src="${data[id-1].image_url}" alt="" class="beer_img" srcset="">
        <p>${data[id-1].description}</p>
        <h3>Reviews</h3>
        <ul id='reviews'>

        </ul>
        
       `
    //console.log(img);
    document.querySelector('#beer').appendChild(img);
    

    var review = document.createElement('li');
    
    for(let t = 0; t < data[id-1].reviews.length; t++)
    {
        review_list.innerHTML = `
            <li>${data[id-1].reviews[k]}</li>
        `
    }
    document.querySelector('.reviews').appendChild(review);
}
