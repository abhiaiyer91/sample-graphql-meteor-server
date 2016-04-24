import { Authors, Posts } from '/imports/collection';
import { Random } from 'meteor/random';
Meteor.startup(() => {
  const authors = [
      {
        "firstName": "Koch",
        "lastName": "Parsons"
      },
      {
        "firstName": "Alma",
        "lastName": "Larson"
      },
      {
        "firstName": "Jeanette",
        "lastName": "Mcleod"
      },
      {
        "firstName": "Page",
        "lastName": "Jordan"
      },
      {
        "firstName": "Cummings",
        "lastName": "Ray"
      },
      {
        "firstName": "Ellison",
        "lastName": "Sullivan"
      },
      {
        "firstName": "Jackson",
        "lastName": "Moody"
      },
      {
        "firstName": "Dolores",
        "lastName": "Arnold"
      },
      {
        "firstName": "Janna",
        "lastName": "Phelps"
      },
      {
        "firstName": "Norma",
        "lastName": "Glenn"
      }
    ];

  if (Authors.find({}, {fields: {_id: 1}}).count() === 0) {
    _.each(authors, (author) => {
      const authorId = Authors.insert(author);
      return Posts.insert({
        "title": Random.id(),
        "content": "Hey There",
        "authorId": authorId
      })
    });

  }
});
