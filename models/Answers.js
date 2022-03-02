module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Answers', {
    AnswerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IsTrue: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'QuestionId'
      }
    }
  }, {
    sequelize,
    tableName: 'Answers',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Answers_1",
        unique: true,
        fields: [
          { name: "AnswerId" },
        ]
      },
    ]
  });
};
