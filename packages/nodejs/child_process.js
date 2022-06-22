const { spawn } = require('child_process')

const lsProcess = spawn('ls', ['-a', '-l'])

lsProcess.stdout.on('data' , chunk => {
    console.log(chunk.toString())
})

lsProcess.on('close', () => {
    console.log('Process is ending!')
})
//TODO: 了解一下其他的child_process