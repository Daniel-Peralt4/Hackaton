const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarioproyecto', {
    nodocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'nodocumento'
      }
    },
    idproyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proyectos',
        key: 'idproyecto'
      }
    },
    idrolproyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rolesproyectos',
        key: 'idrolproyecto'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarioproyecto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nodocumento" },
          { name: "idproyecto" },
          { name: "idrolproyecto" },
        ]
      },
      {
        name: "idproyecto",
        using: "BTREE",
        fields: [
          { name: "idproyecto" },
        ]
      },
      {
        name: "idrolproyecto",
        using: "BTREE",
        fields: [
          { name: "idrolproyecto" },
        ]
      },
    ]
  });
};
