import { GraphQLClient } from 'graphql-request'

// const endpoint = 'http://localhost:1337'
// const endpoint = 'https://api-ca-central-1.graphcms.com/v2/ckm6c4smd4vns01z5adbf7ft6/master'
const endpoint = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
