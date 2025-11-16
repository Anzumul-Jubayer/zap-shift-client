import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center my-8">
            <Logo/>
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <hr className="border-gray-700 mb-6" />

        {/* Menu Links */}
        <ul className="flex justify-center gap-8 text-sm text-gray-300 mb-6 flex-wrap">
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Coverage</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        <hr className="border-gray-700 mb-6" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <FaLinkedin className="text-[#0A66C2] hover:opacity-80 cursor-pointer" />
          <FaXTwitter className="text-white hover:opacity-80 cursor-pointer" />
          <FaFacebook className="text-[#1877F2] hover:opacity-80 cursor-pointer" />
          <FaYoutube className="text-[#FF0000] hover:opacity-80 cursor-pointer" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
