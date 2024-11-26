/* console.log(process.cwd())

console.log(module) */


exports.c = 3

module.exports = {
    a: 1,
    b: 2,
};
// 还是原来的module.exports
console.log(this)
console.log(this === module.exports)

console.log(process.cwd())
console.log('test111222')