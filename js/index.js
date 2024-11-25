let container1 = document.querySelector(".recetas"); // Selecciona correctamente el contenedor con clase "recetas"
let url = "https://dummyjson.com/recipes";

fetch(url)
    .then(function (resp) {
        return resp.json(); // Convierte la respuesta a JSON
    })
    .then(function (data) {
        console.log(data); // Muestra todos los datos en la consola
        let recipes = data.recipes; // Accede al array de recetas

        // Itera sobre las primeras 10 recetas
        for (let i = 0; i < 10; i++) {
            container1.innerHTML += `
                <article class="imagenes">
                    <p class="fee"><i> <b>${recipes[i].name}<b/> </i></p>
                    <img src= "https://cdn.dummyjson.com/recipe-images/${recipes[i].id}.webp"class="receta-img">
                    <p>Ingredientes: ${recipes[i].ingredients.join(", ")}</p>
                </article>`;
        }
    })
    .catch(function (error) {
        console.error("Error al obtener las recetas:", error);
    });



