import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import router from './routes/route';

var schema = buildSchema(`
    type Query {
        getSummoner(nickname: String) : Summoner
        getMasteries(nickname: String) : [ChampionMastery]
        getAllChampions :  [IDataChampion]
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

    type Hi {
        teste: Int
        teste2: Int
    }

    type ChampionMastery {
        championId: Int,
        championLevel: Int,
        championPoints: Float,
        lastPlayTime: Float,
    }

    type IDataChampion {
        version: String,
        id: String,
        key: String,
        name: String,
        title: String,
        blurb: String
    }
`);
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: router,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));