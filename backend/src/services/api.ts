import axios from 'axios';

const api = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/'
})

export default api;