const boton = document.getElementById("botonAleatorio");
const is = document.getElementById("is");
const mocion = document.getElementById("mocion");
const cajaIs = document.getElementById("caja-is");
const cajaMocion = document.getElementById("caja-mocion");
const separador = document.getElementById("separador");
const torneo = document.getElementById("caja-torneo");


boton.addEventListener("click", function(){ //El evento es que cuando se clickee en el boton hace la funcion genérica
    fetch("full.csv") //pilla los datos
        .then(function(respuesta){ //los pasa a la funcion generica, el resultado de antes es la "respuesta"
            return respuesta.text(); //convierte el contenido a texto en plano
        })
        .then(function(texto){
            const filas = texto.trim().split("\n"); //el texto quita los espacios sobrantes, el split lo separa en un array según los saltos de línea
            // const datos = filas.slice(1); //Quita el primer elemento del array

            const datos = filas; //Quita el primer elemento del array

            const tabla = datos.map(function(fila) {
                return fila.split(";");
            });
            
            const indice = Math.floor(Math.random() * tabla.length);
            const filaChosen = tabla[indice];

            separador.style.display = "flex"

            if (filaChosen[1] === ""){
                cajaIs.style.display = "none";
            } else {
                cajaIs.style.display = "block"
                is.innerHTML = "<p>" + filaChosen[1] + "</p>";
            }

            
            cajaMocion.style.display = "block";
            mocion.innerHTML = "<p>" + filaChosen[2] + "</p>";
            torneo.style.display = "block";
            torneo.innerHTML = "<p>" + filaChosen[0] + "</p>";
        });
    
});