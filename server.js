var http = require('http');
var fs = require('fs');
/*function onRequest(request, response){
    console.log("A user made a request with " + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Welcome to node server");
    response.end();
}*/

function onRequest(request, response){
    console.log("Entered");
    if(request.method == "GET" && request.url == "/"){
        console.log("inside OnRequest");
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
}

http.createServer(onRequest).listen(5474);
console.log("Server is running....");