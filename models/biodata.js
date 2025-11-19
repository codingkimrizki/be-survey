module.exports = (sequelize, DataTypes) => {
    const biodata = sequelize.define (
        "biodata",
        {
            id_biodata: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name_biodata: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: false
            },
            id_department: {
                type: DataTypes.INTEGER,
                references: {
                model: 'department',
                key: 'id_department'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
        },
        {
        tableName: "biodata", // wajib sama kayak migration
        timestamps: true, 
        }
    );

    biodata.associate = (models) => {
    biodata.belongsTo(models.department, { foreignKey: "id_department" });
  };

    return biodata;
};