const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    //  ===>bad solution
    // fs.readFile(`${__dirname}/test-file.txt`, (err, data) => {
    //     if(err){
    //         console.log(err);
    //     }

    //     res.end(data);
    // })
    
    // const readable = fs.createReadStream(`${__dirname}/test-file.txt`)

    //  ===> Simple solution , but it can occur backpressure in big file, when the response cannot send the data nearly as fast as its receiving it from the file.
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // });

    // readable.on('end', () => {
    //     res.end();
    // })

    // readable.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // })

    //  ===> prevent backpressure
    // readable.pipe(res)
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listen')
})
