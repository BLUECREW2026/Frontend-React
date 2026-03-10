import axios from 'axios';

// Creamos una instancia de Axios con una configuración base
const baseURL = 'http://localhost:8080/api';
export const IMAGES_BASE_URL = 'http://localhost:8080/uploads/';

const clienteAxios = axios.create({
    // Esta es la URL de nuestro backend.
    baseURL: baseURL
});

export default clienteAxios;