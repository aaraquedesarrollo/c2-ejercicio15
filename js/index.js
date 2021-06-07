import { mataPersonajes, getPersonajes } from "./funciones.js";

let personajes;

const clonarElemento = (clase) => {
  const elemento = document.querySelector(`.${clase}`).cloneNode(true);
  elemento.classList.remove(`${clase}`);
  return elemento;
};

//añadir evento a Carga personajes
const eventoCargarPersonajes = () => {
  const botonCargarPersonajes = document.querySelector(".cargar-personajes");
  botonCargarPersonajes.addEventListener("click", async () => {
    personajes = await getPersonajes();
    printarPersonajes(personajes);
  });
};

//añadir evento matar familia
const eventoMatarFamlia = () => {
  const botonMatarFamilia = document.querySelector(".matar-familia");
  botonMatarFamilia.addEventListener("click", () => {
    const elementoInputFamilia = document.querySelector(".familia");
    matarFamilia(elementoInputFamilia.value);
  });
};

const borrarPersonajes = (elementoPadre) => {
  while (elementoPadre.childElementCount > 1) {
    elementoPadre.removeChild(elementoPadre.lastChild);
  }
};

//printar los personjaes en la lista
const printarPersonajes = (arrayPersonajes) => {
  //obtenemos los elementos del html
  const listaPersonajes = document.querySelector(".personajes");
  const elementoPersonaje = clonarElemento("personaje-dummy");

  borrarPersonajes(listaPersonajes);

  for (const personaje of arrayPersonajes) {
    const elementoPersonajeNombre = elementoPersonaje.querySelector(".nombre");
    const elementoPersonajeEstado = elementoPersonaje.querySelector(".estado");

    elementoPersonajeNombre.textContent = `${personaje.nombre} ${personaje.familia}`;
    elementoPersonajeEstado.textContent = `(${
      personaje.vivo ? "vivo" : "muerto"
    })`;

    listaPersonajes.append(elementoPersonaje.cloneNode(true));
  }
  console.log(personajes);
};

const matarFamilia = async (nombreFamilia) => {
  const elementoMensaje = document.querySelector(".mensaje");
  try {
    personajes = await mataPersonajes(nombreFamilia);
    printarPersonajes(personajes);
  } catch (error) {
    elementoMensaje.textContent = error.message;
  }
};

eventoCargarPersonajes();
eventoMatarFamlia();
