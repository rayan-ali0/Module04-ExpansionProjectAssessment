import express from "express"
import {signIn, signUp} from "../Controllers/UserController.js";
const userRoute = express.Router();

userRoute.post("/signup", signUp);
userRoute.post("/signin", signIn);


export default userRoute;