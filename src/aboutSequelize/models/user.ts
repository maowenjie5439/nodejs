import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";

// 用户属性接口
export interface UserAttributes {
    id: number;
    name: string | null;
    age: number | null;
    gender: number | null;
    phone: string | null;
}

// 创建用户时的属性接口
export interface UserCreationAttributes extends Omit<UserAttributes, "id"> {}

// 用户模型类
export class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
{
    public id!: number;
    public name!: string | null;
    public age!: number | null;
    public gender!: number | null;
    public phone!: string | null;
}

// 初始化用户模型
User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: "姓名",
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "年龄",
        },
        gender: {
            type: DataTypes.TINYINT,
            allowNull: true,
            comment: "性别",
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true,
            comment: "手机号",
        },
    },
    {
        sequelize,
        tableName: "t_user",
        timestamps: true,
        // 时间戳默认为true，创建时会自动添加createdAt和updatedAt字段
        createdAt: "create_time",
        updatedAt: "update_time",
        paranoid: true,// 从此以后，删除数据时不会真正删除，而是添加一个deletedAt字段，记录删除时间
    }
);
// 同步模型到数据库
User.sync({ alter: true });

