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
                allowNul: true,
                unique: true
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
            createdAt: DataTypes.DATE,
            updateAt: DataTypes.DATE
        },
        {
        tableName: "biodata", // wajib sama kayak migration
        timestamps: false, // kamu pakai createdAt + updateAt manual
        }
    );

    biodata.associate = (models) => {
    biodata.belongsTo(models.department, { foreignKey: "id_department" });
  };

    return biodata;
};