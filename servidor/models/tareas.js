const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tareas', {
    idtarea: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estadotarea: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    idfase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fases',
        key: 'idfase'
      }
    }
  }, {
    sequelize,
    tableName: 'tareas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtarea" },
        ]
      },
      {
        name: "idfase",
        using: "BTREE",
        fields: [
          { name: "idfase" },
        ]
      },
    ]
  });
};
