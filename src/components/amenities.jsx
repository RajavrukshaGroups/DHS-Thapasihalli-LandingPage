"use client"

import { TreePalm, House, WavesLadder, Baby, Cctv, MessageSquare, CircuitBoard, Droplets, Barrel } from "lucide-react"
import bgimg from "../assets/about-bg-home-page.078221e9cadd9fda2ffe.png"
const Amenities = () => {
  const data = [
    {
      id: 1,
      title: "DATA 01",
      icon: <TreePalm className="w-9 h-9 text-gray-600" />,
      color: "border-orange-400",
      triangleColor: "border-b-orange-400",
      angle: 0, // 0 degrees
    },
    {
      id: 2,
      title: "DATA 02",
      icon: <House className="w-9 h-9 text-gray-600" />,
      color: "border-green-400",
      triangleColor: "border-b-green-400",
      angle: 40, // 40 degrees
    },
    {
      id: 3,
      title: "DATA 03",
      icon: <WavesLadder className="w-9 h-9 text-gray-600" />,
      color: "border-pink-400",
      triangleColor: "border-b-pink-400",
      angle: 80, // 80 degrees
    },
    {
      id: 4,
      title: "DATA 04",
      icon: <Baby className="w-9 h-9 text-gray-600" />,
      color: "border-purple-400",
      triangleColor: "border-b-purple-400",
      angle: 120, // 120 degrees
    },
    {
      id: 5,
      title: "DATA 05",
      icon: <Cctv className="w-9 h-9 text-gray-600" />,
      color: "border-blue-400",
      triangleColor: "border-b-blue-400",
      angle: 160, // 160 degrees
    },
    {
      id: 6,
      title: "DATA 06",
      icon: <MessageSquare className="w-9 h-9 text-gray-600" />,
      color: "border-gray-400",
      triangleColor: "border-b-gray-400",
      angle: 200, // 200 degrees
    },
    {
      id: 7,
      title: "DATA 07",
      icon: <CircuitBoard className="w-9 h-9 text-gray-600" />,
      color: "border-yellow-400",
      triangleColor: "border-b-yellow-400",
      angle: 240, // 240 degrees
    },
    {
      id: 8,
      title: "DATA 08",
      icon: <Droplets className="w-9 h-9 text-gray-600" />,
      color: "border-indigo-400",
      triangleColor: "border-b-indigo-400",
      angle: 280, // 280 degrees
    },
    {
      id: 9,
      title: "DATA 09",
      icon: <Barrel className="w-9 h-9 text-gray-600" />,
      color: "border-red-400",
      triangleColor: "border-b-red-400",
      angle: 320, // 320 degrees
    },
  ]

  // Calculate position based on angle
  const calculatePosition = (angle, radius = 45) => {
    const radian = angle * (Math.PI / 180)
    const x = 50 + radius * Math.cos(radian)
    const y = 50 + radius * Math.sin(radian)
    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    }
  }

  // Calculate triangle rotation based on angle
  const calculateTriangleRotation = (angle) => {
    return angle - 90 // Pointing towards center
  }

  return (
    <div style={{backgroundImage:`url(${bgimg})`}} className="flex items-center justify-center min-h pt-20 bg-gray-100 p-4">
      <div className="relative w-full max-w-[800px] aspect-square md:max-w-[700px] lg:max-w-[600px] xl:max-w-[500px]">
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
          <div className="w-[90%] h-[90%] rounded-full border-4 border-gray-200 flex flex-col items-center justify-center">
            <div className="text-red-500 font-bold text-xl">Modern</div>
            <div className="text-gray-700 font-medium text-lg">Amenities</div>
          </div>
        </div>

        {/* Data circles */}
        {data.map((item) => {
          const position = calculatePosition(item.angle)
          const triangleRotation = calculateTriangleRotation(item.angle)
          
          return (
            <div 
              key={item.id} 
              className="absolute w-1/5 h-1/5 z-0"
              style={{
                left: position.left,
                top: position.top,
                transform: position.transform
              }}
            >
              <div className="relative w-full h-full">
                {/* Triangle pointer */}
                <div
                  className={`absolute left-1/2 top-1/2 w-0 h-0 border-8 border-transparent ${item.triangleColor} z-20`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${triangleRotation}deg)`,
                    marginTop: '-40px' // Adjust this to control distance from circle
                  }}
                ></div>

                {/* Circle */}
                <div className="absolute inset-0 rounded-full bg-white shadow-lg transform transition-transform hover:scale-125">
                  <div
                    className={`w-full h-full rounded-full border-2 ${item.color} flex flex-col items-center justify-center p-2 text-center`}
                  >
                    <div className="bg-gray-200 rounded-full p-4 mb-1">{item.icon}</div>
                  </div>
                       <div className="font-bold text-gray-700 text-sm">{item.title}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Amenities