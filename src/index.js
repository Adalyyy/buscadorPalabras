import './css/b5.css';
import './css/main.css';

//Texto de HTML
const texto = document.getElementById("texto");
const palabra = document.getElementById("palabra");
const palabraR = document.getElementById("palabraR")
const contarP = document.getElementById("contarP");
const borrar = document.getElementById("borrar");
const respuesta = document.getElementById("respuesta");
const remplazar = document.getElementById("remplazar");

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
        const textoMarcado = textoU.split(palabraU).join(`<mark>${palabraU}</mark>`);

        respuesta.innerHTML =`La palabra "${palabraU}" aparece ${veces} veces.<br>${textoMarcado}`;

    } else {
        respuesta.textContent = "La palabra no se encuentra";
    }
}

//Remplazar
const remplazo = () => {
    const textoU = texto.value.toUpperCase();
    const palabraU = palabra.value.toUpperCase();
    const palabraRU = palabraR.value.toUpperCase();

    const textoReemplazado = textoU.split(palabraU).join(palabraRU);
    respuesta.textContent = textoReemplazado;
};

 contarP.addEventListener("click", () => { 
    //Ver que no vaya vacio
    //Si es vacio retotna una alerta, en caso contrario se llama la función
    const validacion=texto.value.trim() === "" || palabra.value.trim() === ""
    validacion ? alert("Ingresa texto") : reglas(texto);
 });

//Remplazo
remplazar.addEventListener("click",()=>{
    const validacion=texto.value.trim() === "" || palabra.value.trim() === "" || palabraR.value.trim() === ""
    validacion ? alert("Ingresa texto en todos los campos") : remplazo();

});
//Borrar
borrar.addEventListener("click", () => {
    texto.value = "";
    palabra.value = "";
    palabraR.value = "";
    respuesta.textContent = "";
});