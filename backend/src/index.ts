import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import router from './routes/route';

const schema = require('./schema/index.graphql');

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: router,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));