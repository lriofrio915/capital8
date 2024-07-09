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
import { auth } from "../auth";
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
    <div className="bg-white mt-6 shadow-lg rounded-xl p-10 max-w-2xl text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Considera Suscribirte
      </h1>
      <p className="text-gray-700 mb-8">
        En Capital 8 ofrecemos una gestión experta sin necesidad de entregar tu
        dinero, tendrás control total mientras nosotros nos encargamos de
        maximizar tus rendimientos con estrategias probadas y supervisión
        constante.
      </p>
      <div className="p-4 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Detalles del Servicio
          </h2>
          <div className="flex flex-col items-center">
            <Image
              src="https://luis-capital8.s3.us-east-2.amazonaws.com/trading-floor.jpg"
              alt="Trading Solutions"
              width={400}
              height={400}
              className="mb-4"
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Riesgo máximo por operación: 4%.</li>
              <li>Jornada operativa: lunes a viernes de 9:30 am - 11:00 am.</li>
              <li>
                Inversiones intradía en el Nasdaq mediante Futuros y CFDs.
              </li>
            </ul>
          </div>
          <Link
            href={"" + checkout_link}
            className="flex items-center text-center justify-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
          >
            Contratar un Gestor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoSubscriptionProfile;
