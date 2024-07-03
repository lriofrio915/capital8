import React from "react";
import { signOut } from "../auth";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">
        <FiLogOut className="h-4 w-4" />
      </button>
    </form>
  );
};

export default LogoutButton;
