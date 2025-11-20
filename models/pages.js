module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define (
    "pages",
    {
      id_page: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name_page: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "pages",
      timestamps: true,
    }

  )
  
  return pages;
};