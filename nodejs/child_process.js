const { spawn } = require('child_process')

const lsProcess = spawn('node', ['-h'])
//这里就是执行脚本或者命令行命令(可执行文件)

lsProcess.stdout.on('data' , chunk => {
    console.log(chunk.toString())
})
//检测程序输输出
lsProcess.on('close', () => {
    console.log('Process is ending!')
})
//程序结束
//TODO: 了解一下其他的child_process