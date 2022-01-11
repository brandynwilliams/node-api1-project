const server = require('./api/server.js');

const port = 5000;

server.listen(9000,()=>{
    console.log("server is live on port 9000")
})