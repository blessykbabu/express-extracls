import express from "express";
import dotenv from "dotenv";

import conn from "./connection1.js";
import router from "./routes4.js";

dotenv.config();

const app=express();

app.use(express.json()) //data from body
    

app.use(express.urlencoded({  //data from form
    extended:true
  
}));

app.use("/",express.static("./static"));
app.use("/api",router);

conn().then(()=>{   
    app.listen(process.env.PORT,error=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("Server started on: http:localhost:"+process.env.PORT);
    })
})
.catch(error=>{
    console.log(error);
})