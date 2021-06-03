// Creamos un array con 20 objetos (distintas bandas), para que posteriormente puedan iterarse tanto en la search bar como en el resto del código



const bandas = [
    
    {
        imgFile: "img/proximo1.jpg",
        fechaBanda: "30/08/2021",
        nombreBanda: "Red Hot Chili Peppers",
        lugarBanda: "Geekbar, Nueva York, USA",

    },

    {
        imgFile: "img/proximo2.jpg",
        fechaBanda: "31/09/2021",
        nombreBanda: "Coldplay",
        lugarBanda: "CoderBar, Londres, Reino Unido",

    },

    {
        imgFile: "img/proximo3.jpg",
        fechaBanda: "31/10/2021",
        nombreBanda: "Twenty One Pilots",
        lugarBanda: "Ancient Throne, Croacia, Europa",

    },

    {
        imgFile: "img/proximo4.jpg",
        fechaBanda: "20/11/2021",
        nombreBanda: "Maroon 5",
        lugarBanda: "Big Bang T. , Sudáfrica, África",

    },

    {
        imgFile: "img/proximo5.jpg",
        fechaBanda: "20/10/2021",
        nombreBanda: "AC/DC",
        lugarBanda: "Klusterhoefer , Alemania, Europa",

    },

    {
        imgFile: "img/proximo6.jpg",
        fechaBanda: "17/08/2021",
        nombreBanda: "Metallica",
        lugarBanda: "Shinzen, China, Asia",

    },

    {
        imgFile: "img/proximo7.jpg",
        fechaBanda: "06/07/2021",
        nombreBanda: "Ed Sheeran",
        lugarBanda: "Huan ze, Vietnam, Asia",

    },

    {
        imgFile: "img/proximo8.jpg",
        fechaBanda: "09/12/2021",
        nombreBanda: "The Lumineers",
        lugarBanda: "Trip se, Polonia, Europa",

    },

    {
        imgFile: "img/proximo9.jpg",
        fechaBanda: "08/09/2021",
        nombreBanda: "Linkin Park",
        lugarBanda: "The Noods, Londres, Reino Unido",

    },

    {
        imgFile: "img/proximo10.jpg",
        fechaBanda: "08/11/2021",
        nombreBanda: "Aerosmith",
        lugarBanda: "Nak, Los Angeles, California",

    },

    {
        imgFile: "img/proximo11.jpg",
        fechaBanda: "08/10/2021",
        nombreBanda: "Post Malone",
        lugarBanda: "Stripped, Los Angeles, California",

    },

    {
        imgFile: "img/proximo12.jpg",
        fechaBanda: "14/11/2021",
        nombreBanda: "J Balvin",
        lugarBanda: "NLa Guachita, Bogotá, Colombia",

    },

    {
        imgFile: "img/proximo13.jpg",
        fechaBanda: "10/10/2021",
        nombreBanda: "Cazzu",
        lugarBanda: "Milk, Córdoba, Argentina",

    },

    {
        imgFile: "img/proximo14.jpg",
        fechaBanda: "27/11/2021",
        nombreBanda: "Solomun",
        lugarBanda: "Tuk Tuk, Tulum, México",

    },

    {
        imgFile: "img/proximo15.jpg",
        fechaBanda: "28/11/2021",
        nombreBanda: "Maceo Plex",
        lugarBanda: "DGTL Festival, Países Bajos, Europa",

    },

    {
        imgFile: "img/proximo16.jpg",
        fechaBanda: "28/11/2021",
        nombreBanda: "Soda Stereo",
        lugarBanda: "Estadio Único La Plata, Buenos Aires, Argentina",

    },

    {
        imgFile: "img/proximo17.jpg",
        fechaBanda: "25/12/2021",
        nombreBanda: "Babasónicos",
        lugarBanda: "Studio Theater, Córdoba, Argentina",

    },

    {
        imgFile: "img/proximo18.jpg",
        fechaBanda: "17/10/2021",
        nombreBanda: "Ciro y Los Persas",
        lugarBanda: "El Monumental, Buenos Aires, Argentina",

    },

    {
        imgFile: "img/proximo19.jpg",
        fechaBanda: "15/10/2021",
        nombreBanda: "La Mona Jiménez",
        lugarBanda: "La Morocha, Córdoba, Argentina",

    },

    {
        imgFile: "img/proximo20.jpg",
        fechaBanda: "13/09/2021",
        nombreBanda: "La Barra",
        lugarBanda: "Cuba Inc, Córdoba, Argentina",

    },
    

];


// Iteramos las bandas para que se muestren solamente 4, en cada caso se crea una card distinta

for (let i = 0; i < bandas.length && i <= 3 ; i++) {

    let crearCard = document.querySelector('#proximosEventos');

    crearCard.innerHTML += `
    <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em">
    <div class="card align-items-center">
      <img src="${bandas[i].imgFile}" class="card-img-top" alt="...">
      
      <div class="card-body container row justify-content-center"></div>
        <h5>${bandas[i].fechaBanda}</h5>
        <h4 class="card-title">${bandas[i].nombreBanda}</h4>
        <p class="descripcion-evento">${bandas[i].lugarBanda}</p>
        <a href="#" class="d-flex boton-proximos-eventos btn btn-primary justify-content-center align-content-center" style="margin-bottom:1em;">Comprar Tickets</a>
      </div>
    </div>
  </div>`;


}



// //Preguntará, en este caso 3 veces, ya que cantidad es igual a 3, al usuario que ingrese bandas.
// do {
    
//     let ingresarBanda = prompt("Ingresa el nombre de una banda");
//     bandas.push(ingresarBanda.toUpperCase());


// } while(bandas.length != cantidad) 

// // Concatenamos las bandas ingresadas
// let bandasIngresadas = bandas.concat();

// // Mostramos las bandas que ingresó
// alert("Las bandas ingresadas en el buscador son: " + bandasIngresadas.join("\n"));

// // Creamos un array de meses
// let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


// // Creamos una funcion que genere un mes random de los listados en el array anterior
// function mesRandom () {
//     return meses[Math.floor(Math.random() * meses.length)];
// }


// // Lo mismo pero que agarre una banda cualquiera de las ingresadas
// function bandaRandom () {
//     return bandas[Math.floor(Math.random() * bandas.length)];
// }



// // Con el class constructor, creo 3 objetos, cada uno con una region, ciudad y establecimiento distintos . Después los pongo en un array para que sea más fácil acceder 

// class Lugar {
    
//     constructor(region,ciudad,establecimiento) {
//         this.region = region;
//         this.ciudad = ciudad,
//         this.establecimiento = establecimiento
//     }

//     mostrarLugar() {
//         console.log(Lugar);
//     }

// }

// const ciudad1 = new Lugar('America del Norte','Nueva York', 'Geekbar');

// const ciudad2 = new Lugar('Europa','Londres','The Strokes');

// const ciudad3 = new Lugar('Asia','China','CoderBar');

// let ciudades = [ciudad1,ciudad2,ciudad3];

// function lugarRandom () {
//     return ciudades[Math.floor(Math.random() * ciudades.length)];
// }


// // Una variable que me seleccione la clase del div infoDisplay

// let displayInfo = document.querySelector('.infoDisplay');

// // Una variable que cree el elemento h2

// let titulosInfo = document.createElement('h2');


// // Template literals para que la display de la info aparezca en el div vacío en forma de h2:

// titulosInfo.textContent = `
// La banda ingresada ${bandaRandom()} tocará el mes ${mesRandom()} en ${lugarRandom().establecimiento} , ${lugarRandom().ciudad} 
// `;

// // AppendChild que haga el display en el div.
// displayInfo.appendChild(titulosInfo);



// // -------- DESAFÍO 9 ------


// // Una variable que me seleccione la clase del div botonComprar

// let displayCompra = document.querySelector('.botonComprar');

// // Creo un botón con el innerHTML, con class incluida

// displayCompra.innerHTML = `<button class="boton">COMPRAR TICKET</button>`;


// // Creo una funcion que genere un precio random en un rango entre 1 y 400


// function precioRandom () {
//     return Math.floor((Math.random()*400) + 1)
// }


// // Creo el evento que va a ejecutarse onClick del botón 'Comprar Ticket'

// displayCompra.addEventListener('click', mostrarPrecio);

// function mostrarPrecio () {

//     let infoCompra = document.querySelector('.displayPrecio');


//     infoCompra.innerHTML = `<h3 style="color:#00e6b3; font-weight:bold;">El precio del ticket para la banda ${bandaRandom()} es de $${precioRandom()}</h3>`

// }
