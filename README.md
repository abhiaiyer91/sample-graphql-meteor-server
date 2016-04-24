# Simple GraphQL Server 

A simple example to start to see what Meteor, Apollo, and MongoDB looks like.

RIP Pub/Sub.

This is the Meteor version of the examples Jonas' post
[How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.nbab6cbij)

It has

1. resolvers for Meteor Mongo apis
2. resolver and connector for Fortune Cookie API. 
3. resolver and connectors for MySQL, through Sequelize. Can easily plug in PG.

Navigate to `localhost:3000` if you want to see some fortunes.


### Quick MySQL install
```
brew install mysql
npm install sequelize --save
npm install mysql --save

mysql

>mysql CREATE DATABASE blog
>mysql USE blog

```

### Running it

```
meteor npm install
meteor
```

### Learn more

Learn more [in the docs](http://docs.apollostack.com/)!
