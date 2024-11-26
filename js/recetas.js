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
    <article class="receta-especifica">
        <h2 class="titulo-receta">${data.name} by Antonio</h2>
        <p> <b> Instrucciones: </b> ${data.instructions}</p>
        <p> <b> Tiempo de preparación:</b> ${data.prepTimeMinutes} minutos</p>
        <img class= "image" src="${data.image}" alt="${data.name}">
        <p> <b>Categoría:</b> ${data.mealType}</p>
    </article>
    `;
    receta.innerHTML = texto;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });