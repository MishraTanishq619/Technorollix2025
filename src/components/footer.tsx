// components/Footer.tsx
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import ButtonLanding from "./sub-component/button-landing";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 relative bottom-0 w-full ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex space-x-4 ml-40">
          <a href="#" className="text-red-500 hover:text-red-400 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-red-500 hover:text-red-400 text-xl">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-red-500 hover:text-red-400 text-xl">
            <FaInstagram />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/gallery" className="hover:text-gray-400">Gallery</a>
          <a href="/team" className="hover:text-gray-400">Team</a>
        </div>

        {/* Contact Button */}
        <div className="mt-6 md:mt-0">
          {/* <button className="bg-red-700 text-white px-6 py-2 rounded-full flex items-center text-lg font-semibold shadow-lg relative group transition duration-300">
            Contact Us
            <FaPhoneAlt className="ml-2" />
            <span className="absolute inset-0 rounded-full blur-md bg-yellow-500 opacity-50 group-hover:opacity-80 transition"></span>
          </button> */}
          <ButtonLanding  label="contact us" link="/team"/>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-500 my-6 w-3/4 mx-auto" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">© 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
