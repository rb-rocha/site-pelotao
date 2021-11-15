import dragonApi from '../services/dragon';
import { Champions } from '../models/champions';
import errorHandler from '../errors';

const getChampion = async ({ championKey: key }: IChampionKey) => {

    let champion: IDataChampion | any = []
    let result: IChampionDTO | any = []
    let championName = formatChampionName(Champions[key]);

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
            console.log(championName);
            
        })
        .catch(error => {
            let code: number = error.response.status;            
            errorHandler('champion', code, error);
        })
    return champion
}

export {
    getChampion
}

const formatChampionName = (key: string) => {
    if (key != undefined) {

        let championName: string | any = key.toLowerCase()
    
        if (championName.indexOf('_') != -1) {
            let nextLetter = championName.charAt((championName.indexOf('_') + 1))
            championName = championName.replace(nextLetter, nextLetter.toUpperCase());
            championName = championName.replace("_", "");
            console.log(championName)
        }
    
        console.log(championName.indexOf('_'))
    
        championName = championName.charAt(0).toUpperCase() + championName.slice(1)
    
        return championName;
    } else {
        let championName: undefined = undefined;
        return championName;
    }
    
}