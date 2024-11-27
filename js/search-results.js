let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBusqueda = queryStringObj.get("search");

let resultados = document.querySelector(".resultados");


fetch(`https://dummyjson.com/recipes/search?q=${terminoBusqueda}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let texto = "";

        if (data.recipes && data.recipes == "") {
            texto = `No se encontraron resultados para: "${terminoBusqueda}"`; 
        } else if(terminoBusqueda == ""){
            texto = "El texto esta vacio, por favor complete la busqueda"
        
        } else {
            data.recipes.forEach(function(receta) {
                texto += `
                    <article class="receta">
                        <img src="${receta.image}" alt="${receta.name}" class="receta-img">
                        <h2>${receta.name}</h2>
                        <a href="./recetas.html?id=${receta.id}" class="link">Ver más</a>
                    </article>`;
            });
        }

        resultados.innerHTML = texto;
    })
    .catch(function(error) {
        console.log("Error: " + error);
        resultados.innerText = "Ocurrió un error al cargar los resultados. Inténtalo más tarde.";
    });
