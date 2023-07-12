const typeDefs = `#graphql

type Query{
    helloWorld: String
    categories: [Category!]!
    category(id:ID!): Category
    products(filter: productFilterInput): [Product!]!
    product(id:ID!): Product
}

type Mutation {
  addCategory(input: addCategoryInput!): Category!
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
  products(filter: productFilterInput): [Product!]!
}

type Review {
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
}

input productFilterInput {
  onSale: Boolean
  avgRating: Int
}

input addCategoryInput {
  name: String!
}
`;

export default typeDefs;
