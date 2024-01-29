// Variables constantes
//  Declaración de variables:
    /*Se declara la variable, se llama el documento, se le coloca
    un metodo y se le da un parametro, lugo volvemos a escribir la variable pero 
    esta vez sin redeclararla y le damos otro metodo y un evento el cual estamos 
    utilizando la función declarada. 
*/
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

// Variables globables y Arrays
// Arreglos
// array que nos permite guardar diferenetes valores en una variable.
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let vidasJugador = 3
let vidasEnemigo = 3

// Clases
class Mokepon {
    // Constructor
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

// Construcción de un nuevo objeto y tener nuevos mokepones
let hipodoge = new Mokepon('Hipodoge','./assets/hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo','./assets/capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya.png', 5)

// llamar variable y utilizar el metodo .push() para inyectar el valor en el arreglo que se creo en las variables.
// Arreglos con el metodo .push() para inyectar los ataques de los mokepones
hipodoge.ataques.push(
    {nombre: '♒',id: 'boton-agua'},   
    {nombre: '♒',id: 'boton-agua'},
    {nombre: '♒',id: 'boton-agua'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🔥',id: 'boton-fuego'}
    )

capipepo.ataques.push(
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '♒',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'}
)

ratigueya.ataques.push(
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '♒',id: 'boton-agua'}
)

// Arreglo para inyectar los mokepones
mokepones.push(hipodoge,capipepo,ratigueya)

// se utiliza la función console.log para ver ciertos valores de interes y poder hacer pruebas
// console.log(hipodoge)

// Funciones
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    // metodo para recorrer los obejetos que estan dentro del array
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}">
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}e">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    })

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Funcion para seleccionar la mascota del jugador
function seleccionarMascotaJugador() {
    // Variables:
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'


    /* Condicional que me permite obtener el resultado de haber checkeado
    una de las mascotas por medio de la propiedad checked y obtener el resultado
    por medio de una variable con la propiedad innerHTML haciendo el llamado a la 
    variable permitiendo que el código se vea mas limpio.
    */
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id 
    } else {
        alert('Debe seleccionar una mascota.')
    }

    // Llamar funcion para seleccionar la mascota del enemigo
    seleccionarMascotaEnemigo()
}

/* Se crea la función para seleccionar la mascota del enemigo y se crea una
variable llamando la función aleatoria para elegir el ataque al azar 
*/
function seleccionarMascotaEnemigo() {
    // Variables:
    // Aqui generamos un numero aleatorio con la longitud que tiene la variable mokepones
    let mascotaAleatorio = aleatorio(0,mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
}


// Funciones de ataque del enemigo
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    } 

    combate()
}

// Función de combate
function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas();
}

// Función para revisar las vidas
function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajFinal("Felicitaciones Ganaste :)")
    } else if(vidasJugador == 0) {
        crearMensajFinal("Lo siento, perdiste :(")
    }
}


// Función para crear mensajes
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

// Función para crear mensaje final
function crearMensajFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Eventos
    /*pepdir al navegador avisar cuando el código html ya haya cargado, se debe
    definir un metodo con un evento y una función*/
window.addEventListener('load', iniciarJuego)