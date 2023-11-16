import { Router } from "express";

import multer from 'multer'


import * as rh from "./request-handlers4.js";
const storage =multer.diskStorage({
    destination:"./files",
    filename:(req,file,cb)=>{
        let date=new Date()
    cb(null,String(date)+file.originalname);
}
});
const uploader=multer({storage:storage});//storage objct

const router = Router()
router.route("/upload").post(uploader.array("profile",5),rh.uploadFile)
router.route("/get-file").get(rh.getFile)

//myfile is a input filed name
// router.route("/get-file/:file").get((req,res)=>{
//     let fileName=req.params;
//     res.sendFile(path.resolve(`./files/${fileName.file}`));
// })
export default router;