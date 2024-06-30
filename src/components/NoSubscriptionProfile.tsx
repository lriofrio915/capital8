import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/src/lib/billing";
import prisma from "../lib/prisma";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";

const NoSubscriptionProfile: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  const userEmail = user?.email;
  // Fetch the user by email to get the user's ID
  const existingUser = await prisma.user.findUnique({
    where: { email: userEmail },
  });
  //Generate the customer link
  const manage_link = await generateCustomerPortalLink(
    "" + existingUser?.stripe_customer_id
  );
  //Create a link for the customer
  const checkout_link = await createCheckoutLink(
    "" + existingUser?.stripe_customer_id
  );

  return (
    <div className="flex flex-col items-center py-20 min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Considera Suscribirte
        </h1>
        <p className="text-gray-700 mb-8">
          En Capital 8 ofrecemos una gestión experta sin necesidad de entregar
          tu dinero, tendrás control total mientras nosotros nos encargamos de
          maximizar tus rendimientos con estrategias probadas y supervisión
          constante.
        </p>
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Detalles del servicio:
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>El tamaño mínimo de la cuenta a gesionar es de 1000 usd.</li>
              <li>
                Puedes realizar retiros o aumentar el capital cada que lo
                desees.
              </li>
              <li>
                El riesgo máximo asumido es el 4% del capital por cada
                operación.
              </li>
              <li>Jornada operativa de lunes a viernes: 9:30 am - 11:00 am.</li>
              <li>
                Se ejecuta una sola operación al día y no todos los días hay
                operaciones.
              </li>
              <li>
                El capital se invierte en el índice Nasdaq mediante Futuros y
                CFDs.
              </li>
            </ul>
            <Image
              src="https://luis-capital8.s3.us-east-2.amazonaws.com/trading-floor.jpg"
              alt="Trading Solutions"
              className="mx-auto mb-6"
              width={500}
              height={500}
            />
            <Link
              href={"" + checkout_link}
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Contratar un Gestor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSubscriptionProfile;
