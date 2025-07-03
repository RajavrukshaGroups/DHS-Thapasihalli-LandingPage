import logo from "../assets/logo.webp";
import projectname from "../assets/FASF.png";

const Header = () => {
  return (
    
    <header className="fixed top-0 left-0 w-full z-50 bg-[#3b60ac] bg-gradient-to-r from-[#6f90d1] via-[#446cbc] to-[#4267B2]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-6 py-3 h-auto sm:h-[120px]">
        {/* Left: Logo + Project Name */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] sm:h-[80px] w-auto object-contain"
          />
          <img 
            src={projectname}
            alt="Project Name"
            className="h-[40px] sm:h-[60px] w-auto object-contain filter invert brightness-0"
          />

          {/* Phone Number - shown below on small screens */}
          <div className="flex sm:hidden items-center text-white font-semibold text-sm mt-2">
            <span className="text-base mr-1">📞</span>
            <a
              href="tel:+918884735735"
              className="text-sm underline hover:text-blue-800"
            >
              +91-8884 735 735
            </a>
          </div>
        </div>

        {/* Right: Phone - only on sm and above */}
        <div className="hidden sm:flex items-center text-white font-semibold text-base md:text-lg">
          <span className="text-lg mr-1">📞</span>
          <a
            href="tel:+918884735735"
            className="hover:underline hover:text-white"
          >
            +91-8884 735 735
          </a>
        </div>
      </div>
    </header>

  );
};

export default Header;