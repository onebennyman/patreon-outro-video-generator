export function generarNombres(numNombres) {
    const nombres = [];
    
    for (let i = 0; i < numNombres; i++) {
      const longitud = Math.floor(Math.random() * 13) + 3;
      nombres.push(generarString(longitud));
    }
    
    return nombres;
  }

export function generarString(longitud) {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
  let randomString = '';

  for (let j = 0; j < longitud; j++) {
    randomString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return randomString

}