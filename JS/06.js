let tiempoRestante = 0;
let intervalo;
let pausado = true;

const tiempoInput = document.getElementById("tiempoInput");
const temporizadorDisplay = document.getElementById("temporizador");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnReset");

function actualizarTemporizador() {
  const horas = Math.floor(tiempoRestante / 3600)
    .toString()
    .padStart(2, "0");
  const minutos = Math.floor((tiempoRestante % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tiempoRestante % 60).toString().padStart(2, "0");
  temporizadorDisplay.textContent = `${horas}:${minutos}:${segundos}`;
}

function iniciarTemporizador() {
  if (pausado) {
    pausado = false;

    if (tiempoRestante === 0) {
      tiempoRestante = parseInt(tiempoInput.value) || 0;
      actualizarTemporizador();
    }

    intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarTemporizador();
      } else {
        pausarTemporizador();
        alert("¡Tiempo terminado!");
      }
    }, 1000);
  }
}

function pausarTemporizador() {
  pausado = true;
  clearInterval(intervalo);
}

function resetTemporizador() {
  pausado = true;
  clearInterval(intervalo);
  tiempoRestante = 0;
  tiempoInput.value = "";
  actualizarTemporizador();
}

btnIniciar.addEventListener("click", iniciarTemporizador);
btnPausar.addEventListener("click", pausarTemporizador);
btnReset.addEventListener("click", resetTemporizador);

actualizarTemporizador();
