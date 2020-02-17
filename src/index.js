const express = require('express');
const app = express();

const mockUsers = [];

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.get('/users', (req, res) => {
    res.send(mockUsers);
});

app.listen(3000, ()=>{
    console.log("Listening....");
});