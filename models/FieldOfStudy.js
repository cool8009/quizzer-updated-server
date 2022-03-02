module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FieldOfStudy', {
    FieldOfStudyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    FieldName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FieldOfStudy',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_FieldOfStudy_1",
        unique: true,
        fields: [
          { name: "FieldOfStudyId" },
        ]
      },
    ]
  });
};
