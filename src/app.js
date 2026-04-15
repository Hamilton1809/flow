export function saludar(nombre) {
    // Añadí espacio después de "hola" y antes de "bienvenido"
    return "hola " + nombre + ", bienvenido coderider"; 
}

export function despedir(nombre) {
    return "hasta pronto, " + nombre + "! coderider";
}

export function estadosistema() {
    return {
        estado: "activo",
        version: "1.0.0",
        mensaje: "sistema coderrider funcionando"
    };
}

export function sumar(a, b) {
    return a + b;
}

export function healthcheck() {
    return { status: 'ok' };

}

/**
 
 * @param {number} n 
 * @returns {number}
 */


// src/app.js - ERROR PROVOCADO
export function factorial(n) {
  if (n < 0) return undefined;
  // Borramos el caso base del 1 para que falle o sea infinito
  return n * factorial(n - 1); 
}

