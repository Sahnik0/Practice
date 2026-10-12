//To read or write a large file we directly can't use the fs.readFile or fs.writeFile methods 
//because they read or write the entire file into memory, 
//which can lead to performance issues or memory exhaustion for large files.
//Where streams come into play. Streams allow us to read or write data in chunks,
//making it possible to handle large files without running into memory issues.

//To read a large file, we can use the fs.createReadStream
//To write a large file, we can use the fs.createWriteStream

const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('largeFile.txt', { encoding: 'utf8' });
const writeStream = createWriteStream('outputFile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading the file.');
    writeStream.end();
});

readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing the file:', err);
});