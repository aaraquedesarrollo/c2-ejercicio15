# Ejercicio - Asincronía

En este proyecto tienes dos módulos JS, uno con un array de personajes de Juego de Tronos y otro con un par de funciones. Crea un `index.js` que será el punto de entrada y que consumirá las funciones de `funciones.js`.

1. Vacía la lista de personajes del HTML y deja el `li` molde.
2. Programa la interfaz para que cuando el usuario haga clic en "Carga personajes", se llame a la función `getPersonajes`. Esta función devuelve una promesa, que resuelve al valor pedido 1 segundo después de llamarla.
3. El usuario debe poder introducir un nombre de familia en el input, y al pulsar en "Matar familia" debe llamar a la función `mataPersonajes` pasándole la familia introducida. Esta función devuelve una promesa que resuelve a un nuevo array de personajes 1 segundo después.
4. Si la familia no existe, la función `mataPersonajes` devuelve un error. Captura el error e imprime el mensaje en el elemento con clase `mensaje`.
