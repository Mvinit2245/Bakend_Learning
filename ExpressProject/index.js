let express = require("express")

let app = express()
app.use(express.json())

app.get("/", (req,res) =>{ //http://localhost:8000/
    res.send({status:1,msg:"Home Page API"})
})

app.get("/news", (req,res) =>{
    res.send({status:1,msg:"News API"})
})

app.get("/products", (req,res) =>{
    res.send({status:1,msg:"Products API"})
})

app.post("/login", (req,res) =>{
    console.log(req.body)//object
    res.send({status:1,msg:"Login API", data:req.body})
})

app.listen("8000")