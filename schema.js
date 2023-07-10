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
  category: Category!
}

type Category{
  id: ID!
  name: String!
  products: [Product!]!
}

`;

export default typeDefs;
