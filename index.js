import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    quantity: 230,
    price: 42.44,
    image: "img-1",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    name: "Salad Bowl",
    description: "Round wooden bowl perfect for tossing and making salads",
    quantity: 33,
    price: 53.5,
    image: "img-2",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
    name: "Spoon",
    description: "Small and delicate spoon",
    quantity: 4266,
    price: 1.33,
    image: "img-3",
    onSale: true,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
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
    category(id:ID!): Category
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
  categoryId: ID!
}

type Category{
  id: ID!
  name: String!
  products: [Product!]!
}

`;

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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server listening at: ${url}`);
