/**
 * Created by leonardli on 3/3/17.
 */

import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type Query {
    candidate: Candidate
    job: Job
  }
  
  type Candidate{
    id: ID!
    name: String
    memberId : ID
  }
  
  type Job{
    id: ID!
    name: String
  }
`);

export const root = {};