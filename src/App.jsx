import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Banner from './banner/banner';
import ContactUs from "./contactUs/contactus"

import Amenities from './components/amenities';
function App() {
   return (
    <>
    <Header/>
    <Banner/>
    {/* <Amenities /> */}
  <h1 className='font-bold text-4xl text-gray-500 pt-4'>Location Advantage & Amenities</h1>

 <div className="flex w-full gap-4">
  {/* Image Section */}
  <div className="w-1/2">
    <img
      src="https://i.pinimg.com/736x/d4/79/e4/d479e44fca1d23b9e5c9dcc3ba9dad86.jpg"
      alt="Amenities"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Amenities Component */}
  <div className="w-1/2 pt-28">
    <Amenities />
  </div>
</div>
  {/* <ContactUs/> */}

    </>
  
   )
}

export default App
