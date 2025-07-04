const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3b60ac] via-[#446cbc] to-[#a9e4f6] text-[#24447c] py-4 px-4 sm:px-6  shadow-inner">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center text-center">
        {/* Company Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white">
            Defence Habitat Housing{" "}
            <span className="whitespace-nowrap">Co-Operative</span> Society Ltd.
          </h4>
          <p className="text-sm leading-5 text-white">
            Behind Swathi Garden Hotel,
            <br />
            E Block, Sahakarnagar,
            <br />
            Bangalore - 560092, Karnataka
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white">Contact</h4>
          <p className="text-sm">
            📞{" "}
            <a
              href="tel:+918884735735"
              className="hover:underline hover:text-gray-300 text-white transition"
            >
              +91-8884 735 735
            </a>
          </p>
          <p className="text-sm">
            ✉️{" "}
            <a
              href="mailto:info@defencehousingsociety.com"
              className="hover:underline hover:text-gray-300 text-white transition"
            >
              info@defencehousingsociety.com
            </a>
          </p>
        </div>

        {/* Office Hours */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white ">Office Timings</h4>
          <p className="text-sm text-white">Wed - Mon: 9:30 AM – 6:30 PM</p>
          <p className="text-sm text-white">Weekly Off: Tuesday</p>
        </div>
      </div>

      <div className="border-t border-[#24447c]/30 mt-6 pt-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Defence Habitat Housing Co-Operative
        Society Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;