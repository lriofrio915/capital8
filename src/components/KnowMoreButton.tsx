import { signIn } from "../lib/auth";
import { redirect } from "next/navigation";

const KnowMore = () => {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn();
          redirect("/dashboard");
        } catch (error) {
          console.error("Error during sign-in:", error);
          // Aquí podrías manejar el error y mostrar un mensaje al usuario
        }
      }}
    >
      <button className="flex items-center text-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
        Conocer más
      </button>
    </form>
  );
};

export default KnowMore;
