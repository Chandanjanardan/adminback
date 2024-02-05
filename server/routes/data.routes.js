const express = require("express")
const dataRouter = express.Router()
// import from controller
const {addChatbot,test,getChatbot,addRag,getRag}= require("../controller/data.controller")

dataRouter.get("/kaiwa",test)
dataRouter.post("/kaiwa",addChatbot)
dataRouter.get("/chatbots",getChatbot)
dataRouter.post("/addrag",addRag)
dataRouter.get("/addrag",getRag)


module.exports= dataRouter