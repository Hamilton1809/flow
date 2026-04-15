# 🚀 Proyecto CodeRider - Lógica y Testing

![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![Git Flow](https://img.shields.io/badge/workflow-Git%20Flow-blue?style=flat-square)
![Tests](https://img.shields.io/badge/tests-5%20passed-success?style=flat-square)

Este repositorio contiene una suite de utilidades lógicas (incluyendo cálculo de factorial) y un sistema de pruebas manuales, siguiendo la metodología de **Git Flow** y estándares de **Conventional Commits**.

---

## 🛠 Funcionalidades
El archivo `app.js` incluye las siguientes funciones exportadas:
* **Saludar:** Genera un saludo personalizado.
* **Sumar:** Operación aritmética básica.
* **Factorial:** Cálculo recursivo de factoriales.
* **Estado del Sistema:** Retorna el estado actual y versión del software.
* **Healthcheck:** Monitoreo de disponibilidad.

---

## 🧪 Pruebas Unitarias
He implementado un "Test Runner" manual en `test.js` para validar la integridad del código sin dependencias externas.

### Cómo ejecutar los tests:
Asegúrate de tener [Node.js](https://nodejs.org/) instalado y ejecuta en tu terminal:

```bash
node test.js