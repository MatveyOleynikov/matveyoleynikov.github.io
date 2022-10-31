const DataTypes = require('sequelize')

module.exports = (sequelize) =>{
    return sequelize.define('trains',
    {
        trains_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'train_id',
            autoIncrement: true,
            primaryKey: true
        },

        name : {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        },

    },

    {
        timestamps: false
    }
    );

}