import { Random } from 'meteor/random';

export const schema = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomString: String
}

type Query {
  user(id: String!): User
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}
