const fs = require('fs');

const fileName = __dirname + '/myFiles/1.txt'
const fileName2 = __dirname + '/myFiles/2.txt'

const writeStr = async () =>{
    await fs.promises.writeFile(fileName, 'Hello World', {
        flag: 'a'
    })
}


const writeBuffer = async () =>{
    const buffer = Buffer.from('Hello World', 'utf-8')
    await fs.promises.writeFile(fileName2, buffer, {
        flag: 'a'
    })
}

writeBuffer()