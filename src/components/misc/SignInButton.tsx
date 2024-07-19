// components/misc/SignInButton.tsx
import { signIn } from "next-auth/react";
import React from "react";

const SignInButton: React.FC = () => {
  return (
    <button
      className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
      onClick={() => signIn()}
    >
      Iniciar Sesión
    </button>
  );
};

export default SignInButton;
