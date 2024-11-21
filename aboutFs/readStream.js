const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, '../myFiles/1.txt')

// 创建一个读取流，是可读流Readable的子类
const readStream = fs.createReadStream(fileName, {
    encoding: 'utf-8',
    highWaterMark: 5, // 每次读取的块大小,若不设置encoding，则表示一个字节，若设置了，则表示一个字符
    autoClose: true // 读取完毕后自动关闭文件
})

// rs.on('事件名', 回调函数)
// open: 文件打开事件，文件打开后被触发
// error: 文件打开失败后被触发
// data: 读取到数据后被触发,只有当设置了data事件后，才会真正开始读取
// end: 读取完毕后被触发
// close: 文件关闭后被触发

// 这里每次读一个字符，因为设置了hignWaterMark和encoding
readStream.on('data', (chunk) => { 
    console.log('读取到部分数据：', chunk)

    readStream.pause() // 暂停读取
    readStream.resume() // 恢复读取
})  

readStream.on('end', () =>{
    console.log('文件读完了...')
})
 
readStream.on('close', () =>{
    console.log('文件流关闭...')
})

readStream.on('pause', () =>{
    console.log('文件流暂停...')
})

readStream.on('resume', () =>{
    console.log('文件流恢复...')
})

readStream.pipe