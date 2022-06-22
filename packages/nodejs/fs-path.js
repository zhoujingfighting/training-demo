const fs  = require('fs');
const path = require('path');

/**
 * TODO: 简答拷贝一下文件
 */

const targetFilePath = path.resolve(__dirname, 'test.txt');

const destinationFilePath = path.resolve(__dirname, 'test1.txt');

const targetFileContent = fs.readFileSync(targetFilePath, {encoding: 'utf8'});

fs.writeFileSync(destinationFilePath, targetFileContent)