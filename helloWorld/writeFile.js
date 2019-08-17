const name = require('./hello.js')
const fs = require('fs');
fs.writeFileSync('server.log', '\n We have a new line');
fs.writeFileSync('server.log', name);
