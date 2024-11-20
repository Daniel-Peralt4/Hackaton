const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    nodocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipodocumento: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nombrecompleto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    'contraseña': {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    idrol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'idrol'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nodocumento" },
        ]
      },
      {
        name: "idrol",
        using: "BTREE",
        fields: [
          { name: "idrol" },
        ]
      },
    ]
  });
};
