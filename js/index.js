import { mataPersonajes, getPersonajes } from "./funciones.js";

const clonarElemento = (clase) => {
  const elemento = document.querySelector(`.${clase}`).cloneNode(true);
  elemento.classList.remove(`${clase}`);
  return elemento;
};

//añadir evento a Carga personajes
const eventoCargarPersonajes = () => {
  const botonCargarPersonajes = document.querySelector(".cargar-personajes");
  botonCargarPersonajes.addEventListener("click", (e) => {
    printarPersonajes();
  });
};

//printar los personjaes en la lista
const printarPersonajes = async () => {
  //obtenemos los elementos del html
  const listaPersonajes = document.querySelector(".personajes");
  const elementoPersonaje = clonarElemento("personaje-dummy");

  const personajes = await getPersonajes();

  for (const personaje of personajes) {
    const elementoPersonajeNombre = elementoPersonaje.querySelector(".nombre");
    const elementoPersonajeEstado = elementoPersonaje.querySelector(".estado");

    elementoPersonajeNombre.textContent = `${personaje.nombre} ${personaje.familia}`;
    elementoPersonajeEstado.textContent = `(${
      personaje.vivo ? "vivo" : "muerto"
    })`;

    listaPersonajes.append(elementoPersonaje.cloneNode(true));
  }
};

(() => {
  eventoCargarPersonajes();
})();
