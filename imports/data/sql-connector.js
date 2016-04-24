import Sequelize from 'sequelize';
import casual from 'casual';

export const db = new Sequelize('blog', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
});

const PostModel = db.define('post', {
  title: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING }
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name
    }).then((author) => {
      return author.createPost({
        title: `A post by ${author.firstName}`,
        content: casual.sentences(3)
      });
    });
  });
});

const SQLAuthor = db.models.author;
const SQLPosts = db.models.post;

export { SQLAuthor, SQLPosts };
