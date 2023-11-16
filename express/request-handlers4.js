import path from "path"
export async function uploadFile(req,res){
    try {
        let {username}=req.body
        console.log(req.files)
        
      
        return res.json("file uploaded")
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}
export async function getFile(req,res){
    try {
        let {file}=req.query
        return res.sendFile(path.resolve(`./files/${file}`))
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}

