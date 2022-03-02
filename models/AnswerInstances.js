module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnswerInstances', {
    AnswerInstanceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    TestInstanceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TestInstances',
        key: 'TestInstanceId'
      }
    },
    AnswerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Answers',
        key: 'AnswerId'
      }
    }
  }, {
    sequelize,
    tableName: 'AnswerInstances',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_AnswerInstances_1",
        unique: true,
        fields: [
          { name: "AnswerInstanceId" },
        ]
      },
    ]
  });
};
