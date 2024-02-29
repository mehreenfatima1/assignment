import {Sequelize,DataTypes} from "sequelize"
import sequelize from '../database/connection'

const Users = sequelize.define('Users', {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
        },
    email:{
            type: DataTypes.STRING,
            allowNull: false
    }

})

export {Users}