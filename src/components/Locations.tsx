"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Locations = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="locations"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Opera Desde Cualquier Lugar Del Mundo{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Para la seguridad de tu capital trabajamos con brokers/bancos
              internacionales.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/HugeGlobal.svg"
                alt="Maps"
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/duo.png"
                height={177}
                width={177}
                alt="Duo Markets Finance"
                className="m-4 lg:m-2"
              />
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/darwinexzerologo.webp"
                height={177}
                width={177}
                alt="Darwinex Zero"
                className="m-2 lg:m-0"
              />
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/Trust-Wallet-logo-es.png"
                height={177}
                width={177}
                alt="Trust Wallet"
                className="m-2 lg:m-0"
              />
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/metamaskwallet.png"
                height={177}
                width={177}
                alt="Metamask Wallet"
                className="m-2 lg:m-0"
              />
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/binanceicon.png"
                height={177}
                width={177}
                alt="Binance Exchange"
                className="m-2 lg:m-0"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Locations;
