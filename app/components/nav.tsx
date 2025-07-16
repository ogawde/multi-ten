import React from "react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Nav: React.FC = () => {
  return (
    <nav className="border-2 border-red-500 p-4 flex flex-row justify-between">
      <div>Nav</div>
      <div className="flex flex-row gap-4">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:org_id" />
        <UserButton />
      </div>
    </nav>
  );
};

export default Nav;
