 const express = require('express');
 const cookieParser = require('cookie-parser')
 const session = require('express-session')
 const path = require('path')
//  const http = require('http');
 // 创建web服务器
 // app实际上是一个函数，用于处理请求的函数
 const app = express();

 // 使用session中间件
app.use(session({
    secret: 'mwj',
    name: 'sessionId',
   //  resave: false,
   //  saveUninitialized: true
}))
 // 静态资源处理器
//  app.use(require('./resourcesHandler'))
app.use(express.static(path.resolve(__dirname, '../../../public')))

app.use('/api', (req, resp, next) =>{
   console.log('baseUrl:', req.baseUrl)
   console.log('path:', req.path)
   next()
})

// 使用解析请求体中间件
// app.use(express.urlencoded({extended: true}))
app.use(express.json())
// 使用cookie中间件
app.use(cookieParser("mwj"))
// 使用登录拦截器
app.use(require('./loginInterceptor'))
app.use('/api/stu', require('./studentController'))
app.use('/api/user', require('./userController'))

// 测试cookie
// app.get('/api/test/cookie', (req, resp) => {
//     resp.cookie('key1', 'value1', {
//         maxAge: 1000 * 60 * 60 * 24,
//         signed: true
//       //   httpOnly: true
//     })
//     resp.send('成功设置cookie')
// })


 // 匹配任何请求，需要放在所有请求之后
 // Express 按照中间件定义的顺序依次执行
 app.use(require('./exceptionHandler'))
 app.listen(3000, () => {
   // console.log(process.env.PORT)
   console.log('server listen 3000')
})
