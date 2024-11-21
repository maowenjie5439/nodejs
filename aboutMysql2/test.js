const mysql = require('mysql2/promise');

// 数据库配置
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'learning-nodejs-mysql2'
};

// 创建连接池配置
const pool = mysql.createPool({
    // 基本配置
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'learning-nodejs-mysql2',
    
    // 连接池特有配置
    waitForConnections: true,     // 是否等待连接（推荐 true）
    connectionLimit: 10,          // 最大连接数
    maxIdle: 10,                 // 最大空闲连接数
    idleTimeout: 60000,          // 空闲超时时间（毫秒）
    queueLimit: 0,               // 排队限制（0 表示不限制）
    enableKeepAlive: true,       // 保持连接活跃
    keepAliveInitialDelay: 0
});

async function queryUsers() {
    try {
        const [rows] = await pool.execute('SELECT * FROM t_user');
        return rows;
    } catch (error) {
        console.error('查询用户失败:', error);
        throw error;
    }
}

async function addUser(name, age, gender, phone) {
    try {
        const [result] = await pool.execute(
            'INSERT INTO t_user (name, age, gender, phone) VALUES (?, ?, ?, ?)',
            [name, age, gender, phone]
        );
        return result.insertId;
    } catch (error) {
        console.error('添加用户失败:', error);
        throw error;
    }
}

async function test() {
    try {
        // 添加用户
        const newUserId = await addUser('张三', 25, 1, '13800138000');
        console.log('新用户ID:', newUserId);

        // 查询所有用户
        const users = await queryUsers();
        console.log('所有用户:', users);

    } catch (error) {
        console.error('测试失败:', error);
    } finally {
        await pool.end();  // 最后关闭连接池
    }
}

test();


