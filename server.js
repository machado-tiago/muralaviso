const express = require("express")
const path = require("path")
const postController = require("./controller/postController")

const PORT = 8080
const app = express()
app.listen(PORT, ()=>{
    console.log("app is running on PORT",PORT)
})

app.use("/post",express.static(path.join(__dirname,"views")))
app.use("/post", postController)