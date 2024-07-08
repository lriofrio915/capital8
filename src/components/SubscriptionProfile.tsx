import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const SubscriptionProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-20 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Bienvenido a Capital 8
        </h1>
        <p className="text-gray-700 mb-8">
          A continuación procede a fondear tus cuentas y envía un correo a
          nuestro soporte (soporte@capital8tech.com) con tus credenciales de
          MetaTrader.
        </p>
        <div className="flex flex-row justify-center items-start gap-10">
          <div className="p-4 w-full max-w-sm">
            <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
              <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                CUENTA CLÁSICA
              </span>
              <div className="flex flex-col items-center">
                <Image
                  src="https://luis-capital8.s3.us-east-2.amazonaws.com/eightcap-hd-logo.png"
                  alt="Eightcap"
                  width={200}
                  height={100}
                  className="mb-4"
                />
              </div>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Inversión mínima 500 dólares americanos
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Visión a mediano y largo plazo
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Capital 8 no tiene acceso al retiro de tus fondos
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Puedes incrementar tu inversión o retirar el capital libremente
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Acompañamiento personalizado vía WhatsApp
              </p>
              <Link
                href="https://bit.ly/3ziIrph"
                target="_blank"
                className="flex items-center text-center justify-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
              >
                Fondear Cuenta
              </Link>
            </div>
          </div>
          <div className="p-4 w-full max-w-sm">
            <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
              <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                CUENTA D-ZERO
              </span>
              <div className="flex flex-col items-center">
                <Image
                  src="https://luis-capital8.s3.us-east-2.amazonaws.com/dar-zero.png"
                  alt="Darwinex Zero"
                  width={200}
                  height={100}
                  className="mb-4"
                />
              </div>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Inversión mínima 500 dólares americanos
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Visión a mediano y largo plazo
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Capital 8 no tiene acceso al retiro de tus fondos
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Puedes incrementar tu inversión o retirar el capital libremente
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <FiCheckCircle size={16} color="#fff" />
                </span>
                Acompañamiento personalizado vía WhatsApp
              </p>
              <Link
                href="https://bit.ly/4cwGovX"
                target="_blank"
                className="flex items-center text-center justify-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
              >
                Suscribirse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionProfile;
