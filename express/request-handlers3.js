import loginSchema from "./schema/login.schema.js"
export async function uploadFile(req,res){
    try {
        let {username,profile}=req.body
        console.log(username,profile)
        let result=await loginSchema.create({
            username,
            profile
        })
        if(result){
            return res.json("file upload")
        }
        return res.status(500).send ("error occured")
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}


export async function  getProfile(req,res){
    try {
        let data=await loginSchema.find();
        return res.json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}