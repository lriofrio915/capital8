import { FiCheckCircle, FiUser } from "react-icons/fi";
import Box from "@/src/components/Box";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { auth, signIn } from "@/src/auth";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <section>
      <Box>
        <div className="flex flex-col text-center w-full mb-20 mt-12">
          <div className="flex justify-center space-x-1">
            <FontAwesomeIcon
              icon={faStar}
              className="w-5 h-5 text-yellow-500"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="w-5 h-5 text-yellow-500"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="w-5 h-5 text-yellow-500"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="w-5 h-5 text-yellow-500"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="w-5 h-5 text-yellow-500"
            />
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-2">
            Gestión de Cuentas de Trading
          </p>
          <h1 className="text-6xl font-bold title-font mt-4 mb-2 text-gray-800">
            Potencia tu Inversión
          </h1>
          <h2 className="mt-4 mb-8">
            Nuestro equipo opera activamente en el mercado de
            <br />
            índices y acciones.
          </h2>
          <div className="p-4 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                PROFESIONAL
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                SUSCRIPCIÓN DE GESTIÓN
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$150</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /año
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Gestión integral de cuentas de Trading (cuenta clásica y/o
                darwinex zero)
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Riesgo bajo con estrategias controladas
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Operamos con brokers altamente regulados
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Tamaño de cuenta mínimo a gestionar: 500 usd
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Soporte especializado disponible 24/7 vía WhatsApp
              </p>
              {user ? (
                <Link
                  className="flex items-center text-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                  href={"/dashboard"}
                >
                  Contratar un Gestor
                </Link>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn();
                  }}
                >
                  <button
                    className="flex items-center text-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
}
