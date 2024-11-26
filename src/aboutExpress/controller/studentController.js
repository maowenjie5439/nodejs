const express = require('express')

const studentRouter = express.Router()

studentRouter.get('/', async (req, resp) => {
    // resp.send('分页获取学生列表')
    const studentService = require('../service/studentService')
    const studentList = await studentService.getStudentList()
    // console.log(studentList)
    resp.send(studentList)
 })

studentRouter.get('/:id', (req, resp) => {
    resp.send('get student by id:' + req.params.id)
})

studentRouter.post('/', (req, resp) => {
    // console.log('请求体:', req.body)
    // resp.send(req.body)
    resp.send('添加一个学生')
})

studentRouter.put('/:id', (req, resp) => {
    resp.send('更新一个学生id=' + req.params.id)
})

studentRouter.delete('/:id', (req, resp) => {
    resp.send('删除一个学生id=' + req.params.id)
})

studentRouter.get('/test/123', (req, resp) => {
    resp.send('test')
})
module.exports = studentRouter