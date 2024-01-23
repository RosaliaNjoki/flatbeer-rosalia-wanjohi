let review =[]
fetch('http://localhost:3000/beers/1')
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

    for (i=0; i< data.reviews.length; i++){
      let div = document.createElement ("div");
      div.className = "div";
      div.innerHTML = `
  
      <h3 class = "review">${data.reviews[i]}</h3>
  
      `;
    document.querySelector(".reviews").appendChild(div)   
  }


  }
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('form').addEventListener('submit', (e)=>{
           e.preventDefault();
           addReviews(e.target.review.value);
       });
   })
   function addReviews(review){
       let h3 = document.createElement("h3");
       let btn = document.createElement("button");
       btn.addEventListener("click", handleDelete);
       btn.textContent = "x";
       h3.appendChild(btn);
       h3.textContent = review;
       document.querySelector(".reviews").appendChild(h3);
       
   }
   function handleDelete(e){
       e.target.parentNode.remove();
   }
  var beerData;

  fetch("http://localhost:3000/beers")
    .then((response) => {
      
      return response.json(); 
    })
    .then((data) => {
      beerData = data;
  
  for (let j = 0; j<beerData.length; j++){
      let navList = document.createElement("ul")
      navList.className = "navList";
      navList.innerHTML = `
          <div class = "navb">
              <a onclick = "navigate('${beerData[j].id}')" href= "#"><h2>${beerData[j].name}</h2></a>
          </div>    
      `;
    document.querySelector("#beer_nav").append(navList);   
  }
      
  
    });
  
   function navigate(id){
  document.querySelector("#beer_nav").innerHTML = ``;
   
      let beerInfo = document.createElement("li");
      beerInfo.innerHTML = 
          `<h3> ${beerData[id-1].name}</h3>
          <img src = "${beerData[id-1].image_url}" alt = ''>
          <h3>${beerData[id-1].description}</h3>
          <h3>${beerData[id-1].reviews}</h3>
       `;
   document.querySelector("#beer_nav").appendChild(beerInfo);
   }