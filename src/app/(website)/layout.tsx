import React, { ReactNode } from "react";
import Header from "../../components/Layout/Header";
import "@/src/styles/globals.css";
import "@/src/styles/slick.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
