import { gql } from "@apollo/client";

export const typeDefs = gql `
type User {
    id: ID!
    name: String!
    email: String!
}
type Query {
    getUsers: [User!]!
    getUserByName(name:String!): User!
}
`;