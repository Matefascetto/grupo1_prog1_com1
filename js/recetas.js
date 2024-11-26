let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let receta = document.querySelector(".recetas")

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    let texto = `
    <article>
        <h2>${data.name}</h2>
        <p>Instrucciones: ${data.instructions}</p>
        <p>Tiempo de preparación: ${data.prepTimeMinutes} minutos</p>
        <img class= "image" src="${data.image}" alt="${data.name}">
        <p>Categoría: ${data.mealType}</p>
    </article>
    `;
    receta.innerHTML = texto;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });