import {saludar, despedir, estadosistema} from "../src/app.js"

function ejecutarpruebas() {
let pasado =0;
let fallidas = 0;

const r1 = saludar("hamilton")
if (r1.includes("hamilton")){
console.log ("test 1 paso: funcion saludar es correcta")
pasado++;
} else {
console.log("test 1 fallido:", r1 );
fallidas++;
}

const actualestado = estadosistema();
if (actualestado.estado === "activo"){
console.log ("test 2: estadosistema()");
pasado++;
}else{
console.log("test 2: fallido", estado, "en hamilton");
fallidas++;
}
console.log ("\nresultados: " + pasado +"pasado, ", + fallidas + "fallidas");
if(fallidas>0) process.exit(1);
pruebas();
}
ejecutarpruebas();
