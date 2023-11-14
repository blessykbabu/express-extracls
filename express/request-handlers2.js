import userSchema from "./schema/user.schema.js";
export async function  setdata(req,res){
    try {
        let {name,email,hobby}=req.body;
        let result=await userSchema.create({
            name,
            email,
            hobby
        })
        if(result){
            return res.status(200).send("Your data added successfully")
        }
    return res.status(500).send("data not added")
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
        
    }
}

export async function getdata(req,res){
    try {
        let result=await userSchema.find()

        if(result){
            res.json(result)
            return res.status(200).send("Your data displayed")
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}
export async function editdata(req,res){
    try {
        let {id}=req.query;
        let data=req.body;
        let result=await userSchema.updateOne({_id:id},data)
        res.json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}
export async function deletedata(req,res){
    try {
        let {id}=req.query;
        let result=await userSchema.deleteOne({_id:id})
        res.json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}
