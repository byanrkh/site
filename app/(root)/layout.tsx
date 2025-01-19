import Navbar from "@/components/UI/Navbar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
}
