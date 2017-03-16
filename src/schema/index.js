/**
 * Created by leonardli on 3/3/17.
 */

import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type Query {
    candidate: Candidate
    job: Job
  }
  
  interface Candidate{
    id: ID!
    name: String
    memberId : ID
    emails: [String]
    skills: [String]
    experiences: [Experience]
  }
 
  type LinkedInCandidate implements Candidate {
    id: ID!
    name: String
    memberId : ID
    emails: [String]
    skills: [String]
    experiences: [Experience]
    linkedInUrl: String
  }

  type DiceCandidate implements Candidate {
    id: ID!
    name: String
    memberId : ID
    emails: [String]
    skills: [String]
    experiences: [Experience]
    diceUrl: String
  }
  
  type Job{
    id: ID!
    name: String
  }
  
  type Experience{
    company: String
    date: String
    locality: String
    title: String
  }
`);

export const root = {};