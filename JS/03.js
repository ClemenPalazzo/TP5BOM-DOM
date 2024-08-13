
const tareaInput = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
  const tareaTexto = tareaInput.value.trim();

  if (tareaTexto !== "") {
    if (window.confirm("¿Deseas agregar esta tarea?")) {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
                ${tareaTexto}
                <button class="btn btn-danger btn-sm">Eliminar</button>
            `;

      listaTareas.appendChild(li);

      tareaInput.value = "";

      li.querySelector("button").addEventListener("click", function () {
        if (
          window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")
        ) {
          listaTareas.removeChild(li);
          window.alert("Tarea eliminada con éxito.");
        }
      });
    }
  } else {
    window.alert("Por favor, ingresa una tarea válida.");
  }
}

btnAgregar.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
