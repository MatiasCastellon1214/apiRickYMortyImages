

fetch("https://rickandmortyapi.com/api/character")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let image = data.results
    
    console.log(data); 
    console.log(image); 

    let app = document.querySelector("#app")

    image.forEach(function(img){
      let imageElement = document.createElement("img")

      imageElement.src = img.image;

      app.appendChild(imageElement)
    })
  });
