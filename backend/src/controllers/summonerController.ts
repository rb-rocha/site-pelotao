// Get in RIOT API the user information
import dotenv from 'dotenv';
import api from '../services/api'
import { getChampion } from './championController';

dotenv.config();

const {
    RIOT_API_KEY,
} = process.env;

let summoner: ISummoner;

const getSummoner = async (nickSearch: INickSearch) => {

    await api.get<ISummoner>(`summoner/v4/summoners/by-name/${nickSearch.nickname}?api_key=${RIOT_API_KEY}`)
        .then(response => {
            summoner = {
                id: response.data.id,
                accountId: response.data.accountId,
                puuid: response.data.puuid,
                name: response.data.name,
                profileIconId: `https://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${response.data.profileIconId}.png`,
                revisionDate: response.data.revisionDate,
                summonerLevel: response.data.summonerLevel
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    return summoner
}

const getMasteries = async ({ nickname: nick }: INickSearch) => {
    summoner = await getSummoner({ nickname: nick });
    let masteries: Array<any> = [];
    let result: IChampionMastery | string[] = []
    await api.get<IChampionMastery>(`champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}?api_key=${RIOT_API_KEY}`)
        .then(response => {
            result = response.data;
        })
    result.forEach((mastery: any) => {
        if (mastery.championLevel >= 6 && masteries.length <= 2) {
            let tempMastery: IChampionMastery = {
                championId: mastery.championId,
                championData: getChampion({ championKey: mastery.championId }),
                championLevel: mastery.championLevel,
                championPoints: mastery.championPoints,
                lastPlayTime: mastery.lastPlayTime,
            }
            masteries.push(tempMastery)
        }
    })

    return masteries;
}

export {
    getSummoner,
    getMasteries
}