import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <div>Capital 8</div>
          <p className="mb-4">
            <strong className="font-medium">Automatiza</strong> y diversifica la
            gestión de tu Trading.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <Link
              href="https://www.facebook.com/capital8ec?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/icon/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/icon/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com/cap8_funding?igsh=bmxsMjIwdXc5Mmg2"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/icon/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Capital 8 FinTech
          </p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LaslesVPN?
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
