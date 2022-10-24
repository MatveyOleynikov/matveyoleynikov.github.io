const DataTypes = require('sequelize')

module.exports = (sequelize) =>{
    return sequelize.define(
    'exercises',
    {
        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'exercise_id',
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT
        },

        list_id: {
            type: DataTypes.INTEGER
        }
    },

    {
        timestamps: false
    }

    );

    
}