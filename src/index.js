import './css/b5.css';
import './css/main.css';
//Texto de HTML
const texto = document.getElementById("texto");
const contarP = document.getElementById("contarP");
const borrar = document.getElementById("borrar");
//Ver que no vaya vacio
texto==="" ? "Ingresatextovalido":reglas()

//Reglas
const reglas = (texto) =>{
    //Unificarlo
    const textoU = texto.value.toUpperCase();

    //Cortamos cada espacio
    textoU.split("")

    //C
    
        
    //Replace para lo repetido,

}


contarP.addEventListener("click", () => { 
    //Llamamos la función
    reglas()
});

//borrar
borrar.addEventListener("click", () => {
    texto.value = "";
    respuesta.textContent = "";
});