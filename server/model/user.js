const DataTypes = require('sequelize')

module.exports = (sequelize) => {
return sequelize.define('users', {
    
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
        field : 'name',
        unique: true
    },

    email: {

        type : DataTypes.STRING(80),
        allowNull : false,
        field : 'email',
        unique: true
    },

    password: {
        type : DataTypes.STRING(30),
        allowNull : false,
        field: 'password',
       
    }

},

{
    timestamps: false,
}

)
};