/**
 * stream流模块是nodejs的高级用法，目前只做了解
 */
const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream(path.resolve(__dirname, '..', 'yarn.lock'));

const writeStream = fs.createWriteStream(path.resolve(__dirname,'yarn.lock.copy'));

readStream.pipe(writeStream)
readStream.pipe(process.stdout)
/**
 * pipe就是管道的意思，类似于linux的命令 ｜ 
 */
