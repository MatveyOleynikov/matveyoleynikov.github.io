const sequelize = require('../connection')
import { DataTypes } from 'sequelize'

export const User = sequelize.define('users', {
    
    user_id: {

        type : DataTypes.INTEGER,
        allowNull : false,
        field: 'user_id',
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        
        type : DataTypes.STRING(30),
        allowNull : false,
        field : 'name'
    },

    email: {

        type : DataTypes.STRING(80),
        allowNull : false,
        field : 'email'
    },

    password: {
        type : DataTypes.STRING(30),
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