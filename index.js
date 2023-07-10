import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import Query from "./resolvers/Query";
import Category from "./resolvers/Category";
import Product from "./resolvers/Product";
import { categories, products, reviews } from "./db";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: () => ({
    categories,
    products,
    reviews,
  }),
});
console.log(`Server listening at: ${url}`);
