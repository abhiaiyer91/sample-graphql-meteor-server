import React, { Component } from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const App = ({ userId, currentUser }) => {
  console.log(userId, currentUser);
  return (
    <div>
      <LogInButtons />
      { userId ? (
        <div>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
          <button onClick={currentUser.refetch}>Refetch!</button>
        </div>
      ) : 'Please log in!' }
    </div>
  )
}

// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps({ ownProps }) {
    if (ownProps.userId) {
      return {
        currentUser: {
          query: `
            query getUserData ($id: String!) {
              user(id: $id) {
                emails {
                  address
                  verified
                }
                randomString
              }
            }
          `,
          variables: {
            id: ownProps.userId,
          },
        },
      };
    }
  },
})(App);

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId() || false,
  };
}, AppWithData);

export default AppWithUserId;
