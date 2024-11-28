let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categorias"); 
let contenedorRecetas = document.querySelector(".category");

let apiUrl = "https://dummyjson.com/recipes/tag/" + categoria;

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
HEAD
    .then((data) => {
        contenedorRecetas.innerHTML = `<h2 class="titul">Recetas de la categoría: ${categoria}</h2>`;
        data.recipes.forEach((receta, i) => {
            contenedorRecetas.innerHTML += `
                <article class="imagenes">
                    <p class="fee"><i> <b>${data.recipes[i].name}</b> </i></p>
                    <img src="https://cdn.dummyjson.com/recipe-images/${data.recipes[i].id}.webp" class="receta-img">
                    <p class="difficulty">Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="./recetas.html?id=${data.recipes[i].id}" class="ingredients">Receta</a>
                </article>

            `;
        });

    .then(function(data) {
        console.log(data);

        contenedorRecetas.innerHTML = "<h2>Recetas de la categoría: " + categoria + "</h2>";

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
