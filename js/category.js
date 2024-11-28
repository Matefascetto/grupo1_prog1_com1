let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categorias"); 
let contenedorRecetas = document.querySelector(".category");

let apiUrl = "https://dummyjson.com/recipes/tag/" + categoria;

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        

        contenedorRecetas.innerHTML = `<h2 class="titul" >Recetas de la categoría: ` + categoria + "</h2>";

        let recetas = data.recipes;

        for (let i = 0; i < recetas.length; i++) {
            let receta = recetas[i];

            contenedorRecetas.innerHTML += 
                `<article class="imagenes">
                    <p class="fee"><i> <b>${receta.name}</b> </i></p>
                    <img src="https://cdn.dummyjson.com/recipe-images/${receta.id}.webp" class="receta-img">
                    <p class="difficulty">Dificultad: ${receta.difficulty}</p>
                    <a href="./recetas.html?id=${receta.id}" class="ingredients">Receta</a>
                </article>`;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);                                                                                                  
    });