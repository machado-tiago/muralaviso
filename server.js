const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const post = require("./model/post")

const PORT = 8080
const app = express()
app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT, ()=>{
    console.log("app is running on PORT",PORT)
})



app.get("/all", (req, res)=>{
    res.json(JSON.stringify(post.getAll))
})
app.use(bodyParser.urlencoded({extended:true}))

app.post("/new",(req,res)=>{
    post.newPost(req.body.title,req.body.description)
    res.send(post.getAll)
})