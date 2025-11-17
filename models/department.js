module.exports = (sequelize, DataTypes) => {
    const department = sequelize.define (
        "department",
        {
            id_department: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name_department: {
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            createdAt: DataTypes.DATE,
            updateAt: DataTypes.DATE 
        },
        {
        tableName: "department", // wajib sama kayak migration
        timestamps: false, // kamu pakai createdAt + updateAt manual
        }
    );
    return department;
};