import React, { Component } from 'react';
import { connect } from 'react-apollo';

const App = ({ testString }) => {
  console.log(testString);
  return (
    <div>
      <pre>{JSON.stringify(testString, null, 2)}</pre>
      <button onClick={testString.refetch}>Refetch!</button>
    </div>
  )
}

const AppWithData = connect({
  mapQueriesToProps() {
    return {
      testString: {
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
