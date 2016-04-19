import React, { Component } from 'react';
import { connect } from 'react-apollo';

const App = ({ currentUser }) => {
  return (
    <div>
      <LogInButtons />
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <button onClick={currentUser.refetch}>Refetch!</button>
    </div>
  )
}

const AppWithData = connect({
  mapQueriesToProps() {
    return {
      currentUser: {
        query: `
          {
            currentUser {
              emails {
                address
                verified
              }
            }
          }
        `,
      },
    };
  },
})(App);

export default AppWithData;
