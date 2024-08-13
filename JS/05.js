let tiempo = 0;
let intervalo;
let pausado = true;

const cronometroDisplay = document.getElementById("cronometro");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnReset");

function actualizarCronometro() {
  const horas = Math.floor(tiempo / 3600)
    .toString()
    .padStart(2, "0");
  const minutos = Math.floor((tiempo % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tiempo % 60).toString().padStart(2, "0");
  cronometroDisplay.textContent = `${horas}:${minutos}:${segundos}`;
}

function iniciarCronometro() {
  if (pausado) {
    pausado = false;
    intervalo = setInterval(() => {
      tiempo++;
      actualizarCronometro();
    }, 1000);
  }
}

function pausarCronometro() {
  pausado = true;
  clearInterval(intervalo);
}

function resetCronometro() {
  pausado = true;
  clearInterval(intervalo);
  tiempo = 0;
  actualizarCronometro();
}

btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", pausarCronometro);
btnReset.addEventListener("click", resetCronometro);

actualizarCronometro();
