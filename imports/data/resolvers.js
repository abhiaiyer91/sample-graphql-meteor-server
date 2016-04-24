import { Authors, Posts } from '/imports/collection';
import FortuneCookie from '/imports/data/fortune-connector';

const resolvers = {
  Query: {
    author(root, args){
      return Authors.findOne({
        firstName: args.firstName,
        lastName: args.lastName
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    posts(root, args) {
      return Posts.find().fetch();
    },
    getFortuneCookie(){
      return FortuneCookie.getOne();
    }
  },
  Author: {
    posts(author){
      return Posts.find({authorId: author._id}, {fields: {title: 1, content: 1}}).fetch();
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  },
  Post: {
    author(post){
      return Authors.findOne({
        _id: post.authorId
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  }
};

export default resolvers;
