const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, '../myFiles/2.txt')

// 创建可写流，设置每次最多写入2个字节
const writeStream = fs.createWriteStream(fileName, {
    encoding: 'utf-8',
    flags: 'a',  // 'a'表示追加写入模式
    highWaterMark: 2  // 设置缓冲区大小为2字节
})

/**
 * 写入数据的主函数
 * 通过递归的方式，配合drain事件实现流量控制
 */
function write() {
    let i = 0;  // 计数器，记录写入次数
    
    /**
     * 具体的写入操作函数
     * 使用while循环尝试写入数据，直到缓冲区满或达到写入次数限制
     */
    function writing() {
        let flag = true;  // 标记是否可以继续写入
        while(i < 10 && flag) {  // 循环条件：未达到10次且缓冲区未满
            flag = writeStream.write('哈');  // 写入一个'哈'字
            console.log('写入返回值：', flag);  // 输出写入状态
            i++;  // 写入次数加1
        }
        
        // 如果还没写够10次，则等待drain事件后继续写入
        if(i < 10) {
            // once表示只监听一次drain事件，事件触发后自动解除监听
            writeStream.once('drain', writing);
        }
    }
    writing();  // 开始写入操作
}

write();  // 执行写入函数

// 监听drain事件，当缓冲区排空时触发
writeStream.on('drain', () => {
    console.log('缓存区已排空');
})

