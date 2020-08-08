let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (q.pathname === '/'){
        q.pathname = '/index.html'
    }
    let filepath = '.' + q.pathname;
    fs.readFile(filepath, (error,data) => {
        if (error){
            fs.readFile('404.html', (error,data) => {
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            })
        } else {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();   
        }
    })
    
}).listen(8080)