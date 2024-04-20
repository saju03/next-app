import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { TokenData } from './Interfaces';
import { getRefreshToken, getToken } from './app/api/_helpers/CommonHelper';


export async function middleware (req:NextRequest,res:NextResponse){
    
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
            const res:NextResponse = NextResponse.next();
            res.cookies.set('auth',JSON.stringify(token), {
              httpOnly: true,
              maxAge: 1800, // 1 week
              path: '/', // The cookie is available in all pages
            })
  
            return res;
           
          } else {
            // in case IF THE REFRESH TOKEN EXIST AND CODULDNT GET NEW TOKEN WITH IT
            const token  = await getToken();
            if (token != undefined) {
              const res:NextResponse = NextResponse.next();
              res.cookies.set('auth',JSON.stringify(token), {
                httpOnly: true,
                maxAge:1800, // 1 week
                path: '/', // The cookie is available in all pages
              })
    
              return res;
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
            return NextResponse.next()  
        }
    
      }else{
        // IF TOKEN DOES NOT EXIST THEN CALL FOR NEW TOKEN
        
        const token:TokenData|undefined = await getToken();
  
        if (token != undefined) {
          const res:NextResponse = NextResponse.next();
          res.cookies.set('auth',JSON.stringify(token), {
            httpOnly: true,
            maxAge: 1800, // 1 week
            path: '/', // The cookie is available in all pages
          })

          return res;
          } else {  
            return NextResponse.json(
              { message: "not authenticated cookie error" },
              { status: 401 }
            );
          }
      }


   
}