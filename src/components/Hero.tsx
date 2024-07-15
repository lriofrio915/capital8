"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "@/src/utils/getScrollAnimation";
import ButtonPrimary from "./misc/ButtonPrimary";
import ScrollAnimationWrapper from "@/src/components/ScrollAnimationWrapper";

interface User {
  name: string;
  number: string;
  icon: string;
}

interface HeroProps {
  listUser?: User[];
}

const Hero: React.FC<HeroProps> = ({
  listUser = [
    {
      name: "Inversores",
      number: "+390",
      icon: "https://luis-capital8.s3.us-east-2.amazonaws.com/icon/heroicons_sm-user.svg",
    },
    {
      name: "Efectividad",
      number: "+60%",
      icon: "https://luis-capital8.s3.us-east-2.amazonaws.com/icon/gridicons_location.svg",
    },
    {
      name: "Riesgo-Beneficio",
      number: "1:1",
      icon: "https://luis-capital8.s3.us-east-2.amazonaws.com/icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Gestión de Cuentas de <strong>Trading</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Nuestro equipo de gestores expertos invierten en el mercado de
              índices y acciones mediante futuros y cfds.
            </p>
            <ButtonPrimary>Comenzar</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="https://luis-capital8.s3.us-east-2.amazonaws.com/Illustration1.png"
                alt="Gestion de activos"
                quality={100}
                width={612}
                height={383}
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
              initial="hidden"
              animate="visible"
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <Image
                    src={listUsers.icon}
                    className="h-6 w-6"
                    alt={listUsers.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
