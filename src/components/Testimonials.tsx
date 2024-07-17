"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Cards from "@/src/components/Cards";

const Testimonials = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const listCards = [
    {
      name: "Hugo",
      image:
        "https://luis-capital8.s3.us-east-2.amazonaws.com/hugoTestimonio.jpg",
      city: "Miami",
      country: "EEUU",
      rating: "4.5",
      testimonial:
        "Wow... I am very happy to use this FinTech to swap my cryptocurrencies, it turned out to be more than my expectations and so far there have been no problems. Capital 8 always the best",
    },
    {
      name: "Alejandra",
      image:
        "https://luis-capital8.s3.us-east-2.amazonaws.com/aleTestimonio.jpg",
      city: "Quito",
      country: "Ecuador",
      rating: "4.5",
      testimonial:
        "Estoy muy contenta con la atención al usuario que he recibido, han respondido todas mis inquietudes y cada vez que deseo comprar o vender Bitcoin atienden inmediatamente mi solicitud",
    },
    {
      name: "Richard",
      image:
        "https://luis-capital8.s3.us-east-2.amazonaws.com/richardTestimonio.jpg",
      city: "Ambato",
      country: "Ecuador",
      rating: "4.5",
      testimonial:
        "Soy cliente del fondo de inversión clásico y también de Darwinex Zero. Estoy muy satisfecho con el desempeño del gestor, cada día veo mi cuenta con las operaciones realizadas",
    },
    {
      name: "Stefy",
      image:
        "https://luis-capital8.s3.us-east-2.amazonaws.com/stefyTestimonio.jpg",
      city: "Puyo",
      country: "Ecuador",
      rating: "4.5",
      testimonial:
        "Uso estos servicios desde hace mucho tiempo, conozco personalmente a sus administradores y gestores de capital, son personas responsables y comprometidas con su trabajo",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="testimonials"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Con la Confianza de Miles de Clientes Satisfechos{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Estas son las historias de los clientes que nos han acompañado
              satisfactoriamente al utilizar nuestros servicios.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Cards listCards={listCards} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
