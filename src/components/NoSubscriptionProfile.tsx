import React from 'react';
import Link from 'next/link';

const NoSubscriptionProfile: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-20 min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Considera suscribirte</h1>
                <p className="text-gray-700 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Servicio 1: Gestión Personalizada de Cuentas</h2>
                        <p className="text-gray-700 mb-4">
                            Beneficios de este servicio:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Acceso a estrategias de trading personalizadas.</li>
                            <li>Soporte dedicado 24/7.</li>
                            <li>Informes detallados y análisis de rendimiento.</li>
                        </ul>
                        <img src="https://via.placeholder.com/150" alt="Servicio 1" className="mx-auto mb-6" />
                        <Link href="/suscripcion" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Suscríbete a Gestión Personalizada
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Servicio 2: Consultoría en Inversiones</h2>
                        <p className="text-gray-700 mb-4">
                            Beneficios de este servicio:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Asesoramiento experto en diversificación de portafolio.</li>
                            <li>Acceso a investigaciones y análisis de mercado exclusivos.</li>
                            <li>Estrategias de inversión a largo plazo.</li>
                        </ul>
                        <img src="https://via.placeholder.com/150" alt="Servicio 2" className="mx-auto mb-6" />
                        <Link href="/suscripcion" className="bg-green-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-700 transition duration-300">
                            Suscríbete a Consultoría en Inversiones
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoSubscriptionProfile;
