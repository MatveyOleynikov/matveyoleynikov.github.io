const DataTypes = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define(
        'lists_of_exercises',
        {
            list_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'list_id',
                autoIncrement: true,
                primaryKey: true
            },

            name: {
                
                type: DataTypes.STRING(30),
                allowNull: false
            },

            description: {
                type: DataTypes.TEXT,
            }
        },

        {
            timestamps: false,
        }
    )
}