import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export interface ClassAttributes {
    id: number;
    name: string;
    openDate: Date;
}

export interface ClassCreationAttributes extends Omit<ClassAttributes, "id"> {}

export class Class extends Model<ClassAttributes, ClassCreationAttributes> implements ClassAttributes {
    public id!: number;
    public name!: string;
    public openDate!: Date;
}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "班级名称",
        },
        openDate: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        tableName: "t_class",
        createdAt: "create_time",
        updatedAt: "update_time",
        paranoid: true,
    }
)

Class.sync({  });
