import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Provider } from 'react-apollo';

import AppWithData from '/imports/App';

const networkInterface = createNetworkInterface('/graphql');
const client = new ApolloClient({
  networkInterface
});

Meteor.startup(() => {
  render(<Provider client={client}>
    <AppWithData />
  </Provider>, document.getElementById('app'));
});
