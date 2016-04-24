import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { apolloServer } from 'graphql-tools';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import { check } from 'meteor/check';
import Schema from '/imports/data/schema';
import resolvers from '/imports/data/resolvers';

const graphQLServer = express();
const GRAPHQL_PORT = 4000;

graphQLServer.use('/', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
