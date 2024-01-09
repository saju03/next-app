'use client'
import React from 'react'
import FlightSearch from './FlightSearch'
import { Provider } from 'react-redux'
import store from "@/app/_utils/redux/Store";


export default function App() {
  return (
    <>
<Provider store={store}>
  <FlightSearch/>

</Provider>

    </>
  )
}
