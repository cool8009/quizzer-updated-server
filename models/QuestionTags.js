const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionTags', {
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'QuestionId'
      }
    },
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tags',
        key: 'TagId'
      }
    }
  }, {
    sequelize,
    tableName: 'QuestionTags',
    timestamps: false
  });
};
