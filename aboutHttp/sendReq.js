const http = require('http');

// 可写流
// ClientRequest对象
const req = http.request("http://127.0.0.1:3002/", 
    {method: 'POST'},
    res => {
    console.log('响应状态码:', res.statusCode)
    console.log('响应头:', res.headers)
    res.on('data', chunk => {
        // console.log('响应体:', chunk)
        console.log('响应体:', chunk.toString('utf-8'))
    })

    res.on('end', () => {
        console.log('响应结束')
    })
})

req.write('请求消息体内容...')
req.end() // 发送消息体，表示消息体结束