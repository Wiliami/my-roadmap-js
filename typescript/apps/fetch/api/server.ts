import { createServer } from 'node:http';
import home from './routes/index'

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end(home)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
}) 