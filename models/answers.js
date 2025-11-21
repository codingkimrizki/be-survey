module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define(
    "answers",
    {
      id_answer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_apps: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'apps',
          key: 'id_apps'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      id_question: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id_question'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      id_biodata: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'biodatas',
          key: 'id_biodata'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      answer_value: {
        type: DataTypes.TEXT, 
        allowNull: true
      },
    },
    {
      tableName: "answers",
      timestamps: true,
    }
  );

  answers.associate = (models) => {
    answers.belongsTo(models.apps, {foreignKey: "id_apps"});
    answers.belongsTo(models.questions, {foreignKey: "id_question"});
  }
  return answers;
};