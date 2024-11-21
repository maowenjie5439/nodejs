const path = require('path')
const fs = require('fs')
/* const fileName = path.resolve(__dirname, './myFiles/pic.jpg')

const stat = fs.promises.stat(fileName)

console.log(stat) */

// 读取目录信息
/* const dirName = path.resolve(__dirname, '../myFiles')
// 读取指定路径的目录，返回一个数组，数组中是目录中的文件名，目录也是文件
const readDir = async () => {
    const res = await fs.promises.readdir(dirName)
    console.log(res)
}
readDir() */


// 创建目录
// const dirName = path.resolve(__dirname, '../myFiles/test')
// const createDir = async () => {
//     await fs.promises.mkdir(dirName)
// }
// createDir()

// 判断文件或目录是否存在
const dirName = path.resolve(__dirname, '../myFiles/test')
const isExist = async () => {
    const res = fs.existsSync(dirName)
    console.log(res)
}
isExist()

Promise.all
