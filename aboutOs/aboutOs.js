const os = require("os");
console.log(os.EOL)
console.log('操作系统类型: ', os.arch())
console.log(os.cpus().length, "个CPU")

console.log('用户目录： ', os.homedir())
console.log('主机名: ', os.hostname())
console.log('操作系统类型: ', os.type())
console.log('系统内存总量: ', os.totalmem() / 1024 / 1024 / 1024, "GB")
console.log('系统内存剩余量: ', os.freemem() / 1024 / 1024 / 1024, "GB")
console.log('系统临时目录: ', os.tmpdir())