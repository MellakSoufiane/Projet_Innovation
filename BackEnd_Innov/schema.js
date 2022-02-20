import { gql } from 'apollo-server-core'
const typeDefs = gql`
"A Video"
type Video {
  id: ID!
  "The video's title"
  title: String!
  "The video's description"
  description: String
  "The video's owner"
  owner: User!
  "The video's main illustration to display in video card or video page detail"
  thumbnail: String
  "The video's approximate length to complete, in minutes"
  length: Int
}
"Owner of a complete Video"
type User {
  id: ID!
  "User's first and last name"
  name: String!
  "User's email"
  email: String!
}

type Query {
  "Get video array for homepage grid"
  videosForHome: [Video!]!
}
`
export default typeDefs
