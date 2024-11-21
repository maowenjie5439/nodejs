const net = require('net');

const server = net.createServer()

server.listen(3002, () =>{
    console.log('server listen 3002')
})

server.on('connection', socket => {
    console.log('有新的连接')
    socket.on('data', chunk => {
        console.log('客户端说:', chunk.toString('utf-8'))

        socket.write('收到了')
        socket.end()
    })

    socket.on('close', () => {
        console.log('连接关闭')
    })
})