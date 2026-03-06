import axios from 'axios';

// Creamos una instancia de Axios con una configuración base
const clienteAxios = axios.create({
    // Esta es la URL de nuestro backend.
    baseURL: 'http://localhost:8080/api'
});

export default clienteAxios;