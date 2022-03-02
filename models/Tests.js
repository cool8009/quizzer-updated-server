const Sequelize = require('sequelize');
//const sequelize = require("../data/database");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tests', {
    TestId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Intro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    MinimumToPass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FieldOfStudyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FieldOfStudy',
        key: 'FieldOfStudyId'
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'CompanyId'
      }
    }
  }, {
    sequelize,
    tableName: 'Tests',
    timestamps: false
  });
};
