import { personajes } from "./personajes.js";

export const getPersonajes = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(personajes);
    }, 1000);
  });

export const mataPersonajes = (familia) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const hay = personajes.some(
        (personaje) => personaje.familia.toLowerCase() === familia.toLowerCase()
      );
      if (!hay) {
        reject(new Error(`No hay personajes de la familia ${familia}`));
      }
      resolve(
        personajes.map((personaje) => {
          if (personaje.familia.toLowerCase() === familia.toLowerCase()) {
            return { ...personaje, vivo: false };
          } else {
            return personaje;
          }
        })
      );
    }, 1000);
  });
