import { Authors, Posts } from '/imports/collection';
import FortuneCookie from '/imports/data/fortune-connector';
import { SQLAuthor, SQLPosts } from '/imports/data/sql-connector';

const resolvers = {
  Query: {
    mongoAuthor(root, args){
      return Authors.findOne({
        $or: [
          {
            firstName: args.firstName
          },
          {
            lastName: args.lastName
          }
        ]
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    mongoPosts(root, args) {
      return Posts.find().fetch();
    },
    sqlAuthor(root, args) {
      return SQLAuthor.find({where: args});
    },
    sqlPosts(root, args) {
      return SQLPosts.findAll({});
    },
    getFortuneCookie(){
      return FortuneCookie.getOne();
    }
  },
  Author: {
    mongoPosts(author){
      return Posts.find({authorId: author._id}, {
        fields: {
          title: 1,
          content: 1
        }
      }).fetch();
    },
    sqlPosts(author) {
      return author.getPosts();
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  },
  Post: {
    mongoAuthor(post){
      return Authors.findOne({
        _id: post.authorId
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    sqlAuthor(post) {
      return post.getAuthor();
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  }
};

export default resolvers;
