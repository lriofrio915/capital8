import React from 'react';
import Link from 'next/link';

const SubscriptionProfile: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center mt-20">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a Capital 8</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="https://example.com/page1" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Cuenta Tradicional
          </Link>
          <Link href="https://example.com/page2" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
            Cuenta Darwinex Zero
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionProfile;
