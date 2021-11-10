import axios from 'axios';

const dragonApi = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/'
})

export default dragonApi;