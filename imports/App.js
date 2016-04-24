import React, { Component } from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';


function App({ postsData }) {
  const { result } = postsData;
  return (
    <div className="container-main">
      <h1> Fortune Cookie </h1>
      <div className="flex-grid">
        {result && result.posts.map(({fortune}, index) => {
          return (
            <div key={index} className="container-centered grit">
              <p>"{fortune}"</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}


// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps() {
    return {
      postsData: {
        query: `
            {
              posts {
                title
                content
                fortune
              }
            }
          `
      }
    };
  }
})(App);


export default AppWithData;
