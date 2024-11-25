let container1= document.querySelector("recetas")
let url='https://dummyjson.com/recipes'

fetch(url)
    .then(function (resp) {
    return resp.json();
    })
    .then(function (data) {
    console.log(data);
    });


