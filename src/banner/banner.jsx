import { ArrowRight } from "lucide-react"
import { LocationEdit } from 'lucide-react';
import logo from "../assets/bg web.jpg"
{/* <LocationEdit /> */}
  const Banner = ()=> {
  return (
    // <div style={{ backgroundImage: `url(${logo})` }} className="min-h- bg-gray-50 relative overflow-hidden ">
     <div
        style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
        className="min-h-screen bg-gray-50 relative overflow-hidden"
            >
    {/* Background Pattern */}
     {/* <div className="absolute inset-0 w-full h-full opacity-10">
  <svg
    className="w-full h-full"
    preserveAspectRatio="none"
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <g stroke="#000" strokeWidth="1" opacity="0.3">
            <line x1="0" y1="0" x2="200" y2="200" />
            <line x1="100" y1="0" x2="300" y2="200" />
            <line x1="200" y1="0" x2="400" y2="200" />
            <line x1="0" y1="100" x2="200" y2="300" />
            <line x1="0" y1="200" x2="200" y2="400" />
            <line x1="800" y1="0" x2="1000" y2="200" />
            <line x1="900" y1="0" x2="1100" y2="200" />
            <line x1="1000" y1="0" x2="1200" y2="200" />
            <line x1="800" y1="100" x2="1000" y2="300" />
            <line x1="800" y1="200" x2="1000" y2="400" />
          </g>
        </svg>
      </div> */}

      {/* Navigation Arrow - Top Right */}
      <div className="absolute top-8 right-8 z-10">
        <button size="icon" className="bg-red-500 hover:bg-red-600 text-white rounded-lg w-12 h-12">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px- py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand */}
            {/* <div className="flex items-center gap-2 text-red-500">
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">Real Estate Agency</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-4 lg:pl-28 pt-28">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-0 leading-tight">
                Defence Habitat
                <br />
                Tapasihalli
              </h1>
              {/* <p className="text-gray-500 text-lg max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p> */}
            <div className="flex items-center gap-2  m-auto justify-center   ">
              <LocationEdit className="w-5 h-5  text-red-500" />
              <span className="text-lg font-medium">North-Bangalore</span>
            </div>
            </div>

            {/* CTA Button */}
            <div className="flex lg:pl-48 items-center justify-center  gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-lg">
                View Properties
              </button>
              <button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - House Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative lg:pr-40">
              {/* <img
                src={'https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/amenities/GJGD.jpg'}
                alt="Modern 3D house illustration"
                width={600}
                height={400}
                className="w-full max-w-lg lg:max-w-xl object-contain"
                priority
              /> */}
              {/* Shadow effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gray-300 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
      </div>
    </div>
  )
}
export default Banner