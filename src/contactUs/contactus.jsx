import { MapPin, Mail } from "lucide-react"
import React, { useState } from "react"; 
import toast from "react-hot-toast";

const ContactForm=()=> {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject:"Thapasihalli"
  });
    // ✅ Line added: Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
   // ✅ Line added: Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // alert("Message sent successfully!");
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        // alert("Failed to send message.");
        toast.error("Failed to send message.");
      }
    } catch (error) {
      // console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };


  return (
    <div className="min-h bg-sky-100 py-12 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <h1 className="text-4xl font-normal text-gray-600 mb-2">Contact us!</h1> */}
                      <h1 className='font-bold text-4xl text-[#24447c] pt-5 '> Contact us!</h1>

          {/* <div className="w-24 h-0.5 bg-gray-600 mx-auto"></div> */}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-[#d0342c]">
                  <MapPin className="w-full h-full" />
                </div>
                <span className="text-gray-600 text-sm font-semibold">Behind Swathi Garden Hotel,
                    E Block, Sahakarnagar,</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-[#d0342c]">
                  <Mail className="w-full h-full" />
                </div>
                <span className="text-gray-600 text-sm font-semibold"> info@defencehousingsociety.com</span>
              </div>
            </div>

            {/* Map Image */}
            <div className="w-full border-2 rounded-md border-amber-950 ">
              <iframe className="lg:w-[530px] w-full justify-center flex m-auto" height="320px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed/v1/place?q=Defence%20Habitat%20Housing%20Co-operative%20Society%2C%20behind%20Swathi%20Gardenia%20Restaurant%2C%20Sahakar%20Nagar%2C%20Byatarayanapura%2C%20Bengaluru%2C%20Karnataka%20560092&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                  placeholder="EMAIL"
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>
              {/* Mobile Field */}
              <div>
                <input
                type="number"
                name="phone"
                value={formData.mobile}
                onChange={handleChange}
                  placeholder="MOBILE NO"
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full px-4 py-4 bg-white border-0 rounded-lg shadow-sm text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-4 px-6 rounded-full transition-colors duration-200 text-lg tracking-wide"
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