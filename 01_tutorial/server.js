import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

const server = http.createServer(async (req,res) => {
    try {
        if(req.method === 'GET'){
            let filePath;
            if (req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method_not_allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Server_Error</h1>')
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});