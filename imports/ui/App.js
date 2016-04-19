import React, { Component } from 'react';
import { connect } from 'react-apollo';

const App = ({ data }) => {
  console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={data.refetch}>Refetch!</button>
    </div>
  )
}

const AppWithData = connect({
  mapQueriesToProps({ ownProps, state }) {
    return {
      data: {
        query: `
          {
            testString
          }
        `,
      },
    };
  },
})(App);

export default AppWithData;
