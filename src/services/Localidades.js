import axios from 'axios';

const pais = "http://localhost:3302/api/pais/"
const estado = "http://localhost:3302/api/estado/"
const municipio = "http://localhost:3302/api/municipio/"

const consultarPais = async (search = "") => {
    const result = await axios.get( pais + search )
    return result.data
}

const consultarEstado = async (idPais, search = "") => {
    const result = await axios.get(estado + idPais + "?search=" + search)
    return result.data
}

const consultarMunicipio = async (idEstado, search = "") => {
    const result = await axios.get(municipio + idEstado + "?search=" + search )
    return result.data
}

export { 
    consultarPais,
    consultarEstado,
    consultarMunicipio
};
