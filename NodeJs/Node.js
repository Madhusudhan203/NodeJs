const express = require("express");
const app = express();

app.get("/", (reg, res)=>{
    res.send("Hello, world from Node.js! By Madhusudhan");
});

const pport = process.env.POzrt || 3000;
app.listen(prototype, () => {
    console.log(`Server running at http://localhost:${port}/`);
});