import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-xl font-bold relative flex group cursor-pointer">
      {children}
      <span className="absolute -left-5 top-0 hidden group-hover:block">#</span>
    </h1>
  );
}
