/**
 * Created by leonardli on 3/3/17.
 */

import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export const root = {hello: () => 'Hello world!'};