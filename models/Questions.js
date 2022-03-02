const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Questions', {
    QuestionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IsSingleChoice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    TestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tests',
        key: 'TestId'
      }
    }
  }, {
    sequelize,
    tableName: 'Questions',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Questions_1",
        unique: true,
        fields: [
          { name: "QuestionId" },
        ]
      },
    ]
  });
};
