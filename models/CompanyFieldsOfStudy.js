module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanyFieldsOfStudy', {
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
    tableName: 'CompanyFieldsOfStudy',
    timestamps: false
  });
};
