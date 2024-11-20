const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proyectos', {
    idproyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    objetivos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_i: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_f: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estadoproyecto: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    idprograma: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proyectos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproyecto" },
        ]
      },
      {
        name: "idprograma",
        using: "BTREE",
        fields: [
          { name: "idprograma" },
        ]
      },
    ]
  });
};
