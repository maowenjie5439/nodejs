// 静态服务器
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

/**
 * 获取文件内容
 * @param {*} url url路径
 * @returns 文件内容
 */
const getFileContent = async (url) =>{
    const urlObj = URL.parse(url, true)
    const filePath = urlObj.pathname
    // console.log(filePath)
    // console.log(__dirname)
    // url路径的第一个/要去掉
    let fileName = path.resolve(__dirname, '../public', filePath.substring(1))
    // console.log(fileName)

    // console.log(fs.existsSync(fileName))
    if(!fs.existsSync(fileName)){
        // 文件或目录不存在
        console.log('文件不存在')
        return null;
    }else if(fs.statSync(fileName).isDirectory()){
        // 是目录
        // 默认访问index.html
        fileName = path.resolve(__dirname, '../public', filePath.substring(1), 'index.html')
        // console.log(fileName)

        // 如果index.html文件不存在
        if(!fs.existsSync(fileName)){
            console.log(fileName + ' 文件不存在')
            return null;
        }else{
            console.log(fileName + ' 文件存在')

            return await fs.promises.readFile(fileName)
        }
    }else{
        // 正常的文件
        console.log(fileName + ' 正常的文件')

        return await fs.promises.readFile(fileName)
    }

    // return fileName
}
// 创建server
const server = http.createServer(async (req, resp) => {
    // 获取请求路径
    const url = req.url
    // 获取文件信息
    const fileContent = await getFileContent(url)

    if(fileContent){
        resp.write(fileContent)
    }else{
        resp.statusCode = 404
        resp.write('Resource not found')
    }
    resp.end()
})

server.listen(3003, () => {
    console.log('server listen 3003')
})


