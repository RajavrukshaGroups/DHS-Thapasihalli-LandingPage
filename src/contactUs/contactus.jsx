import { MapPin, Mail } from "lucide-react"
// import Image from "next/image"

const ContactForm=()=> {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-normal text-gray-800 mb-2">Contact us!</h1>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-yellow-500">
                  <MapPin className="w-full h-full" />
                </div>
                <span className="text-gray-600 text-lg">Lorem ipsum dolor sit amet</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-yellow-500">
                  <Mail className="w-full h-full" />
                </div>
                <span className="text-gray-600 text-lg">Lorem ipsum dolor sit amet</span>
              </div>
            </div>

            {/* Map Image */}
            <div className="w-full">
              <img
                src="/map-image.png"
                alt="Map location"
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg grayscale"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={6}
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-4 px-6 rounded-full transition-colors duration-200 text-lg tracking-wide"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactForm