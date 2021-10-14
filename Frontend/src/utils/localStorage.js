/**Esta funcion recibe un objeto con las propiedades {key, value} */
export function guardarEnLocalStorage(objeto) {
    const datosJson = JSON.stringify(objeto.value); // Convertir datos al formato JSON.
    localStorage.setItem(objeto.key, datosJson); // Guardar en localStorage.
}

export function leerDeLocalStorage(key) {
    const json = localStorage.getItem(key);
    const dato = JSON.parse(json);
    return dato;
}
