import { saludar, despedir, estadosistema, sumar, healthcheck, factorial } from "../src/app.js";

function ejecutarpruebas() {
    let pasado = 0;
    let fallidas = 0;

    // Test 1: Saludar
    const r1 = saludar("hamilton");
    if (r1.includes("hamilton")) {
        console.log(" Test 1 pasado: función saludar es correcta");
        pasado++;
    } else {
        console.log("❌ Test 1 fallido:", r1);
        fallidas++;
    }

    // Test 2: Estado del sistema
    const actualestado = estadosistema();
    if (actualestado && actualestado.estado === "activo") {
        console.log("✅ Test 2 pasado: estadosistema()");
        pasado++;
    } else {
        console.log("❌ Test 2 fallido:", actualestado ? actualestado.estado : "null");
        fallidas++;
    }

    // Test 3: Sumar
    const resultadoSuma = sumar(5, 10);
    if (resultadoSuma === 15) {
        console.log("✅ Test 3 pasó: sumar(5, 10) es 15");
        pasado++;
    } else {
        console.log("❌ Test 3 fallido: se esperaba 15 pero dio " + resultadoSuma);
        fallidas++;
    }

    // Test 4: Healthcheck (Corregido para evitar crash si es null)
    const health = healthcheck();
    if (health && health.status === 'ok') {
        console.log('✅ Test 4: healthcheck pasado');
        pasado++;
    } else {
        console.log('❌ Test 4: healthcheck fallido (se recibió null u objeto incorrecto)');
        fallidas++;
    }

    // Test 5: Factorial (¡Añadido!)
    const fact5 = factorial(5);
    if (fact5 === 120) {
        console.log("✅ Test 5 pasado: factorial(5) es 120");
        pasado++;
    } else {
        console.log("❌ Test 5 fallido: factorial(5) dio " + fact5);
        fallidas++;
    }

    console.log(`\n--- RESULTADOS ---`);
    console.log(`Pasados: ${pasado} | Fallidos: ${fallidas}`);

    if (fallidas > 0) {
        console.log("\n Pruebas fallidas. Revisa el código.");
        process.exit(1);
    } else {
        console.log("\n ¡Todas las pruebas pasaron con éxito");
    }
}

ejecutarpruebas();