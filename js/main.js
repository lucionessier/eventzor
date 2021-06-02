// Creamos un array vacío, que luego se rellenará con los datos que ingrese el usuario

const bandas = [];
let cantidad = 3;

//Preguntará, en este caso 3 veces, ya que cantidad es igual a 3, al usuario que ingrese bandas.
do {
    
    let ingresarBanda = prompt("Ingresa el nombre de una banda");
    bandas.push(ingresarBanda.toUpperCase());


} while(bandas.length != cantidad) 

// Concatenamos las bandas ingresadas
let bandasIngresadas = bandas.concat();

// Mostramos las bandas que ingresó
alert("Las bandas ingresadas en el buscador son: " + bandasIngresadas.join("\n"));

// Creamos un array de meses
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


// Creamos una funcion que genere un mes random de los listados en el array anterior
function mesRandom () {
    return meses[Math.floor(Math.random() * meses.length)];
}


// Lo mismo pero que agarre una banda cualquiera de las ingresadas
function bandaRandom () {
    return bandas[Math.floor(Math.random() * bandas.length)];
}



// Con el class constructor, creo 3 objetos, cada uno con una region, ciudad y establecimiento distintos . Después los pongo en un array para que sea más fácil acceder 

class Lugar {
    
    constructor(region,ciudad,establecimiento) {
        this.region = region;
        this.ciudad = ciudad,
        this.establecimiento = establecimiento
    }

    mostrarLugar() {
        console.log(Lugar);
    }

}

const ciudad1 = new Lugar('America del Norte','Nueva York', 'Geekbar');

const ciudad2 = new Lugar('Europa','Londres','The Strokes');

const ciudad3 = new Lugar('Asia','China','CoderBar');

let ciudades = [ciudad1,ciudad2,ciudad3];

function lugarRandom () {
    return ciudades[Math.floor(Math.random() * ciudades.length)];
}


// Una variable que me seleccione la clase del div infoDisplay

let displayInfo = document.querySelector('.infoDisplay');

// Una variable que cree el elemento h2

let titulosInfo = document.createElement('h2');


// Template literals para que la display de la info aparezca en el div vacío en forma de h2:

titulosInfo.textContent = `
La banda ingresada ${bandaRandom()} tocará el mes ${mesRandom()} en ${lugarRandom().establecimiento} , ${lugarRandom().ciudad} 
`;

// AppendChild que haga el display en el div.
displayInfo.appendChild(titulosInfo);



// -------- DESAFÍO 9 ------


// Una variable que me seleccione la clase del div botonComprar

let displayCompra = document.querySelector('.botonComprar');

// Creo un botón con el innerHTML, con class incluida

displayCompra.innerHTML = `<button class="boton">COMPRAR TICKET</button>`;


// Creo una funcion que genere un precio random en un rango entre 1 y 400


function precioRandom () {
    return Math.floor((Math.random()*400) + 1)
}


// Creo el evento que va a ejecutarse onClick del botón 'Comprar Ticket'

displayCompra.addEventListener('click', mostrarPrecio);

function mostrarPrecio () {

    let infoCompra = document.querySelector('.displayPrecio');


    infoCompra.innerHTML = `<h3 style="color:#00e6b3; font-weight:bold;">El precio del ticket para la banda ${bandaRandom()} es de $${precioRandom()}</h3>`

}
