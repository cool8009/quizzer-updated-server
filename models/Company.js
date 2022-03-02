module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Company', {
    CompanyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Company',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Company_1",
        unique: true,
        fields: [
          { name: "CompanyId" },
        ]
      },
    ]
  });
};
