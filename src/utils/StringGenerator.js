export function generarNombres(numNombres) {
  const nombres = [];

  for (let i = 0; i < numNombres; i++) {
    nombres.push(generarNombre());
  }

  return nombres;
}

export function generarRandomUsers(longitud) {
  return generarNombres(longitud).map((username) => ({ username, message: generarRandomSentencia() }));
}

export function generarRandomUser() {
  return {
    username: generarNombre(),
    message: generarRandomSentencia(),
  };
}

export function generarRandomSentencia() {
  const longitud =generarRandomNumberEntre0YMax(15, 5)
  const sentencia = []

  for (let i = 0; i <longitud; i++) {
    sentencia.push(generarString(generarRandomNumberEntre0YMax(10, 2)))
  }
  return sentencia.join(' ');

}

export function generarNombre() {
  const longitud = generarRandomNumberEntre0YMax(13, 3);
  return generarString(longitud);
}

export function generarRandomNumberEntre0YMax(max, extra = 0) {
  return Math.floor(Math.random() * max) + extra;
}

export function generarString(longitud) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
  let randomString = "";

  for (let j = 0; j < longitud; j++) {
    randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return randomString;
}
