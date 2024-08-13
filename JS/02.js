class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    let generacion;
    let rasgo;

    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Desconocida";
      rasgo = "Desconocido";
    }

    return `Perteneces a la ${generacion}. Rasgo característico: ${rasgo}.`;
  }

  esMayorDeEdad() {
    return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
  }

  mostrarDatos() {
    return `
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            DNI: ${this.dni}
            Sexo: ${this.sexo === "H" ? "Hombre" : "Mujer"}
            Peso: ${this.peso} kg
            Altura: ${this.altura} m
            Año de Nacimiento: ${this.añoNacimiento}
        `;
  }
}

let persona;

document
  .getElementById("personaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const añoNacimiento = parseInt(
      document.getElementById("añoNacimiento").value
    );

    persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);
    mostrarResultado("Persona creada correctamente.", "success");
  });

document.getElementById("btnGeneracion").addEventListener("click", function () {
  if (persona) {
    mostrarResultado(persona.mostrarGeneracion(), "info");
  } else {
    mostrarResultado("Por favor, crea primero una persona.", "warning");
  }
});

document
  .getElementById("btnMayorDeEdad")
  .addEventListener("click", function () {
    if (persona) {
      mostrarResultado(persona.esMayorDeEdad(), "warning");
    } else {
      mostrarResultado("Por favor, crea primero una persona.", "warning");
    }
  });

document
  .getElementById("btnMostrarDatos")
  .addEventListener("click", function () {
    if (persona) {
      mostrarResultado(persona.mostrarDatos(), "success");
    } else {
      mostrarResultado("Por favor, crea primero una persona.", "warning");
    }
  });

document.getElementById("btnOpenWindow").addEventListener("click", function () {
  window.open("https://www.example.com", "_blank", "width=800,height=600");
});

function mostrarResultado(mensaje, tipo) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje.replace(
    /\n/g,
    "<br>"
  )}</div>`;
}
