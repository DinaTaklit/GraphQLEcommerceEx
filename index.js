import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import { products, categories } from "./db";

const resolvers = {
  Query: {
    helloWorld: () => "Hello World",
    categories: () => categories,
    category: (parent, { id }, context) =>
      categories.find((category) => category.id === id),
    products: () => products,
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
  },
  Category: {
    products: ({ id: categoryId }, args, context) =>
      products.filter((product) => product.categoryId === categoryId),
  },
  Product: {
    category: ({ categoryId }, args, context) =>
      categories.find((category) => category.id === categoryId),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server listening at: ${url}`);
