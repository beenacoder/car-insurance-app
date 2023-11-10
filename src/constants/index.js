export const BRANDS = [
        {id: 1, name: "Segmento A"},
        {id: 2, name: "Segmento B"},
        {id: 3, name: "Segmento C"},
]

//Obtener listado de los últimos 20 años
const LASTYEAR = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (value, index) => LASTYEAR - index);

export const PLANS = [
        {id: 1, name: "Básico"},
        {id: 2, name: "Full"},
]