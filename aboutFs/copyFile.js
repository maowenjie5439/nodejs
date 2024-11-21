const fs = require('fs');
const path = require('path');

const copyFile = async () =>{
    const sourceFileName = path.resolve(__dirname, './myFiles/pic.jpg')
    const destFileName = path.resolve(__dirname, './myFiles/picCopy.jpg')

    /* content是字节数据，类型是Buffer */
    const content = await fs.promises.readFile(sourceFileName);

    await fs.promises.writeFile(destFileName, content)

    console.log('File copied successfully')
}

copyFile()