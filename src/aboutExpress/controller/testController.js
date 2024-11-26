const app = require('./index')
// 请求路径映射
 // app.请求方法(路径, 回调函数)
//  app.get('/:id', (req, resp) => {
//     console.log('请求头:', req.headers)
//     console.log('请求路径:', req.url)
//     console.log('请求参数: ', req.query)
//     // 通过params获取路径变量
//     console.log('路径变量:', req.params)
//     // resp.send('hello world')
//     resp.send({
//         name: '山野洋子',
//         age: 22,
//         university: 'NCU',
//         major: '计算机科学与技术'
//     })
//     // 重定向
//     // resp.status(302).redirect('http://www.baidu.com')
//  })


 
 
  app.get('/api/test', (req, resp, next) => {
     console.log('handler 1') 
    //  resp.send('handler 1')
    //  resp.setHeader('a', 'b')
   
     // 相当于next(new Error('handler 1 error'))
     throw new Error('handler 1 error')
     next()
    //  resp.end()
     console.log('handler 1 end')
  }, (req, resp, next) =>{
     console.log('handler 2')
     // 第二次调用send,setHeader会报错，因为send中会自动调用end函数
    //  resp.send('handler 2')
    //  resp.setHeader('a', 'b')
     next()
     console.log('handler 2 end')
  }, (req, resp) =>{
     console.log('handler 3')
    //  resp.send('handler 3')
    resp.send('handler 3')
    console.log('handler 3 end')
  })