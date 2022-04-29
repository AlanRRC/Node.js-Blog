const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// on is an event listener, a data event here
// readStream.on('data', (chunk) => {
//     console.log('new chunk')
//     console.log(chunk)
//     writeStream.write('\n NEW CHUNK\n')
//     writeStream.write(chunk)
//})

//  Piping
readStream.pipe(writeStream)