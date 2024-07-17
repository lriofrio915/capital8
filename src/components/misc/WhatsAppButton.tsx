import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface WhatsAppButtonProps {
  children: ReactNode;
  addClass?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  children,
  addClass = "",
}) => {
  const whatsappURL =
    "https://wa.me/593996691586?text=Estoy%20interesado%20en%20el%20servicio%201.%20Gestion%20de%20cuenta%20cl%c3%lasica,%202.%20Gesti%C3%B3n%20de%20cuenta%20Darwinex,%203.%20Intercambio%20de%20criptoactivos";

  return (
    <Link
      href={whatsappURL}
      target="_blank"
      className={
        "flex items-center py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green-500 hover:bg-green-400 hover:shadow-lg transition-all outline-none " +
        addClass
      }
    >
      <div className="mr-2 transition-transform transform hover:scale-110">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Icon"
          width={24}
          height={24}
        />
      </div>
      {children}
    </Link>
  );
};

export default WhatsAppButton;
