const studentMapper = require('../mapper/studentMapper')
class StudentService {
    constructor(){
        this.studentMapper = studentMapper
    }
    async getStudentList(page=1, size=10) {
        return await this.studentMapper.getStudentList(page, size)
    }
}

module.exports = new StudentService()