import Footer from '@/app/_SearchPannel/_partials/Footer';
import HeaderNavBar from '@/app/_SearchPannel/_partials/HeaderNavBar';
import React from 'react'

export default function page(params:Array<string>) {
console.log(params);

    
  return (
    <div>
        <HeaderNavBar/>
        <Footer/>
    </div>
  )
}
