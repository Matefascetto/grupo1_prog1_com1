
let suma = 0; 
const limite = 10; 
let receta = ``;

function vermas() {
    let url = `https://dummyjson.com/recipes?limit=${limite}&skip=${suma}`;

    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
            let recipes = data.recipes;
            let container1 = document.querySelector(".recetas");

            for (let i = 0; i < recipes.length; i++) {
                container1.innerHTML += `
                    <article class="imagenes">
                        <p class="fee"><i> <b>${recipes[i].name}</b> </i></p>
                        <img src="https://cdn.dummyjson.com/recipe-images/${recipes[i].id}.webp" class="receta-img">
                        <p class="difficulty">Dificultad: ${recipes[i].difficulty}</p>
                        <a href="./recetas.html?id=${recipes[i].id}" class="ingredients">Receta</a>
                    </article>`;
            }

            container1.innerHTML += receta;
            suma += limite;
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
        });
}

vermas();

let BotonVerMas = document.querySelector(".cargar");
BotonVerMas.addEventListener("click", vermas);

