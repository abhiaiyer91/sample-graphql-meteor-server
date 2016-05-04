import { registerGqlTag } from 'apollo-client/gql';

Meteor.startup(() => {
  registerGqlTag();
});
