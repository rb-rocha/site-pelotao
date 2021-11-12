import dragonApi from '../services/dragon';
import fs from 'fs';

interface IChampionDTO {
    type: String,
    format: String,
    version: String,
    data: IDataChampion[]
}
interface IDataChampion {
    version: String,
    id: String,
    key: String,
    name: String,
    title: String,
    blurb: String
}

const getAllChampions = async () => {
    let result: IDataChampion[] | String[] = []
    let champions: IDataChampion[] = []

    await dragonApi.get<IChampionDTO>('11.22.1/data/pt_BR/champion.json')
        .then(response => {
            result = (response.data.data)
        })

    /*     fs.appendFile('result.txt', JSON.stringify(result), error => {
            if (error) throw error;
        }) */

}

/* const getChampion = (idChampion : Number)=> {

    dragonApi.get<IChampionDTO[]>()

} */

export {
    getAllChampions
}