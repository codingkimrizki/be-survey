module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define (
    "questions",
    {
      id_question: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      id_page: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "pages",
          key: "id_page",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      question_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      question_type: {
        type: DataTypes.ENUM("Y/N", "rating", "suggest", "mixed"),
        allowNull: false,
      },
    },
    {
      tableName: "questions",
      timestamps: true,
    }

  )
  return questions;
};