import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-5 px-4  mt-5 md:mt-10">
      <div className="max-w-7xl mx-auto  text-white flex flex-col items-center space-y-3 ">
        <div className="space-y-2">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
            KeenKeeper
          </h1>
          <p className="text-center text-[10px] md:text-[15px] text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center space-y-2">
          <p className="font-semibold md:text-lg "> Social Links</p>
          <div className="flex gap-2 text-black ">
            <Link
              href=""
              className=" md:text-2xl hover:bg-green-200 bg-white rounded-full p-1 md:p-2"
            >
              <FaInstagram />{" "}
            </Link>
            <Link
              href="https://www.facebook.com/profile.php"
              className="md:text-2xl hover:bg-green-200 bg-white rounded-full p-1 md:p-2"
            >
              <FaFacebook />{" "}
            </Link>
            <Link
              href="https://x.com/amirislambd313"
              className="md:text-2xl hover:bg-green-200 bg-white rounded-full p-1 md:p-2"
            >
              <FaXTwitter />{" "}
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between flex-col text-center md:flex-row w-full text-[10px] md:text-[14px] text-gray-300 space-y-2">
          <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <p>Privacy Policy</p>
            <p> Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
