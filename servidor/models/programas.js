const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programas', {
    idprogramas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    programas: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    idfacultad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facultades',
        key: 'idfacultad'
      }
    }
  }, {
    sequelize,
    tableName: 'programas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idprogramas" },
        ]
      },
      {
        name: "idfacultad",
        using: "BTREE",
        fields: [
          { name: "idfacultad" },
        ]
      },
    ]
  });
};
