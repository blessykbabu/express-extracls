//**********this file is for create routes*************** */


import {Router} from "express"
import * as rh from "./requesthandlers.js"    // there are so many request handlers to import ,from requesthandler file so we use "*" to import all functions and give a common name here "rh"
const router=Router()
router.route("/abcd").get(rh.getRequesthandler)
router.route("/abcd").post(rh.getRequesthandler)
export default router