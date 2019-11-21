import { ApolloServer } from 'apollo-server';

import * as resolvers from './resolvers';
import typeDefs from './schema.graphql';

const server = new ApolloServer({
  mocks: true,
  mockEntireSchema: false,
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
