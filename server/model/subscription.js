
const DataTypes = require('sequelize')

module.exports =  function (sequelize){ return sequelize.define(
    'subscriptions',
    {
        subscription_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'subscription_id',
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'name'
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        time_interval: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        

    },

    {
        timestamps: false
    }

    )
}