export const schema = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
}

type Query {
  currentUser: User
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    currentUser(root, args, context) {
      return context.user;
    },
  },
  User: {
    emails: ({emails}) => emails,
  }
}
