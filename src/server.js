/**
 * Created by leonardli on 3/13/17.
 */
import express from 'express';

const app = express();

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));