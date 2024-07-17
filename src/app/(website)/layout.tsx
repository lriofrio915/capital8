import React, { ReactNode } from "react";
import Header from "../../components/Layout/Header";
import "@/src/styles/globals.css";
import "@/src/styles/slick.css";
import { auth } from "@/src/auth";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <Header user={null} />
      {children}
    </div>
  );
};

export default Layout;
