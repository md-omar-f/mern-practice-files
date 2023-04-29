const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Weocome to our home page!');
    }
    if(req.url === '/about'){
        res.end('A short history of us!');
    }
    res.end(`
    <h1>Opps!</h1>
    <p>The page you are searching is not exists</p>
    <a href = "/">Back to the home</a>
    `)
});
server.listen(5000);