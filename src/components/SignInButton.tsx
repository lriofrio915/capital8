import { FiUser } from "react-icons/fi";
import { signIn } from "../auth";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit">
        <FiUser className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SignInButton;
