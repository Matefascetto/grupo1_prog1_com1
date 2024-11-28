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
         `<article class="receta card">
            <h4 class="card-title">${categorias}</h4>
            <a class="btn" href="./category.html?categorias=${categorias}">Ver comidas de esta categoria</a>
           </article>`
};
})
  .catch(function(error) {
    console.log("Error: " + error);
});;