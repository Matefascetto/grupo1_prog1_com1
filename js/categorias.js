let api = "https://dummyjson.com/recipes/tags"

fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let categorias = data
    console.log(categorias)
    
    let contenedorRecetas = document.querySelector(".categorias")

  for (let i = 0; i < categorias.length; i++) {
    const categorias = data[i];

  contenedorRecetas.innerHTML += 
         `<article class="recetacard">
            <h4> <a class="btn" href="./category.html?categorias=${categorias}">${categorias}</a></h4>
           </article>`
};
})
  .catch(function(error) {
    console.log("Error: " + error);
});;