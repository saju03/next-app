import { NextRequest, NextResponse } from "next/server";

import { authHandler } from "../_controllers/AuthController";

import { cookies } from 'next/headers'
import { TokenTypes, errToken } from "@/Interfaces";


// route /api
export async function POST(req: NextRequest,res:NextResponse) {

    

    const response:TokenTypes| ({ message: string; status: number; } | undefined)  = await authHandler(req,res);
    console.log(response);       
    console.log('////////////////////////////////////////');       
    
    const cookieStore = cookies()
    cookieStore.set({
        name:'auth',
        value:response?.access_token,
        httpOnly: true,
        maxAge:36000

    })
    //     if(response.status!==200){
//         return NextResponse.json({message:response.message},{status:response.status})
//     }else{
//         let config: Config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//           };
//         const url:string = `${process.env.API_URL}token`
//         const params = `username=${response?.userInfo?.userName}&password=${response.userInfo.password}&grant_type=password&type=auth`
//         const data:AxiosResponse = await axios.post(url,params,config)

//         console.log(data);
        


    return NextResponse.json( response );

// }
}