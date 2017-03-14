/**
 * Created by leonardli on 3/13/17.
 */
import express from 'express';

const app = express();

app.listen(process.env.PORT || 5000, () => console.log('Now browse to localhost:4000/graphql'));
