import React, { Component } from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';


function App({ postsData }) {
  const { mongoPosts, loading } = postsData;

  return (
    <div className="container-main">
      <h1> Fortune Cookie </h1>

      <div className="flex-grid">
        {loading ?
          <div>Loading</div>
        :
          <div>
            {mongoPosts && mongoPosts.map(({fortune}, index) => {
              return (
                <div key={index} className="container-centered grit">
                  <p>"{fortune}"</p>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  )
}


// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps() {
    return {
      postsData: {
        query: gql`
            {
              mongoPosts {
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
