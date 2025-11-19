module.exports = (sequelize, DataTypes) => {
    const master_apps = sequelize.define (
        "master_apps",
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
        tableName: "master_apps",
        timestamps: true,
        }
    );
    return master_apps;
};