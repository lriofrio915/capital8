"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Elije Tu Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Escoge el paquete que mejor se adapte a tus necesidades y explora
              los Mercados Financieros.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="https://luis-capital8.s3.us-east-2.amazonaws.com/Pack.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Gestión Clásica
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Cuenta mínima requerida: 3000 USD
                  </li>
                  <li className="relative check custom-list my-2">
                    Activos de gestión: Índices y Divisas
                  </li>
                  <li className="relative check custom-list my-2">
                    Comisión de éxito: 30% de las ganancias
                  </li>
                  <li className="relative check custom-list my-2">
                    Comisión de gestión anual: 1% de la cuenta
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Fondea tu Cuenta
                  </p>
                  <ButtonOutline>Me Interesa</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="https://luis-capital8.s3.us-east-2.amazonaws.com/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Gestión Darwinex{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Cuenta requerida: Darwinex Zero
                  </li>
                  <li className="relative check custom-list my-2">
                    Activos de gestión: Acciones e Índices
                  </li>
                  <li className="relative check custom-list my-2">
                    Comisión de éxito: sin cobro
                  </li>
                  <li className="relative check custom-list my-2">
                    Comisión de gestión anual: $150
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Suscríbete
                  </p>
                  <Link href={"https://bit.ly/4cwGovX"} target="_blank">
                    <ButtonOutline>Me Interesa</ButtonOutline>
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="https://luis-capital8.s3.us-east-2.amazonaws.com/Premium.png"
                    width={145}
                    height={165}
                    alt="Crypto Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Criptoactivos{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Intercambia Bitcoin por Dólares y viceversa
                  </li>
                  <li className="relative check custom-list my-2">
                    Intercambia USDT por Dólares y viceversa
                  </li>
                  <li className="relative check custom-list my-2">
                    Recibe los criptoactivos en tu wallet personal
                  </li>
                  <li className="relative check custom-list my-2">
                    Tasa de cambio promedio: 4%{" "}
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Solicítalo
                  </p>
                  <Link href={"https://bit.ly/4cLzWlq"} target="_blank">
                    <ButtonOutline>Me Interesa</ButtonOutline>
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
