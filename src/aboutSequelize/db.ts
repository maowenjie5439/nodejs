import { Sequelize } from "sequelize";

// 创建 Sequelize 实例
export const sequelize = new Sequelize('learning-nodejs-mysql2', 'root', 'root', {
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