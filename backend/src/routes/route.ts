import dotenv from 'dotenv';
import { getChampion } from '../controllers/championController';
import { getMasteries, getSummoner } from '../controllers/summonerController'

dotenv.config();

interface INickSearch {
    nickname: string
}

interface IChampionKey {
    championKey: number
}
const router = {
    getSummoner: async ({ nickname: nick }: INickSearch) => {
        return await getSummoner({ nickname: nick })
    },
    getMasteries: async ({ nickname: nick }: INickSearch) => {
        return await getMasteries({ nickname: nick })
    },
    getChampion: async ({ championKey: key }: IChampionKey) => {
        return await getChampion({ championKey: key })
    }
}

export default router;