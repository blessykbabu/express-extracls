
import {Router} from "express"
import * as rh from "./request-handlers3.js"    
const router=Router()
router.route("/upload").post(rh.uploadFile)
router.route("/get-profile").get(rh.getProfile)

export default router