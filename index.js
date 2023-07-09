import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Query{
    helloWorld: String
    myName: String
}
`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello World",
    myName: () => "Dina TAKLIT",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server listening at: ${url}`);
