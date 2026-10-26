import './css/b5.css';
import './css/main.css';

//Texto de HTML
const texto = document.getElementById("texto");
const palabra = document.getElementById("palabra");
const contarP = document.getElementById("contarP");
const borrar = document.getElementById("borrar");
const respuesta = document.getElementById("respuesta");

//Reglas
const reglas = (texto) =>{
    //Unificarlo
    const textoU = texto.value.toUpperCase();
    const palabraU = palabra.value.toUpperCase();

    //Cortamos cada espacio
    const textoU1= textoU.split(" ")
    
    // Buscamos la palabra
        const palabraE = textoU1.find((p) => p === palabraU);

    if (palabraE) {

        const veces = textoU1.filter((p) => p === palabraU).length;
        const textoMarcado = textoU.split(palabraU).join(
            `<mark>${palabraU}</mark>`
        );

        respuesta.innerHTML =
            `La palabra "${palabraU}" aparece ${veces} veces.
             <br>
             ${textoMarcado}`;

    } else {
        respuesta.textContent = "La palabra no se encuentra";
    }
}

 contarP.addEventListener("click", () => { 
    //Ver que no vaya vacio
    //Si es vacio retotna una alerta, en caso contrario se llama la función
    const validacion=texto.value.trim() === "" || palabra.value.trim() === ""
    validacion ? alert("Ingresa texto") : reglas(texto);
 });

//Borrar
borrar.addEventListener("click", () => {
    texto.value = "";
    palabra.value = "";
    respuesta.textContent = "";
});