import { NextRequest, NextResponse } from "next/server";

import { authHandler } from "../controllers/AuthController";




// route /api
export async function POST(req: NextRequest,res:NextResponse) {
    const response = await authHandler(req,res);
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