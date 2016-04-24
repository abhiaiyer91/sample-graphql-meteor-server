const typeDefinitions = `
type Query {
 author(firstName: String, lastName: String): Author
 posts: [Post]
 getFortuneCookie: String
}
schema {
  query: Query
}
type Post {
  _id: String
  title: String
  content: String
  author: Author
  fortune: String
}
type Author {
  _id: String
  firstName: String
  lastName: String
  posts: [Post]
  fortune: String
}
`;

export default [typeDefinitions];
