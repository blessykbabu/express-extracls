import mongoose from "mongoose"     
const schema=new mongoose.Schema({   //create schema structure
    name:{
        type:String
    },
    email:{
        type:String
    },
    hobby:{
        type:[String]
    }
})
export default mongoose.persons||  mongoose.model("person",schema);   