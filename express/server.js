import express from "express"
import router from "./routes.js"   //import routers from routes file
const app=express()
app.use(express.json())
app.use("/",express.static("./static"))   //express.static is a middleware for read static files. create all html files in static folder
app.use("/api",router) //this is router.commonly give api routes.all request gothrough api routes
app.listen(3000,(error)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log("server start on the port 3000")
})