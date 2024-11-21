const net = require('net');

// socket是一个特殊的流对象
// 在node中表现未一个双工流对象
// 通过向流写入内容发送数据
// 通过监听流的内容获取数据
// tcp协议
const socket = net.createConnection({
    host: '127.0.0.1',
    port: 3002
}, () => {
    console.log('连接成功');
})


socket.on("data", chunk => {
    // console.log('服务器说:', chunk.toString("utf-8"));
    // socket.end();
    parseResponse(chunk.toString("utf-8"));
})

socket.on("close", () => {
    console.log('连接关闭');
})

// 修正HTTP请求格式
socket.write(`GET / HTTP/1.1\r\n\
Host: 127.0.0.1:3001\r\n\
Connection: keep-alive\r\n\
\r\n`); 

/**
 * 提炼出响应字符串的消息头和消息体
 */
function parseResponse(response) {
    const index = response.indexOf('\r\n\r\n');
    const responseHeaders = response.substring(0, index + 2);
    const responseBody = response.substring(index + 2);
    console.log('响应头:', responseHeaders);
    console.log('响应体:', responseBody);
}
