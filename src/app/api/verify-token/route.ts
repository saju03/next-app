import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getRefreshToken, getToken } from "../_helpers/CommonHelper";
import { TokenData } from "@/Interfaces";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function GET(req: NextRequest, res: NextResponse) {
  
  
    // TOKEN AND OTHER DETILS ARE SOTRED IN THE HTTP COOKIES 
    
  const cookieStore:ReadonlyRequestCookies = cookies();
  const cookie:RequestCookie[] = cookieStore.getAll();
  const Data:string|undefined = cookie.find((cookie) => cookie.name === "auth")?.value;
  const tokenData:TokenData  = Data && JSON.parse(Data);

  if (tokenData) {
// IF TOKEN EXEST IN THE COOKIE THEN CHECK FOR REFRESH TOKEN IS REQUIRED 

    const currentDate: Date = new Date();
    const expTime: Date = new Date(tokenData.expireTime);
    if (currentDate >= expTime) {
// CALLING REFRESH TOKEN IF IT NECCESSORY ACCORDING TO THE EXPIRE TIME CONDITION

      const token = await getRefreshToken(tokenData.refresh_token);
      if (token != undefined) {
        cookieStore.set({
          name: "auth",
          value: JSON.stringify(token),
          httpOnly: true,
          maxAge: 36000,
        });
        return NextResponse.json({ message: "access granded" }, { status: 200 });
      } else {
        // in case IF THE REFRESH TOKEN EXIST AND CODULDNT GET NEW TOKEN WITH IT
        const token  = await getToken();
        if (token != undefined) {
            cookieStore.set({
              name: "auth",
              value: JSON.stringify(token),
              httpOnly: true,
              maxAge: 36000,
              
            });
            return NextResponse.json({ message: "access granded" }, { status: 200 });
          } else {
            return NextResponse.json(
              { message: "not authenticated cookie error" },
              { status: 401 }
            );
          }

      }
    } 
    else {
        // IF THE TOKEN EXIST AND IT IS VALID THEN RETURN
      return NextResponse.json({ message: "access granded" }, { status: 200 });
    }

  }else{
    // IF TOKEN DOES NOT EXIST THEN CALL FOR NEW TOKEN
    const token  = await getToken();
    if (token != undefined) {
        cookieStore.set({
          name: "auth",
          value: JSON.stringify(token),
          httpOnly: true,
          maxAge: 36000,
          
        });
        return NextResponse.json({ message: "access granded" }, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "not authenticated cookie error" },
          { status: 401 }
        );
      }
  }


}
