// Creamos un array con 20 objetos (distintas bandas), para que posteriormente puedan iterarse tanto en la search bar como en el resto del código

let bandas = [
    
    {
        id: "redhotchilipeppers",
        imgFile: "img/proximo1.jpg",
        preciobanda: 75,
        preciobandavip: 110,
        fechaBanda: "30/03/2022",
        nombreBanda: "Red Hot Chili Peppers",
        lugarBanda: "Geekbar, Wellington, Nueva Zelanda",
        regionBanda: "oceanía"

    },

    {
        id: "coldplay",
        imgFile: "img/proximo2.jpg",
        preciobanda: 100,
        preciobandavip: 130,
        fechaBanda: "04/03/2022",
        nombreBanda: "Coldplay",
        lugarBanda: "CoderBar, Londres, Reino Unido",
        regionBanda: "Europa"

    },

    {
        id: "twentyonepilots",
        imgFile: "img/proximo3.jpg",
        preciobanda: 80,
        preciobandavip: 110,
        fechaBanda: "07/04/2022",
        nombreBanda: "Twenty One Pilots",
        lugarBanda: "Ancient Throne, Croacia",
        regionBanda: "Europa"

    },

    {
        id: "maroonfive",
        imgFile: "img/proximo4.jpg",
        preciobanda: 75,
        preciobandavip: 90,
        fechaBanda: "20/05/2021",
        nombreBanda: "Maroon 5",
        lugarBanda: "Big Bang T. , Sudáfrica",
        regionBanda: "África"

    },

    {
        id: "acdc",
        imgFile: "img/proximo5.jpg",
        preciobanda: 110,
        preciobandavip: 135,
        fechaBanda: "13/05/2022",
        nombreBanda: "AC/DC",
        lugarBanda: "Klusterhoefer , Alemania",
        regionBanda: "Europa"

    },

    {
        id: "metallica",
        imgFile: "img/proximo6.jpg",
        preciobanda: 110,
        preciobandavip: 125,
        fechaBanda: "14/06/2022",
        nombreBanda: "Metallica",
        lugarBanda: "Shinzen, China",
        regionBanda: "Asia"

    },

    {
        id: "edsheeran",
        imgFile: "img/proximo7.jpg",
        preciobanda: 50,
        preciobandavip: 70,
        fechaBanda: "13/07/2022",
        nombreBanda: "Ed Sheeran",
        lugarBanda: "Huan ze, Vietnam",
        regionBanda: "Asia"

    },

    {
        id: "thelumineers",
        imgFile: "img/proximo8.jpg",
        preciobanda: 35,
        preciobandavip: 125,
        fechaBanda: "09/12/2021",
        nombreBanda: "The Lumineers",
        lugarBanda: "Trip se, Polonia",
        regionBanda: "Europa"

    },

    {
        id: "linkinpark",
        imgFile: "img/proximo9.jpg",
        preciobanda: 75,
        preciobandavip: 110,
        fechaBanda: "08/09/2021",
        nombreBanda: "Linkin Park",
        lugarBanda: "The Noods, Londres, Reino Unido",
        regionBanda: "Europa"

    },

    {
        id: "aerosmith",
        imgFile: "img/proximo10.jpg",
        preciobanda: 110,
        preciobandavip: 135,
        fechaBanda: "08/08/2021",
        nombreBanda: "Aerosmith",
        lugarBanda: "Nak, Los Angeles, California",
        regionBanda: "América del Norte"

    },

    {
        id: "postmalone",
        imgFile: "img/proximo11.jpg",
        preciobanda: 65,
        preciobandavip: 110,
        fechaBanda: "08/10/2021",
        nombreBanda: "Post Malone",
        lugarBanda: "Stripped, Los Angeles, California",
        regionBanda: "América del Norte"

    },

    {
        id: "jbalvin",
        imgFile: "img/proximo12.jpg",
        preciobanda: 35,
        preciobandavip: 60,
        fechaBanda: "14/11/2021",
        nombreBanda: "J Balvin",
        lugarBanda: "NLa Guachita, Bogotá, Colombia",
        regionBanda: "América del Sur"

    },

    {
        id: "cazzu",
        imgFile: "img/proximo13.jpg",
        preciobanda: 25,
        preciobandavip: 45,
        fechaBanda: "10/10/2021",
        nombreBanda: "Cazzu",
        lugarBanda: "Milk, Córdoba, Argentina",
        regionBanda: "América del Sur"

    },

    {
        id: "solomun",
        imgFile: "img/proximo14.jpg",
        preciobanda: 100,
        preciobandavip: 130,
        fechaBanda: "27/11/2021",
        nombreBanda: "Solomun",
        lugarBanda: "Tuk Tuk, Tulum, México",
        regionBanda: "América del Norte"

    },

    {
        id: "maceoplex",
        imgFile: "img/proximo15.jpg",
        preciobanda: 90,
        preciobandavip: 110,
        fechaBanda: "28/11/2021",
        nombreBanda: "Maceo Plex",
        lugarBanda: "DGTL Festival, Países Bajos",
        regionBanda: "Europa"

    },

    {
        id: "sodastereo",
        imgFile: "img/proximo16.jpg",
        preciobanda: 150,
        preciobandavip: 175,
        fechaBanda: "28/11/2021",
        nombreBanda: "Soda Stereo",
        lugarBanda: "Estadio Único La Plata, Buenos Aires, Argentina",
        regionBanda: "América del Sur"

    },

    {
        id: "babasonicos",
        imgFile: "img/proximo17.jpg",
        preciobanda: 35,
        preciobandavip: 60,
        fechaBanda: "25/12/2021",
        nombreBanda: "Babasónicos",
        lugarBanda: "Studio Theater, Córdoba, Argentina",
        regionBanda: "América del Sur"

    },

    {
        id: "ciroylospersas",
        imgFile: "img/proximo18.jpg",
        preciobanda: 15,
        preciobandavip: 25,
        fechaBanda: "17/01/2022",
        nombreBanda: "Ciro y Los Persas",
        lugarBanda: "El Monumental, Buenos Aires, Argentina",
        regionBanda: "América del Sur"

    },

    {
        id: "lamonajimenez",
        imgFile: "img/proximo19.jpg",
        preciobanda: 10,
        preciobandavip: 25,
        fechaBanda: "15/02/2022",
        nombreBanda: "La Mona Jiménez",
        lugarBanda: "La Morocha, Córdoba, Argentina",
        regionBanda: "América del Sur"

    },

    {
        id: "labarra",
        imgFile: "img/proximo20.jpg",
        preciobanda: 5,
        preciobandavip: 10,
        fechaBanda: "13/09/2021",
        nombreBanda: "La Barra",
        lugarBanda: "Cuba Inc, Córdoba, Argentina",
        regionBanda: "América del Sur"

    },
    

];


// Iteramos las bandas para que se muestren solamente 4 en la pantalla apenas se inicia

function proxBandas () {
    
    for (let i = 0; i < bandas.length && i <= 3 ; i++) {

        let crearCard = document.querySelector('#proximosEventos');
    
        crearCard.innerHTML += `
        <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em" id="${bandas[i].id}">
        <div class="card align-items-center">
          <img src="${bandas[i].imgFile}" class="card-img-top" alt="...">
          
          <div class="card-body container row justify-content-center"></div>
            <h2>$${bandas[i].preciobanda}</h2>
            <h5>${bandas[i].fechaBanda}</h5>
            <h4 class="card-title">${bandas[i].nombreBanda}</h4>
            <p class="descripcion-evento">${bandas[i].lugarBanda} , ${bandas[i].regionBanda}</p>
            <button type="button" class="boton btn btn-primary justify-content-center align-content-center" data-bs-toggle="modal" data-bs-target="#modalBanda" style="margin-bottom: 1.5em;">
            Comprar tickets
            </button>
          </div>
        </div>
      </div>`;
    
    
    }
}

proxBandas();



function filteredEvents () {
    
    for (let i = 0; i < bandas.length && i <= 20 ; i++) {

        let filtradosPorRegion = document.querySelector('#filteredByRegion');
    
        filtradosPorRegion.innerHTML += `
        <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em" id="${bandas[i].id}">
        <div class="card align-items-center">
          <img src="${bandas[i].imgFile}" class="card-img-top" alt="...">
          
          <div class="card-body container row justify-content-center"></div>
            <h2>$${bandas[i].preciobanda}</h2>
            <h5>${bandas[i].fechaBanda}</h5>
            <h4 class="card-title">${bandas[i].nombreBanda}</h4>
            <p class="descripcion-evento">${bandas[i].lugarBanda} , ${bandas[i].regionBanda}</p>
            <button type="button" class="boton btn btn-primary justify-content-center align-content-center" data-bs-toggle="modal" data-bs-target="#modalBanda" style="margin-bottom: 1.5em;">
            Comprar tickets
            </button>
          </div>
        </div>
      </div>`;
    
    }
}


function filtradoPorMes () {
    
    for (let i = 0; i < bandas.length && i <= 20 ; i++) {

        let filtradosPorFecha = document.getElementById('filteredByDate');
    
        filtradosPorFecha.innerHTML += `
        <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em" id="${bandas[i].id}">
        <div class="card align-items-center">
          <img src="${bandas[i].imgFile}" class="card-img-top" alt="...">
          
          <div class="card-body container row justify-content-center"></div>
            <h2>$${bandas[i].preciobanda}</h2>
            <h5>${bandas[i].fechaBanda}</h5>
            <h4 class="card-title">${bandas[i].nombreBanda}</h4>
            <p class="descripcion-evento">${bandas[i].lugarBanda} , ${bandas[i].regionBanda}</p>
            <button type="button" class="boton btn btn-primary justify-content-center align-content-center" data-bs-toggle="modal" data-bs-target="#modalBanda" style="margin-bottom: 1.5em;">
            Comprar tickets
            </button>
          </div>
        </div>
      </div>`;
    
    }
}


function searchBarFilter(resultadoBusqueda) {


    for (let i = 0; i < resultadoBusqueda.length && i <= 20 ; i++) {

        let filtradosBusqueda = document.getElementById('filteredBySearch');
    
        filtradosBusqueda.innerHTML = `
        <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em" id="${resultadoBusqueda[i].id}">
        <div class="card align-items-center">
          <img src="${resultadoBusqueda[i].imgFile}" class="card-img-top" alt="...">
          
          <div class="card-body container row justify-content-center"></div>
            <h2>$${resultadoBusqueda[i].preciobanda}</h2>
            <h5>${resultadoBusqueda[i].fechaBanda}</h5>
            <h4 class="card-title">${resultadoBusqueda[i].nombreBanda}</h4>
            <p class="descripcion-evento">${resultadoBusqueda[i].lugarBanda} , ${resultadoBusqueda[i].regionBanda}</p>
            <button type="button" class="boton btn btn-primary justify-content-center align-content-center" data-bs-toggle="modal" data-bs-target="#modalBanda" style="margin-bottom: 1.5em;">
            Comprar tickets
            </button>
          </div>
        </div>
      </div>`;
    
    }
}

// Creo una variable "displayMore = ver más en ingles". La agarro con elementbyId y le agrego el eventlistener que va a hacer que vaya mostrando el resto de los eventos cada vez que le hago click al boton .

let displayMore = document.getElementById("verMas").addEventListener("click", mostrarBandas);


// Esta variable empieza en 4, ya que los 4 primeros elementos se muestran con el for previo de más arriba
var posicion = 4;

//La funcion del addeventListener que va creando el resto de las cards cada vez que el boton es apretado
function mostrarBandas() { 


    for(let i=posicion; i < (posicion +4); i++) {
        let crearCard = document.querySelector('#proximosEventos');
    
        crearCard.innerHTML += `
        <div class="container-fluid col-md-3 justify-content-center align-content-center" style="margin-bottom: 2em" id="${bandas[i].id}">
        <div class="card align-items-center">
          <img src="${bandas[i].imgFile}" class="card-img-top" alt="...">
          
          <div class="card-body container row justify-content-center"></div>
          
            <h2>$${bandas[i].preciobanda}</h2>
            <h5>${bandas[i].fechaBanda}</h5>
            <h4 class="card-title">${bandas[i].nombreBanda}</h4>
            <p class="descripcion-evento">${bandas[i].lugarBanda} , ${bandas[i].regionBanda}</p>
            <button type="button" class="boton btn btn-primary justify-content-center align-content-center" data-bs-toggle="modal" data-bs-target="#modalBanda" style="margin-bottom: 1.5em;">
            Comprar tickets
            </button>
          </div>
        </div>
      </div>`;

    }

    posicion = posicion + 4;

    

    // Cuando posición llegue a 20, se ejecutará lo siguiente:

    if(posicion === 20) {
        // La visibilidad es hidden cuando llega al tope de los elementos (20)
        document.getElementById('verMas').style.display="none";
    } 
    


}




// ------------------  SESSION/LOCAL STORAGE ---------------

// Variables para guardar datos de la barra de busqueda en sessionStorage

// const barraBusqueda = document.getElementById('searchBar');
// const botonBusqueda = document.getElementById('botonBuscar');
// const form = document.querySelector('form');
// const busquedaUsuario = document.getElementById('valorBusqueda');

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
// })

// // Esta funcion para que escuche el boton de busqueda on click y guarde el valor de la barra de busqueda en session storage, luego cree un h3 al apretar el boton que devuelva con getItem el valor del input de la barra. El console log lo hice para debugear. Cada vez que el usuario haga click en buscar, se va modificando el h3 con la busqueda ingresada 

// botonBusqueda.addEventListener('click',function(){
//     sessionStorage.setItem('busqueda',barraBusqueda.value);

//     busquedaUsuario.innerHTML = `<h3 style="text-align:center; visibility: visible">La busqueda ingresada es ${sessionStorage.getItem('busqueda',barraBusqueda.value)}</h3> `
    
//     console.log(sessionStorage.getItem('busqueda',barraBusqueda.value));
// })


// // En localStorage lo que quiero hacer es guardar el array de las bandas

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

// for (const banda of bandas) {
//     guardarLocal(banda.nombreBanda, JSON.stringify(banda));
// }

// // Almaceno el listado de bandas para que cuando el usuario loguee nuevamente estén guardados los valores
// guardarLocal("infoBandas", JSON.stringify(bandas));


