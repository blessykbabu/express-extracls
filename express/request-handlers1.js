import todoSchema from "./schema/todo.schema.js"
export async function  setTodo(req,res){
    try {
        let {todo}=req.body;
        let result=await todoSchema.create({
            todo,
            completed:false
        })
        if(result){
            return res.status(200).send("Todo added successfully")
        }
    return res.status(500).send("not added")
        
    } catch (error) {
        console.log(error);
        return Status(500).send("error occured")
        
    }
}
export default setTodo


export async function getTodo(req,res){
    try {
       let result=await todoSchema.find()
       if(result){
        return res.json(result)
       }
        return res.json({msg:"There is no todo to show"})
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
        
    }
}