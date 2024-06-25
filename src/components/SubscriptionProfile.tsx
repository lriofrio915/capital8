import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SubscriptionProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-20 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Bienvenido a Capital 8</h1>
        <p className="text-gray-700 mb-8">
          Facilitamos su éxito en los mercados financieros con una gestión personalizada de cuentas de trading. Seleccione el tipo de cuenta que desea operar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="https://luis-capital8.s3.us-east-2.amazonaws.com/eightcap-hd-logo.png"
              alt="Eightcap"
              width={200}
              height={100}
              className="mb-4"
            />
            <Link
              href="https://bit.ly/3ziIrph"
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Cuenta Tradicional
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://luis-capital8.s3.us-east-2.amazonaws.com/dar-zero.png"
              alt="Darwinex Zero"
              width={200}
              height={100}
              className="mb-4"
            />
            <Link
              href="https://bit.ly/4cwGovX"
              className="bg-green-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-700 transition duration-300"
            >
              Cuenta D-Zero
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionProfile;
