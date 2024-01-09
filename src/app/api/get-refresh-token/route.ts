import { NextRequest, NextResponse } from "next/server";
import {  getRefreshToken } from "../_controllers/AuthController";
import { TokenTypes } from "@/Interfaces";

export const POST = async(req:NextRequest,res:NextResponse)=>{
    
   const response:TokenTypes = await getRefreshToken(req,res)
   return NextResponse.json({token:response},{status:200})  
    
}