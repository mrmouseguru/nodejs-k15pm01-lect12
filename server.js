import http from "http"

let server = http.createServer();

let handleRequest = (req, res) => {
    console.log(`method:  ${req.method}`);
    console.log(`url: ${req.url}`);
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from a Node server");
};

server.on("request", handleRequest);

server.listen(7777, () =>{
    console.log("Now listening on port 7777");
});