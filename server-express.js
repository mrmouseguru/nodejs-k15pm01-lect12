import express from "express"

let app = express();


//endpoint, api, routing

app.get("/", (req, res) => {
    res.send("Hello from Express server");
});

//GET: /api/text
// read myfile.txt 
// response text to client

app.use("/files", express.static("public"));

//json
//GET: /api/test/json
//response to client: a json (a object)
//obj: 
   // text : "Hello",
   // num : 8888
   //res.json({})
app.get("/api/students/:id", (req, res) => {
    let studentId = req.params.id;
    console.log("Student Id:", studentId);
    res.json({
        message : `Hello ${studentId}`
    });
});

app.get("/api/test/json", (req, res) => {
    res.json({
        text : "hello",
        num : 8888
    });
});

app.listen(8888, () => {
    console.log("Now listening on port 8888");
})