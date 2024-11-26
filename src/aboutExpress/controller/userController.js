const express = require('express')

const userRouter = express.Router()

userRouter.post('/login', (req, resp) => {
    const {username, password} = req.body
    if(username === 'admin' && password === 'admin'){
        //登录成功
        const id = '007'

        req.session.loginUser = {
            id,
            username,
            password
        }
        // 设置cookie
        resp.cookie('id', id, {
            maxAge: 1000 * 60 * 60 * 1,
            signed: true
        })
        resp.send('登录成功')
    }else{
        resp.send('登录失败')
    }
})

module.exports = userRouter
