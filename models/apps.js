module.exports = (sequelize, DataTypes) => {
  const apps = sequelize.define(
    "apps",
    {
      id_apps: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      id_master_apps: {
        type: DataTypes.INTEGER,
        references: {
          model: "master_apps",
          key: "id_master_apps",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      id_biodata: {
        type: DataTypes.INTEGER,
        references: {
          model: "biodata",
          key: "id_biodata",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      tableName: "apps",
      timestamps: true,
    }
  );

  apps.associate = (models) => {
    // relasi ke biodata
    apps.belongsTo(models.biodata, { foreignKey: "id_biodata" });

    // relasi ke master_apps
    apps.belongsTo(models.master_apps, { foreignKey: "id_master_apps" });
  };

  return apps;
};
