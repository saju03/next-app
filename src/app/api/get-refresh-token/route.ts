import { NextRequest, NextResponse } from "next/server";
import {  getRefreshToken } from "../controllers/AuthController";
import { TokenTypes } from "@/Interfaces";

export const POST = async(req:NextRequest,res:NextResponse)=>{
    
   const response:TokenTypes|undefined  = await getRefreshToken(req,res)
   return NextResponse.json({token:response},{status:200})  
    
}