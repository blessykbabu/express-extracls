import mongoose from "mongoose"     
const schema=new mongoose.Schema({   //create schema structure
    username:{
        type:String
    },
    profile:{
        type:String
    }
})
export default mongoose.Logins||  mongoose.model("Login",schema);   