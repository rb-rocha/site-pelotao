import dragonApi from '../services/dragon';

interface IChampionDTO {
    champion: IDataChampion[]
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
    let result: IDataChampion[] = []
    let champions: IDataChampion[] = []
    let champ: IDataChampion = []
    await dragonApi.get<IDataChampion[]>('11.22.1/data/pt_BR/champion.json')
        .then(response => {
            result = response.data;
        })

    result.forEach((champion: IDataChampion) => {
        champ = {
            version: champion.version,
            id: champion.id,
            key: champion.key,
            name: champion.key,
            title: champion.title,
            blurb: champion.blurb
        }
        champions.push(champ)
    })
    console.log(champions)
    return champions;
}

/* const getChampion = (idChampion : Number)=> {

    dragonApi.get<IChampionDTO[]>()

} */

export {
    getAllChampions
}