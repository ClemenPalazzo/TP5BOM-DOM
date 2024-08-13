function actualizarReloj() {
  const ahora = new Date();

  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaFormateada = ahora.toLocaleDateString("es-ES", opcionesFecha);

  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");
  const ampm = horas >= 12 ? "PM" : "AM";
  horas = horas % 12;
  horas = horas ? horas : 12;

  document.getElementById("fecha").textContent = fechaFormateada;
  document.getElementById("hora").innerHTML = `${horas
    .toString()
    .padStart(
      2,
      "0"
    )} : ${minutos} : ${segundos} <span style="font-size: 2rem;">${ampm}</span>`;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
