import fs from 'fs/promises';

// readFile() -async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data)
    } catch (error) {
        console.log(error);
    }
};

// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log('File written')
    } catch (error) {
        console.log(error)
    }
};

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nAppend text');
        console.log('File appended')
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();