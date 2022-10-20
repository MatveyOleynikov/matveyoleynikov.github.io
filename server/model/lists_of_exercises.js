const sequelize = require('../connection')
import { describe } from 'node:test'
import { DataTypes } from 'sequelize'

const listOfExercises = sequelize.define(
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
    }
)