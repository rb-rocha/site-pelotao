import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import router from './routes/route';

var schema = buildSchema(`
    type Query {
        getSummoner(nickname: String) : Summoner
        getMasteries(nickname: String) : [ChampionMastery]
        getAllChampions :  [IDataChampion]
        getChampion(championKey : Int) : IDataChampion
    }
    type Summoner {
        id : String
        accountId : String
        puuid : String
        name : String
        profileIconId : String
        revisionDate : Float
        summonerLevel : Int
    }

    type ChampionMastery {
        championId: Int,
        championLevel: Int,
        championData : IDataChampion,
        championPoints: Float,
        lastPlayTime: Float,
    }

    type IDataChampion {
        id: String,
        key: String,
        name: String,
        title: String,
        lore: String
        image: IChampionImage
    }

    type IChampionImage {
        full: String
    }
    
`);
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: router,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));