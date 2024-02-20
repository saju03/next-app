import FlightResultPage from '@/components/Flight/_Result/page/FlightResultPage';
import Footer from '@/components/Flight/_partials/Footer';
import HeaderNavBar from '@/components/Flight/_partials/HeaderNavBar';
import React from 'react'
interface ParamsType {
  params: {
    Result: string[];
  };
  searchParams: Record<string, any>;
}
export default function page({params}:ParamsType) {



    
  return (
    <div>
        <HeaderNavBar/>
        <FlightResultPage params={params.Result}/>
       
        <Footer/>
    </div>  
  )
}
