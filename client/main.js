import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Provider } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';

import App from '/imports/ui/App';

const networkInterface = createNetworkInterface('/graphql');

networkInterface.use([{
  applyMiddleware(request, next) {
    const currentUserToken = Accounts._storedLoginToken();

    if (!currentUserToken) {
      next();
      return;
    }

    if (!request.options.headers) {
      request.options.headers = new Headers();
    }

    request.options.headers.Authorization = currentUserToken;

    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});

Meteor.startup(() => {
  render(<Provider client={client}>
    <App />
  </Provider>, document.getElementById('app'));
});
