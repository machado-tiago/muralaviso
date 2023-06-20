const express = require('express')
const bodyParser=require("body-parser")
const post = require("../model/post")

const router = express.Router()


router.get("/all", (req, res)=>{
    res.json(JSON.stringify(post.getAll()))
})
router.use(bodyParser.urlencoded({extended:true}))

router.post("/new",(req,res)=>{
    post.newPost(req.body.title,req.body.description)
    res.send(post.getAll())
})

module.exports=router