import React from "react";
import Box from "@/src/components/Box";
import { auth } from "@/src/lib/auth";
import { redirect } from "next/navigation";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/src/lib/billing";
import prisma from "@/src/lib/prisma";
import Link from "next/link";
import SubscriptionProfile from "@/src/components/SubscriptionProfile"
import NoSubscriptionProfile from "@/src/components/NoSubscriptionProfile";

const DashboardPage = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  const userEmail = user?.email;

  //create customer
  await createCustomerIfNull();

  // Fetch the user by email to get the user's ID
  const existingUser = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  //Generate the customer link
  const manage_link = await generateCustomerPortalLink(
    "" + existingUser?.stripe_customer_id
  );

  //Check if the user has a subscription
  const hasSub = await hasSubscription();

  //Create a link for the customer
  const checkout_link = await createCheckoutLink(
    "" + existingUser?.stripe_customer_id
  );

  return (
    <section>
      <Box>
        <div className="flex flex-col  w-full mb-20 items-center gap-2 text-md">
          <div className="flex justify-between items-center w-full">
            <Link
              href={"" + manage_link}
              className="hover:text-gray-500 cursor-pointer"
            >
              Facturación
            </Link>
            <div>
              {hasSub ? (
                <>
                  <div>Suscripción Activa</div>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <p>¿Aún no eres miembro?</p>
                  <Link href={"" + checkout_link}>Clic Aquí</Link>
                </div>
              )}
            </div>
          </div>
          {hasSub ? (
            <>
              <SubscriptionProfile />
            </>
          ) : (
            <>
              <div className="h-screen">
                <NoSubscriptionProfile />
              </div>
            </>
          )}
        </div>
      </Box>
    </section>
  );
};

export default DashboardPage;
