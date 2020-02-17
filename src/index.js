const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World0");s
});

app.listen(3000, ()=>{
    console.log("Listening....");
});