import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    image: "imgage1",
    quantity: 230,
    price: 42.44,
    onSale: false,
  },
  {
    id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    name: "Salad Bowl",
    description: "Round wooden bowl perfect for tossing and making salads",
    quantity: 33,
    image: "imgage2",
    price: 53.5,
    onSale: false,
  },
  {
    id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
    name: "Spoon",
    description: "Small and delicate spoon",
    image: "imgage3",
    quantity: 4266,
    price: 1.33,
    onSale: true,
  },
];

const categories = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    name: "Kitchen",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    name: "Garden",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    name: "Sports",
  },
];

const typeDefs = `#graphql

type Query{
    helloWorld: String
    categories: [Category!]!
    products: [Product!]!
    product(id:ID!): Product
}

#Define a product type definition 
type Product{
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
}

type Category{
  id: ID!
  name: String!
}

`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello World",
    categories: () => categories,
    products: () => products,
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server listening at: ${url}`);
