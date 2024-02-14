// Lista de nombres comunes para generar nombres de usuario
const nombresComunes = [
    "usuario1", "usuario2", "usuario3", "usuario4", "usuario5", "usuario6", "usuario7", "usuario8", "usuario9", "usuario10", 
    "usuario11", "usuario12", "usuario13", "usuario14", "usuario15", "usuario16", "usuario17", "usuario18", "usuario19", "usuario20",
    "juan", "maria", "pedro", "ana", "luis", "carla", "javier", "sofia", "pablo", "laura",
    "alberto", "roberto", "carolina", "jose", "daniel", "rosa", "sergio", "natalia", "clara", "david",
    "rafael", "miguel", "lucia", "emilio", "oscar", "andrea", "marta", "victor", "antonio", "jorge"
  ];
  
  // Lista de palabras comunes para generar mensajes
  const palabrasComunes = [
    "hola", "bienvenido", "feliz", "día", "gracias", "amigo", "genial", "adiós", "familia", "fiesta", 
    "alegría", "éxito", "salud", "amor", "paz", "sueños", "sonrisa", "viaje", "vida", "momento",
    "verano", "playa", "casa", "comida", "trabajo", "amigos", "fútbol", "musica", "libro", "cine",
    "viajar", "naturaleza", "deporte", "familia", "amor", "pasión", "felicidad", "sonrisa", "amistad", "caminar",
    "reunión", "alegría", "belleza", "paseo", "mar", "montaña", "ciudad", "compartir", "bailar", "sonar",
    "y", "o", "pero", "porque", "así", "entonces", "sin embargo", "además", "por eso", "mientras",
    "ahora", "siempre", "nunca", "tal vez", "quizás", "seguro", "por supuesto", "claro", "bueno", "excelente",
    "de", "la", "el", "los", "las", "un", "una", "unos", "unas", "para",
    "con", "sin", "sobre", "entre", "hacia", "desde", "a", "ante", "bajo",
    "durante", "tras", "según", "como", "al", "cada", "todo", "mucho", "más", "menos",
    "me", "te", "nos", "os", "se", "mi", "tu", "nuestro", "vuestro", "su",
    "yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas",
    "aquí", "ahí", "allí", "cerca", "lejos", "dentro", "fuera", "encima", "debajo",
    "primero", "segundo", "tercero", "último", "próximo", "anterior", "mismo", "otro", "cualquier", "alguno",
    "mucho", "poco", "más", "menos", "tanto", "tan", "bastante", "demasiado", "casi", "apenas",
    "así", "así que", "por eso", "por lo tanto", "además", "aunque", "si", "no", "sí", "tal vez"
  ];
  
  // Función para generar nombres de usuario
  export function generarNombre() {
    const indice = generarRandomNumberEntre0YMax(nombresComunes.length);
    return nombresComunes[indice];
  }
  
  // Función para generar mensajes
  export function generarRandomSentencia() {
    const longitud = generarRandomNumberEntre0YMax(8, 3);
    const sentencia = [];
  
    for (let i = 0; i < longitud; i++) {
      const indice = generarRandomNumberEntre0YMax(palabrasComunes.length);
      sentencia.push(palabrasComunes[indice]);
    }
  
    return sentencia.join(' ');
  }
  
  // Función para generar nombres de usuario aleatorios
  export function generarRandomUsers(longitud) {
    const usuarios = [];
  
    for (let i = 0; i < longitud; i++) {
      usuarios.push({ username: generarNombre(), message: generarRandomSentencia() });
    }
  
    return usuarios;
  }
  
  // Función para generar un solo usuario aleatorio
  export function generarRandomUser() {
    return { username: generarNombre(), message: generarRandomSentencia() };
  }
  
  // Función para generar un número aleatorio entre 0 y un máximo, opcionalmente sumándole un extra
  export function generarRandomNumberEntre0YMax(max, extra = 0) {
    return Math.floor(Math.random() * max) + extra;
  }
  