const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('请求来了')
    console.log('请求路径:', req.url)
    console.log('请求头:', req.headers)
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString('utf-8')
    })

    req.on('end', () => {
        console.log('请求体:', body)
    })

    res.setHeader('a', '1')
    res.setHeader('b', '2')

    res.write('你好')
    res.end()

})

server.listen(3002, () => {
    console.log('server listen 3002')
})

server.on('connection', socket => {
    console.log('有新的连接')
})
