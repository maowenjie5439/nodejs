import { Sequelize } from 'sequelize';
import { User, UserCreationAttributes} from './models/user';
import { Class, ClassCreationAttributes } from './models/class';
import { sequelize } from "./db";


// 初始化模型
// initUser(sequelize);

// 用户相关操作函数
async function createUser(userData: UserCreationAttributes): Promise<User> {
    return await User.create(userData);
}

async function findUserById(id: number): Promise<User | null> {
    return await User.findByPk(id);
}

async function findAllUsers(): Promise<User[]> {
    return await User.findAll();
}

async function updateUser(id: number, updateData: Partial<UserCreationAttributes>): Promise<[number]> {
    return await User.update(updateData, {
        where: { id }
    });
}

async function deleteUser(id: number): Promise<number> {
    return await User.destroy({
        where: { id }
    });
}

// 测试函数
async function test() {
    try {
        await sequelize.authenticate();
        console.log('数据库连接成功');

        // 创建用户
        // const user = await createUser({
        //     name: '张三',
        //     age: 25,
        //     gender: 1,
        //     phone: '13800138000'
        // });
        // console.log('创建用户成功:', user.toJSON());

        // 查询所有用户
        // const users = await findAllUsers();
        // console.log('所有用户:', users.map(u => u.toJSON()));

        // // 更新用户
        // const updateResult = await updateUser(user.id, { age: 26 });
        // console.log('更新结果:', updateResult);

        // // 查询单个用户
        // const updatedUser = await findUserById(user.id);
        // console.log('更新后的用户:', updatedUser?.toJSON());

        // // 删除用户
        // const res = await User.destroy({where: {id: 13}})
        // console.log('删除结果:', res);
        // const deleteResult = await deleteUser(user.id);
        // console.log('删除结果:', deleteResult);

        // ClassMapper
        const classes = await Class.findAll();
        console.log('所有班级:', classes.map(c => c.toJSON()));

    } catch (error) {
        console.error('操作失败:', error);
    } finally {
        // await sequelize.close();
        // console.log('数据库连接已关闭');
    }
}

// 运行测试
test(); 