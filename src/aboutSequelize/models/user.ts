import { Model, DataTypes, Sequelize } from 'sequelize';

// 用户属性接口
export interface UserAttributes {
    id: number;
    name: string | null;
    age: number | null;
    gender: number | null;
    phone: string | null;
}

// 创建用户时的属性接口
export interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

// 用户模型类
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string | null;
    public age!: number | null;
    public gender!: number | null;
    public phone!: string | null;
}

// 初始化用户模型
export function initUser(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: '姓名'
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true,
                comment: '年龄'
            },
            gender: {
                type: DataTypes.TINYINT,
                allowNull: true,
                comment: '性别'
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: true,
                comment: '手机号'
            }
        },
        {
            sequelize,
            tableName: 't_user',
            timestamps: false
        }
    );

    return User;
} 