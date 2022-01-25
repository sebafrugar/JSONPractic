'use strict'


// json
let pelicula = {
    titulo : "batman",
    año : 2017,
    pais : "USA"
};

// objeto JS
let peliculas = [     
    {titulo: "superman", año:2018, pais: "usa"},
    pelicula,
    {titulo: "chupacabra", año:2000, pais: "chile"}
]

console.log(peliculas);


const pelis = document.querySelector("#pelis");

peliculas.forEach((indice)=>{     // se puede recorrer un objeto con foreach
    pelis.append(` titulo : ${indice.titulo} `);
});

for (const i in peliculas) {
    pelis.append(` titulo : ${peliculas[i].titulo} - año : ${peliculas[i].año} `)
}


// uso de local storage

if (typeof(Storage) !== "undefined"){   // verifica si esta disponible el local storage
    console.log("LocalStorage disponible");
}else{
    console.log("Localstorage No disponible");
};

// como guardar datos en Local Storage

localStorage.setItem("titulo","los titanes ")

// recuperar elemento 

localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"))

let pruebastorage = document.querySelector("#pruebastorage")
pruebastorage.innerHTML = localStorage.getItem("titulo");

// guardar objetos 

let usuario = {
    nombre : "sebastian",
    email : "sebafrugar@hotmail.com",
    edad : 32,
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto del local storage

let userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);
console.log(userJS.nombre);  // para filtrar nombre 

// borrar info del local storage

localStorage.removeItem("usuario"); // solo el item usuario
localStorage.clear(); // elimina todo el local storage 

// ejercicio local storage

let form = document.querySelector("#formpeliculas");

form.addEventListener("submit", () =>{
    let titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

const ul = document.querySelector('#peliculas-list')
for (const i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
};
