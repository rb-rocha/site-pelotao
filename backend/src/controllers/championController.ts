import dragonApi from '../services/dragon';
import { Champions } from '../models/champions';

const getChampion = async ({ championKey: key }: IChampionKey) => {
    let champion: IDataChampion | any = []
    let championName: string | any = Champions[key].toLowerCase()
    let result: IChampionDTO | any = []

    if (championName.indexOf('_') != -1) {
        let nextLetter = championName.charAt((championName.indexOf('_') + 1))
        championName = championName.replace(nextLetter, nextLetter.toUpperCase());
        championName = championName.replace("_", "");
        console.log(championName)
    }

    console.log(championName.indexOf('_'))

    championName = championName.charAt(0).toUpperCase() + championName.slice(1)

    await dragonApi.get<IChampionDTO>(`11.22.1/data/pt_BR/champion/${championName}.json`)
        .then(response => {
            result = response.data
            champion = {
                id: response.data.data[championName].id,
                key: response.data.data[championName].key,
                name: response.data.data[championName].name,
                title: response.data.data[championName].title,
                image: {
                    full: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${response.data.data[championName].image.full}`
                },
                lore: response.data.data[championName].lore
            }
        })
    return champion
}

export {
    getChampion
}