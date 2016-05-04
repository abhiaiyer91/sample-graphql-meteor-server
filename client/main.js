import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Store } from '/imports/client/store/store';

import AppWithData from '/imports/App';

const networkInterface = createNetworkInterface('/graphql');
const client = new ApolloClient({
  networkInterface
});

Meteor.startup(() => {
  render(<ApolloProvider store={Store} client={client}>
    <AppWithData />
  </ApolloProvider>, document.getElementById('app'));
});
