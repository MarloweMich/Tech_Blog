const User = require('./User');
const Post = require('./post');
const Comment = require('./comment')

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    through: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    through: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    through: 'post_id',
});

module.exports = { User, Post, Comment };
