import { generarNombres,generarString } from "./utils/StringGenerator"

export const USERNAMESARRAY = generarNombres(20)
export const RANDOMMESSAGE = (longitud) => generarString(longitud)