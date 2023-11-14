//**********this file is for create routes*************** */


import {Router} from "express"
import * as rh from "./request-handlers2.js"    
const router=Router()
router.route("/set-data").post(rh.setdata)
router.route("/get-data").get(rh.getdata)
router.route("/edit-data").put(rh.editdata)
router.route("/delete-data").delete(rh.deletedata)
export default router

