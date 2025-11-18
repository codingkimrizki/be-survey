module.exports = (sequelize, DataTypes) => {
    const apps = sequelize.define (
        "apps",
        {
            id_apps: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name_apps: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            id_biodata: {
                type: DataTypes.INTEGER,
                reference: {
                model: 'biodata',
                key: 'id_biodata'
                },
                onUpdate: 'CASECADE',
                onDelete: 'SET NULL'
            }
        },
        {
        tableName: "apps", // wajib sama kayak migration
        timestamps: false, // kamu pakai createdAt + updateAt manual
        }
    );

    apps.associate = (models) => {
    apps.belongsTo(models.biodata, { foreignKey: "id_biodata" });
  };

    return apps;
};