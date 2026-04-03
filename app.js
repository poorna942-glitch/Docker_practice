cat <<EOF > app.js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hands-on Success - Poorna');
});
server.listen(8080, () => console.log('Running...'));
EOF
