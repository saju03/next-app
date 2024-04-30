import { UrlParamsType } from '@/Interfaces';
import FlightResultPage from '@/components/Flight/_Result/page/FlightResultPage';
import React from 'react'

export default function page({params}:UrlParamsType) {

console.log(params);


    
  return (
    <div>
      
        <FlightResultPage params={params.Result}/>
      
    </div>  
  )
}
