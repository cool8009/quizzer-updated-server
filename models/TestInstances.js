const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestInstances', {
    TestInstanceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    TestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tests',
        key: 'TestId'
      }
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DateTaken: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsPassed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'TestInstances',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_TestInstances_1",
        unique: true,
        fields: [
          { name: "TestInstanceId" },
        ]
      },
    ]
  });
};
