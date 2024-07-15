import Box from "./Box";
import Logo from "./Logo";
import { auth } from "@/src/auth";
import Link from "next/link";
import SignInButton from "./SignInButton";
import LogoutButton from "./LogoutButton";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="py-4">
      <Box>
        <nav className="flex justify-between items-center border-b py-4">
          <Logo />
          {user ? (
            <div className="flex space-x-2 items-center">
              <Link href={"/dashboard"}>Panel de Usuario</Link>
              <LogoutButton />
            </div>
          ) : (
            <>
              <SignInButton />
            </>
          )}
        </nav>
      </Box>
    </header>
  );
};

export default Header;
