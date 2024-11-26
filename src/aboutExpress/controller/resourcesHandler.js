module.exports = (req, resp, next) => {
    console.log('静态资源处理器....')
    if(req.path.startsWith('/api')){
        // 说明请求的是api接口
        next()
    }else{
        // 说明请求的是静态资源
        // if(静态资源文件存在){
        //     resp.sendFile(静态资源文件)
        resp.send('静态资源')
        // }else{
        //     next()
        // }
    }
}