const util = require("util");

/* async function delay(duration = 1000){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(duration)
        }, duration);   
    }) 
}

delay(1000).then(result => {
    console.log(`delay-promise: Waited for ${result}ms`);
})

const delayCallback = util.callbackify(delay)
delayCallback(3 * 1000, (err, result) => {
    console.log(`delay-callback: Waited for ${result}ms`);
}) */

// 延迟durations毫秒后调用callback函数
const delayCallback = (duration, callback) => {
    setTimeout(() => {
        callback(null, duration);
    }, duration);
};

const delayPromise = util.promisify(delayCallback)
    /* delayPromise(1000).then(result => {
    console.log(`delay-promise: Waited for ${result}ms`);
}) */

(async () => {
    const duration = await delayPromise(1000);
    console.log(`delay-promise: Waited for ${duration}ms`);
})();

const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
};

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
};

console.log(util.isDeepStrictEqual(obj1, obj2)); // true
