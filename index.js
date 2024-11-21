// console.log(global)

// console.log(process.cwd())
// console.log(process.argv)

// console.log(process.platform)
// console.log(process.env)

require("./mwj/indexs")



/* function require(modulePath) {
    // 1. 吧modulePath解析成绝对路径
    // 2. 判断是否在缓存中
    // 3. 如果在缓存中，直接返回缓存中的模块

    // 4. 如果不在缓存中，加载模块
    // 将模块中的内容包裹在一个函数中
    function __temp(module, exports,require, __dirname, __filename) {
        console.log("当前模块路径： ", __dirname);
        console.log("当前模块文件名： ", __filename);

        exports.c = 3;
        module.exports = {
            a: 1,
            b: 2,
        };
        this.m = 5

        return module.exports
    }
    // 5. 创建module对象
    module.exports = {}
    const exports = module.exports
    __temp.call(module.exports, module, exports, require, module.path, module.filename)
    // 5. 返回模块的exports对象
}  */
// const res = require("./src");
// console.log(res);

// require('./aboutOs')
// require('./aboutPath')
// require('./aboutUrl')
// require('./aboutUtil')

// require('./fs.readFile')
// require('./fs.writeFile')

// require('./aboutFs/copyFile')
// require('./aboutFs/dirApi')
// require('./aboutFs/readStream')

// require('./aboutFs/writeStream')

// require('./aboutNet/client')

// require('./aboutHttp/sendReq')

// require('./aboutEventEmitter')
