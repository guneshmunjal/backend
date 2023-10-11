import express from "express";
 export const router = express.Router();


 import {handleResponse} from "../controller/Openai.js";




 router.post("/openai",handleResponse);
