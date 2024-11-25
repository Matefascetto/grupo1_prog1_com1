let container1 = document.querySelector(".recetas"); 

let url = "https://dummyjson.com/recipes";

fetch(url)
    .then(function (resp) {
        return resp.json(); 
    })
    .then(function (data) {
        console.log(data); 
        let recipes = data.recipes

        for (let i = 0; i < 10; i++) {
            container1.innerHTML += `
                <article class="imagenes">
                    <p class="fee"><i> <b>${recipes[i].name}<b/> </i></p>
                    <img src= "https://cdn.dummyjson.com/recipe-images/${recipes[i].id}.webp"class="receta-img">
                    <p class="difficulty"> Dificultad: ${recipes[i].difficulty} </p>
                    <a href="./receta.html?id=${recipes[i].id}"class="ingredients"> Receta </a>
                </article>`;
        }    
        
    })
    .catch(function (error) {
        console.error("Error al obtener las recetas:", error);
    });








