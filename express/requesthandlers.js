
//*********this file is for handle request .what action is taken for that  request********** */


export function getRequesthandler(req,res){
    try {
        console.log("request received")
        res.json("request recieved")
    } catch (error) {
        console.log(error)
        res.json("error occured")
        return
    }
}