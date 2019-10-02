'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_posts = sequelize.define('users_posts', {
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  users_posts.associate = function(models) {
    // associations can be defined here
    users_posts.belongsTo(models.Post);
    users_posts.belongsTo(models.User);
  };
  return users_posts;
};