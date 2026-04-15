const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Docker + ECR Task: Success! App is Live!</h1>');
});
server.listen(8080, '0.0.0.0', () => {
    console.log('Server running on port 8080');
});
