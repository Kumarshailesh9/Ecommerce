import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

router.get('/auth-user', requireSignIn , (req,res) => {
  res.status(201).send({ok:true});
})

router.get('/auth-admin', requireSignIn , isAdmin , (req,res) => {
  res.status(201).send({ok:true});
})

export default router;
