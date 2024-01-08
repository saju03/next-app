import { NextRequest, NextResponse } from "next/server";
import { getRefreshToken } from "../controllers/AuthController";

export const POST = async(req:NextRequest,res:NextResponse)=>{
    
   const response  = await getRefreshToken(req,res)
   return NextResponse.json({token:response},{status:200})  
    
}