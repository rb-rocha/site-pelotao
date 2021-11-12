import dotenv from 'dotenv';
import { getAllChampions } from '../controllers/championController';
import { getMasteries, getSummoner } from '../controllers/summonerController'

dotenv.config();

interface INickSearch {
    nickname: String
}
const router = {
    getSummoner: async ({ nickname: nick }: INickSearch) => {
        return await getSummoner({ nickname: nick })
    },
    getMasteries: async ({ nickname: nick }: INickSearch) => {
        return await getMasteries({ nickname: nick })
    },
    getAllChampions: async () => {
        return await getAllChampions()
    }
}

export default router;