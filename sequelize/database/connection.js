import {Sequelize,DataTypes} from 'sequelize'

const sequelize = new Sequelize('users', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
  })
  try{
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  }catch(error){
    console.log('Unable to connect to the database:', error)
  } 
const queryInterface = sequelize.getQueryInterface();

queryInterface.createTable("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log("Users table created");

  export {sequelize}
