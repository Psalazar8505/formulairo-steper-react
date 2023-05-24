export const validarDireccion = (direccion) => {
    return (direccion.length >= 4) ? true : false
}
export const validarCiudad = (city) => {
    return (city.length >= 4) ? true : false
}
export const validarProvincia = (province) => {
    return (province.length >= 4) ? true : false
}
