import Box from "@/src/components/Box";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-4">
      <Box>
        <div className="flex mt-24  justify-center h-screen">
          <div className="flex flex-col space-y-4">
            <p>Gracias Por Unirte!!!</p>
            <Link href={"/dashboard"}>Regresar al Panel de Usuario</Link>
          </div>
        </div>sssssssssssssssssssss
      </Box>
    </section>ssssssssssssssssssssssssssssssssssss
  );
};

export default page;
