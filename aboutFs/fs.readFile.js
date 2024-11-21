const fs = require("fs")

const fileName = __dirname + '/myFiles/1.txt'

// 回调写法
/* fs.readFile(fileName, {encoding: 'utf-8'}, (err, data) => {
    console.log(data.toString())
})

// promise写法
fs.promises.readFile(fileName, {encoding: 'utf-8'}).then(data => {
    console.log(data.toString())
}).catch(err => {
    console.log(err)
}) */


async function readFile() {
    try {
        const res = await fs.promises.readFile(fileName, { encoding: 'utf-8' });
        console.log(res);
    } catch (err) {
        console.error('读取文件时出错:', err);
    }
}
readFile();
console.log('111')