const sequelize = require('../connection')
import { DataTypes } from 'sequelize'

export const User = sequelize.define('users', {
    
    user_id: {

        type : DataTypes.INTEGER,
        allowNull : false,
        field: 'user_id'
    },

    name: {
        
        type : DataTypes.STRING,
        allowNull : false,
        field : 'name'
    },

    email: {

        type : DataTypes.STRING,
        allowNull : false,
        field : 'email'
    },

    password: {
        type : DataTypes.STRING,
        allowNull : false,
        field: 'password',
        set(value) {
            // Перед записью в БД пароли следует "хэшировать" с помощью криптографической функции
            this.setDataValue('password', hash(value))
        }
    }

},

{
    timestamps: false,
}

);