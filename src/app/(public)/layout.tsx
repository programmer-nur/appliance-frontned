import PublicNavbar from "@/components/Navbar/PublicNavbar";
import React, { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
};

export default PublicLayout;
