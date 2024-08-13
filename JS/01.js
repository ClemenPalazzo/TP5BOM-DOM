let numeroMagico;
let historial = [];

document.getElementById("btnComenzar").addEventListener("click", function () {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  console.log("Número mágico generado:", numeroMagico);

  document.getElementById("gameArea").classList.remove("d-none");
  document.getElementById("messageArea").innerText = "";
  historial = [];
  actualizarHistorial();
});

document.getElementById("btnEnviar").addEventListener("click", function () {
  const numeroUsuario = parseInt(document.getElementById("inputNumero").value);

  if (isNaN(numeroUsuario)) {
    mostrarMensaje("Por favor, ingresa un número válido.", "danger");
    return;
  }

  historial.push(numeroUsuario);
  actualizarHistorial();

  if (numeroUsuario === numeroMagico) {
    mostrarMensaje("¡Felicidades! Adivinaste el número mágico.", "success");

    if (window.confirm("¿Quieres jugar de nuevo?")) {
      numeroMagico = Math.floor(Math.random() * 100) + 1;
      console.log("Nuevo número mágico generado:", numeroMagico);
      historial = [];
      actualizarHistorial();
      mostrarMensaje("", "");
    } else {
      mostrarMensaje("¡Gracias por jugar!", "info");
    }
  } else if (numeroUsuario > numeroMagico) {
    mostrarMensaje(
      "El número que ingresaste es mayor al número mágico.",
      "warning"
    );
  } else {
    mostrarMensaje(
      "El número que ingresaste es menor al número mágico.",
      "warning"
    );
  }
});

function mostrarMensaje(mensaje, tipo) {
  const messageArea = document.getElementById("messageArea");
  messageArea.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
}

function actualizarHistorial() {
  const historialArea = document.getElementById("historialArea");
  historialArea.innerHTML = `<h3>Historial de Intentos:</h3><ul class="list-group">${historial
    .map((num) => `<li class="list-group-item">${num}</li>`)
    .join("")}</ul>`;
}
