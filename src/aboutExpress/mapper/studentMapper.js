const sequelize = require('./dbConfig')
const { DataTypes } = require('sequelize')
class StudentMapper {
    constructor(){
        this.sequelize = sequelize
        const Student = sequelize.define('Student', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
            }
        },{
            tableName: 't_student',
            paranoid: true,
        })
        this.Student = Student
        Student.sync()
    }
    async getStudentList(page, size) {
        return await this.Student.findAll()
    }
}

module.exports = new StudentMapper()