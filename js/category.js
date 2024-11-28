let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categorias"); 
let contenedorRecetas = document.querySelector(".category");

let apiUrl = `https://dummyjson.com/recipes/tag/${categoria}`;

fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
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
    })
    .catch(function(error) {
        console.log("Error: " + error);                                                                                                    
    });
