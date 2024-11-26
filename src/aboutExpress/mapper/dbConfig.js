const { Sequelize } = require('sequelize')

// 创建 Sequelize 实例
const sequelize = new Sequelize('learning-nodejs-mysql2', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00'
});

(async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

module.exports = sequelize