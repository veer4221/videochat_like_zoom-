const express = require('express');
const app = express();
const PORT = 4000;
app.get('/',(req,res)=>res.send("home page"));
app.listen(PORT,()=>console.log("http://localhost:4000"));