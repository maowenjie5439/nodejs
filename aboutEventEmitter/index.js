const { EventEmitter } = require('events')

// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const emitter = new EventEmitter()

emitter.on('abc', () =>{
    console.log('abc事件被触发了')
})

emitter.emit('abc')