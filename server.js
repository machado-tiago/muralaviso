const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const PORT = 8080
const app = express()
app.use(express.static(path.join(__dirname,"views")))
app.listen(PORT, ()=>{
    console.log("app is running on PORT",PORT)
})

let posts = [
    {id:"id teste", title:"Título Teste",description:"Descrição teste"}
]

app.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts))
})
app.use(bodyParser.urlencoded({extended:true}))
app.post("/new",(req,res)=>{
    let id = generateId()
    let title = req.body.title
    let description = req.body.description

    let post = {id, title, description}
    posts.push(post)
    res.send(posts)
})

function generateId() {
    return Math.random().toString(36).substring(2,9)
}