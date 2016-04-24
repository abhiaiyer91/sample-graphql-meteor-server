const typeDefinitions = `
type Query {
 mongoAuthor(firstName: String, lastName: String): Author
 mongoPosts: [Post]
 getFortuneCookie: String
 sqlAuthor(firstName: String, lastName: String): SQLAuthor
 sqlPosts: [SQLPosts]
}
schema {
  query: Query
}
type SQLPosts {
  title: String
  content: String
}
type SQLAuthor {
  firstName: String
  lastName: String
}
type Post {
  _id: String
  title: String
  content: String
  mongoAuthor: Author
  sqlAuthor: SQLAuthor
  fortune: String
}
type Author {
  _id: String
  firstName: String
  lastName: String
  mongoPosts: [Post]
  sqlPosts: [SQLPosts]
  fortune: String
}
`;

export default [typeDefinitions];
