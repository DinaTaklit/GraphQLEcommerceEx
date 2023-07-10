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
  reviews: [Review!]!
}

type Category{
  id: ID!
  name: String!
  products: [Product!]!
}

type Review {
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
}
`;

export default typeDefs;