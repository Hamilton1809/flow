import { version } from "react";

export function saludar(nombre){
return "hola" + nombre + ", bienvendio coderider";
}

export function despedir(nombre){
return "hasta pronto, "+ nombre + "!coderider";
}

export function estadosistema(){
return {
estado: "activo",
version: "1.0.0",
mensaje: "sistema coderrider funcionando"
 };
}
 

export function sumar(a, b) {
    return a + b;
}

export function healthcheck(){
    return {
        status:'ok',
        timestamp: new Date().toISOString(),
        servicio: 'StreamFlow API',
        version: '1.0.0'
    };
}
