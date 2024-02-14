import { generarRandomSentencia, generarRandomUser, generarRandomUsers } from "./utils/StringGenerator";

export const USERNAMESARRAY = generarRandomUsers(20);
export const RANDOM_USER = () => generarRandomUser();
export const RANDOMMESSAGE = () => generarRandomSentencia();
