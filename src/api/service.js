import { instance } from "./axios";

export const getData = (url)=>instance.get(url)