module.exports = (sequelize, DataTypes) => {
    const masterApps = sequelize.define (
        "masterApps",
        {
            id_master_apps: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name_master_apps: {
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        },
        {
        tableName: "master_apps", // wajib sama kayak migration
        timestamps: true,
        }
    );
    return masterApps;
};