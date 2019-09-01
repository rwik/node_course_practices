const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req);
    //console.log(req.url,req.method,req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html><head></head><body>Hello from node server</body></html>');
    res.end();

});


server.listen(3030);