'use client'
import React from 'react'
import FlightSearch from '../../components/Flight/_SearchPannel/page/FlightSearch'
import { Provider } from 'react-redux'
import store from '@/lib/_utils/_redux/store' 


export default function App() {
  return (
    <>
<Provider store={store}>
  <FlightSearch/>
</Provider>  
    </>
  )
} 
