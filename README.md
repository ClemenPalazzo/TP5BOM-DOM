# Proyecto TP5 BOM & DOM

Este proyecto contiene una serie de ejercicios que ilustran diferentes funcionalidades implementadas con **JavaScript**, **HTML**, **Bootstrap** y **CSS**..

## Índice

1. [Juego de Adivinar el Número](#1-juego-de-adivinar-el-número)
2. [Clase Persona](#2-clase-persona)
3. [Lista de Tareas](#3-lista-de-tareas)
4. [Reloj en Tiempo Real](#4-reloj-en-tiempo-real)
5. [Cronómetro](#5-cronómetro)
6. [Temporizador Personalizado](#6-temporizador-personalizado)
7. [Cómo Ejecutar](#cómo-ejecutar)
8. [Requisitos Previos](#requisitos-previos)
9. [Tecnologías Usadas](#tecnologías-usadas)

---

## 1. Juego de Adivinar el Número

### Descripción
Este ejercicio implementa un juego en el que el usuario debe adivinar un número generado aleatoriamente por la computadora. El juego proporciona pistas si el número ingresado es mayor o menor al número correcto.

### Funcionalidad
- **Generar Número Aleatorio:** Se genera un número aleatorio cuando se hace clic en "Comenzar el Juego".
- **Adivinar el Número:** El usuario ingresa un número e intenta adivinar el número generado. El juego proporciona retroalimentación sobre si el número es mayor, menor o igual al número generado.
- **Mensajes de Retroalimentación:** Se utilizan alertas para informar al usuario si ha adivinado correctamente o si debe seguir intentando.

### Uso de DOM y BOM
- **DOM:** Se utiliza para capturar la entrada del usuario y actualizar el estado del juego en la página.
- **BOM:** Se utilizan alertas (`window.alert`) para proporcionar retroalimentación sobre los intentos del usuario.

### Archivos Relacionados
- `index.html`: Estructura HTML del juego.
- `styles.css`: Estilos para el juego.
- `script.js`: Lógica de JavaScript para manejar la generación de números y las interacciones del usuario.

---

## 2. Clase Persona

### Descripción
Este ejercicio implementa una clase `Persona` que permite crear objetos con propiedades como nombre, edad, sexo, etc., y métodos para mostrar la generación a la que pertenece la persona, verificar si es mayor de edad, y mostrar todos sus datos.

### Funcionalidad
- **Crear Persona:** El usuario puede ingresar los datos de una persona a través de un formulario.
- **Mostrar Generación:** Basado en el año de nacimiento, se determina la generación a la que pertenece la persona y se muestra un mensaje con el rasgo característico de esa generación.
- **Es Mayor de Edad:** Verifica si la persona es mayor de edad según su edad.
- **Mostrar Datos:** Muestra toda la información de la persona.

### Uso de DOM y BOM
- **DOM:** Se utiliza para capturar los datos ingresados por el usuario en el formulario y mostrar la información generada por los métodos de la clase `Persona`.
- **BOM:** Se utilizan alertas (`window.alert`) para mostrar la información al usuario.

### Archivos Relacionados
- `index.html`: Estructura HTML para crear y manipular objetos `Persona`.
- `styles.css`: Estilos para la interfaz de creación de personas.
- `script.js`: Lógica de JavaScript que define la clase `Persona` y maneja las interacciones del usuario.

---

## 3. Lista de Tareas

### Descripción
Este ejercicio implementa una aplicación de lista de tareas que permite al usuario agregar y eliminar tareas de una lista.

### Funcionalidad
- **Agregar Tarea:** El usuario ingresa una tarea en un campo de texto y hace clic en "Agregar". La tarea se añade a una lista desplegada en la página.
- **Eliminar Tarea:** Cada tarea tiene un botón "Eliminar" que permite al usuario eliminarla de la lista.

### Uso de DOM y BOM
- **DOM:** Se utiliza para manipular el DOM añadiendo elementos a la lista y eliminándolos cuando se hace clic en el botón "Eliminar".
- **BOM:** Se utiliza `window.confirm` para confirmar la eliminación de una tarea, y `window.alert` para notificar al usuario sobre acciones realizadas.

### Archivos Relacionados
- `index.html`: Estructura HTML de la lista de tareas.
- `styles.css`: Estilos para la lista de tareas.
- `script.js`: Lógica de JavaScript para agregar y eliminar tareas.

---

## 4. Reloj en Tiempo Real

### Descripción
Este ejercicio implementa un reloj en tiempo real que muestra la hora y la fecha actualizadas cada segundo.

### Funcionalidad
- **Hora y Fecha:** Se muestra la hora en formato de 12 horas (AM/PM) y la fecha en un formato completo (día de la semana, día, mes, año).
- **Actualización en Tiempo Real:** El reloj se actualiza cada segundo para reflejar la hora y fecha actuales.

### Uso de DOM y BOM
- **DOM:** Se utiliza para actualizar dinámicamente los elementos HTML que muestran la hora y la fecha.
- **BOM:** Se utiliza `setInterval` para actualizar la hora y la fecha cada segundo.

### Archivos Relacionados
- `index.html`: Estructura HTML del reloj.
- `styles.css`: Estilos para el reloj, incluyendo un fondo con degradado.
- `script.js`: Lógica de JavaScript para actualizar la hora y la fecha en tiempo real.

---

## 5. Cronómetro

### Descripción
Este ejercicio implementa un cronómetro que puede ser iniciado, pausado y reseteado.

### Funcionalidad
- **Iniciar:** Comienza a contar el tiempo desde cero y lo muestra en formato `00:00:00` (horas:minutos:segundos).
- **Pausar:** Detiene el conteo del cronómetro sin reiniciar el tiempo.
- **Reset:** Restablece el cronómetro a `00:00:00` y detiene el conteo.

### Uso de DOM y BOM
- **DOM:** Se utiliza para mostrar el tiempo transcurrido en el cronómetro.
- **BOM:** Se utiliza `setInterval` para incrementar el tiempo cada segundo cuando el cronómetro está activo, y `clearInterval` para detenerlo.

### Archivos Relacionados
- `index.html`: Estructura HTML del cronómetro.
- `styles.css`: Estilos para el cronómetro, con un diseño claro y centrado.
- `script.js`: Lógica de JavaScript para manejar las operaciones del cronómetro.

---

## 6. Temporizador Personalizado

### Descripción
Este ejercicio implementa un temporizador que permite al usuario ingresar un tiempo inicial desde donde el temporizador comenzará a decrementar.

### Funcionalidad
- **Iniciar:** Comienza a decrementar el tiempo desde el valor ingresado por el usuario.
- **Pausar:** Detiene el decremento del tiempo, permitiendo reanudarlo posteriormente.
- **Reset:** Restablece el temporizador a `00:00:00` y detiene el conteo.

### Uso de DOM y BOM
- **DOM:** Se utiliza para mostrar el tiempo restante en el temporizador.
- **BOM:** Se utiliza `setInterval` para decrementar el tiempo cada segundo cuando el temporizador está activo, y `clearInterval` para detenerlo.

### Archivos Relacionados
- `index.html`: Estructura HTML del temporizador.
- `styles.css`: Estilos para el temporizador, incluyendo un diseño limpio y moderno.
- `script.js`: Lógica de JavaScript para manejar las operaciones del temporizador.

---

## Cómo Ejecutar

Para ejecutar cualquiera de estos ejercicios, sigue estos pasos:

1. **Descarga los Archivos:**
   - Asegúrate de tener todos los archivos relacionados (`index.html`, `styles.css`, `script.js`) en la misma carpeta.

2. **Abrir en un Navegador:**
   - Abre el archivo `index.html` en tu navegador preferido para ver el ejercicio en acción.

3. **Interactuar:**
   - Sigue las instrucciones en pantalla para interactuar con cada aplicación.

## Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Edge, Safari).
- Conexión a internet (para cargar los estilos de Bootstrap si no están descargados localmente).

## Tecnologías Usadas

- **HTML:** Estructura de las páginas web.
- **CSS:** Estilos y diseño de las aplicaciones.
- **JavaScript:** Lógica para manejar la interactividad, el tiempo real y la manipulación del DOM.

---

Este proyecto es una excelente demostración de cómo combinar **HTML**, **CSS**, y **JavaScript** para crear aplicaciones web interactivas y funcionales. ¡Espero que disfrutes explorando y trabajando con estos ejercicios! 🚀
