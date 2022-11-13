/* Plataforma de series y peliculas
el usuario puede:
1. Consultar disponibilidad de pantallas para pelicula o serie
2. Ver pelicula o serie
3. subir video propio
4. Compartir pelicula 
5. salir*/

let catalogoDelCliente = 500;
let opcionMenu = 0;

function consultarDisponibilidad () {
    alert (`Cliente, la disponibilidad es $${catalogoDelCliente}`)
}

const verPelicula = function() {
    let peliculaAVer = parseInt(prompt("Cuantas pantallas desea utilizar? \nUsted cuenta con tv 20, celulares 30, pc 50 "));
    if (peliculaAVer > catalogoDelCliente){
        alert("Su abono no permite es cantidad de reproduciones, pague un mejor plan.");
    } 
    else {
      catalogoDelCliente -= peliculaAVer; 
      alert(` Usted esta viendo en $${peliculaAVer}, puede reproducir solo en $${catalogoDelCliente} cantidad de dispositivos`);  
    }
}

const subirVideoPropio = () => {
    let subirVideoPropio =parseInt(prompt("Que cantidad de videos desea subir"));
    catalogoDelCliente += subirVideoPropio;
}

const compartirPelicula = () => {
    let peliculaACompartir = parseInt(prompt("Cuantas patallas desea compartir la reproduccion"));
    if(peliculaACompartir > catalogoDelCliente){
        alert("No posees el nivel de usuario requerido ");
  }
  else { 
    catalogoDelCliente -= peliculaACompartir;
    alert(`Pantalla Compartida con exito, usted todavia puede compartir ${catalogoDelCliente}`);
}
}

do {
 opcionMenu = prompt("Ingrese la seleccion que desea: \n 1. Consultar pantallas activas.\n 2. Ver pelicula o serie.\n 3. Subir video propio.\n 4. Ver online con otro usuario.\n 5. Salir");
  switch (opcionMenu){
    case `1`:
        consultarDisponibilidad();
        break;
    case `2`:
        verPelicula ();
        break;
    case `3`:
        subirVideoPropio ();
        break;
    case `4`:
        compartirPelicula ();
        break;
    case `5`:
        alert(`Muchas gracias por elegirnos, te esperamos pronto`);
        break;
    default:
            alert(`Opcion incorrecta, vuelva a intentar, por favor`);
            break;

  }
}
while(opcionMenu !== `5` );
