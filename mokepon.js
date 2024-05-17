let ataqueJugador //Creo dos variable globales 
let atacaEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego()
{
    let seleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
    seleccionarAtaque.style.display = 'none'
    let botonMascota = document.getElementById('boton-mascota') //BUSCAME EN MI DOCUMENTO HTML
    botonMascota.addEventListener('click',seleccionMascotaJugador) // ESCUCHADOR DE EVENTOS
    let botonFuego = document.getElementById('boton-fuego') 
    botonFuego.addEventListener('click',AtaqueFuego) // selecciono un escuchador para cada boton de ataque con su respectiva function
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonAgua = document.getElementById('boton-agua')    
    botonAgua.addEventListener('click',ataqueAgua)
    let botonReinicio = document.getElementById("boton-Reiniciar")
    botonReinicio.style.display = 'none'
    botonReinicio.addEventListener('click',reiniciarJuego)
}
function seleccionMascotaJugador()
{
    
    let seleccionMascota = document.getElementById("SELECCIONAR-MASCOTA")
    seleccionMascota.style.display = 'none'
    let seleccionarAtaque = document.getElementById("SELECCIONAR-ATAQUE")
    seleccionarAtaque.style.display = 'flex'
    let botonReinicio = document.getElementById("boton-Reiniciar")
    botonReinicio.style.display = 'none'
    botonReinicio.addEventListener('click',reiniciarJuego)
    let inputHipodoge = document.getElementById('LEON')
    let inputCapipeco = document.getElementById('ELEFANTE')
    let inputRatigueya = document.getElementById('OSO-PANDA')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let spanMascotaVariable = document.getElementById("LEON")
    
    if (inputHipodoge.checked)
    { 
        spanMascotaJugador.innerHTML = 'LEON 🐆' 
        
        
    }
    else if(inputCapipeco.checked)
    {
        spanMascotaJugador.innerHTML = 'ELEFANTE 🐘'
    }
    else if(inputRatigueya.checked)
    {
        spanMascotaVariable.innerHTML = 
        spanMascotaJugador.innerHTML = 'OSO PANDA 🐼'
    }
    else 
    {
        alert(' 😳 No Haz Seleccionado  Ninguna Mascota \n Selecciona una Para Poder Empezar A Jugar 🎮')
    }
    seleccionMascotaEnemigo()
}
function seleccionMascotaEnemigo()
{
    let ataqueEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
if(ataqueEnemigo == 1 )
    {
        spanMascotaEnemigo.innerHTML = 'LEON'
    }
else if (ataqueEnemigo == 2)
    {
        spanMascotaEnemigo.innerHTML = 'ELEFANTE 🐘'
    }
else 
    {
        spanMascotaEnemigo.innerHTML = 'OSO PANDA 🐼'
    }
}
function aleatorio(min, max)
{
    return Math.floor(Math.random()*(max-min+1) +min)
}
function AtaqueFuego()
{
    
    
    ataqueJugador = ' FUEGO 🔥'
    ataqueEnemigo()
    
        
}
function ataqueTierra()
{
    ataqueJugador = ' TIERRA 🏔️'
    ataqueEnemigo()
    
    
    
}
function ataqueAgua()
{
    ataqueJugador = ' AGUA 💧'
    ataqueEnemigo()
    
    
    
    
}

function ataqueEnemigo()
{
     atacaEnemigo = aleatorio(1,3)
    if(atacaEnemigo == 1)
    {
        atacaEnemigo=' FUEGO 🔥'
    }
    else if(atacaEnemigo == 2)
    {
        atacaEnemigo=' TIERRA 🏔️'
    }
    else 
    {
        atacaEnemigo=' AGUA 💧'
    }
    combate()
}
function combate()
{
    let spanVidasJugador = document.getElementById("Vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if(atacaEnemigo == ataqueJugador)
    {
        crearMensaje('EMPATE')
    }
    else if (ataqueJugador == ' FUEGO 🔥' && atacaEnemigo == ' TIERRA 🏔️' || 
    ataqueJugador == ' TIERRA 🏔️' && atacaEnemigo == ' AGUA 💧'||
    ataqueJugador == ' AGUA 💧' && atacaEnemigo == ' FUEGO 🔥' )
    {
       vidasEnemigo-- 
       spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje('GANASTE')
    }
    else
    {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo == 0)
    {
        
        crearMensajeFinal('GANASTE 🏆')
        let botonReinicio = document.getElementById("boton-Reiniciar")
        botonReinicio.style.display = 'block'
        botonReinicio.addEventListener('click',reiniciarJuego)
    }
    else if (vidasJugador == 0)
    {
       
        crearMensajeFinal('PERDISTE 😢😭')
        let botonReinicio = document.getElementById("boton-Reiniciar")
        botonReinicio.style.display = 'block'
        botonReinicio.addEventListener('click',reiniciarJuego)
    }
    
    
}   
function crearMensaje(resultado)
{
    let sectionMensajes = document.getElementById("resultado")// selecciono la seccion donde quiero mi nodo
    let AtaqueJugador = document.getElementById("ataque-Jugador")//invoco el id al que quiero trabajar de mi html
    let ataqueEnemigo = document.getElementById("ataque-Enemigo")
    
   // creo un nuevo parrafo
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado   // modifico lo que quiero que valla en el parrafo
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = atacaEnemigo 
    
     // agrego el nodo a la posicion que escogi
     AtaqueJugador.appendChild(nuevoAtaqueDelJugador) 
     ataqueEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    

   
}
function crearMensajeFinal(resultadoFinal)
{
    let sectionMensajes = document.getElementById("resultado")// selecciono la seccion donde quiero mi nodo
    
    sectionMensajes.innerHTML = resultadoFinal
    
   
    let botonMascota = document.getElementById('boton-mascota') //BUSCAME EN MI DOCUMENTO HTML
    botonMascota.disabled = true // deshablitar los botones cuando las vidas de alguno de los dos llegan a 0  
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonAgua = document.getElementById('boton-agua')    
    botonAgua.disabled = true
}
function reiniciarJuego(){
    location.reload()

}

    

window.addEventListener('load',iniciarJuego)