const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req);
    console.log(req.url,req.method,req.headers);
    if(req.url === '/')
    {
        res.setHeader('content-type','text/html');
        res.write('<html><head></head><body>Hello from node server /<form action="" method="POST"><input type="text" name="message"></form></body></html>');
        return res.end();

    }
    res.setHeader('content-type','text/html');
    res.write('<html><head></head><body>Hello from node server</body></html>');
    res.end();

});


server.listen(3030);