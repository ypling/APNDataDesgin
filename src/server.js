/**
 * Created by leonardli on 3/13/17.
 */
import express from 'express'
import graphqlHTTP from 'express-graphql';
import {root, schema} from './schema';

const app = express();
app.use(graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(process.env.PORT || 5000, () => console.log('Now browse to localhost:5000/'));
