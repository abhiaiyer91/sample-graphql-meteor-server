import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ApolloClient from 'apollo-client';
import { Provider } from 'react-apollo';

import App from '/imports/ui/App';

const client = new ApolloClient();

Meteor.startup(() => {
  render(<Provider client={client}>
    <App />
  </Provider>, document.getElementById('app'));
});
