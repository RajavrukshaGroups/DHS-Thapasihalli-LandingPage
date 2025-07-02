import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Banner from './banner/banner';
import ContactUs from "./contactUs/contactus"
import Amenities from './components/amenities';
import bgimg from "./assets/about-bg-home-page.078221e9cadd9fda2ffe.png";
import PriceChart from "./assets/Marasandra Table.png";
import Footer from './components/footer/footer';
import LocationAdvantage from "./assets/location_advantage.gif";

function App() {  

  return (
    <>
      <Header/>
      <Banner/>
      <div>
         {/* <h1>there are some issue has beeen dittected</h1> */}
      </div>

        <div style={{backgroundImage:`url(${bgimg})`}} className="flex flex-col mb-[50px] md:mb-100px h-[800px] md:flex-row w-full gap-4 px-4 ">
          {/* Image Section - will appear first on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-none ">
            {/* <h1 className='font-bold text-2xl text-gray-800 pt-5 underline'>Location Advantage </h1> */}
            <h1 className='font-bold text-4xl text-[#24447c] pt-5 '> Location Advantage</h1>

            <img
                src={LocationAdvantage} 
                alt="Amenities"
                className="w-full pt-10 h-[450px] md:h-[879px] md:mt-3 object-cover"
              />
          </div>
          {/* Amenities Component - will appear second on mobile */}
          <div className="w-full md:w-1/2 pt-4 md:pt-44 order-2 md:order-none">
            <h1 className='font-bold text-4xl text-[#24447c] pt-5 '> Amenities</h1>
            <Amenities/>
          </div>
        </div>
       <div className="p-10 pt-[400px] md:pt-0">
        <img src={PriceChart} alt="price_chart" />
      </div>
      
      <ContactUs/>

      <Footer/>
    </>
  )
}

export default App