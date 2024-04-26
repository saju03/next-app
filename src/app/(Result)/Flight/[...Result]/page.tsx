import { UrlParamsType } from '@/Interfaces';
import FlightResultPage from '@/components/Flight/_Result/page/FlightResultPage';
import Footer from '@/components/Flight/_partials/Footer';
import HeaderNavBar from '@/components/Flight/_partials/HeaderNavBar';
import React from 'react'

export default function page({params}:UrlParamsType) {

console.log(params);


    
  return (
    <div>
        <HeaderNavBar/>
        <FlightResultPage params={params.Result}/>
        <Footer/>
    </div>  
  )
}
