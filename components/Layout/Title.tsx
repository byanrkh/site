import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-2xl font-extrabold relative flex group cursor-pointer mb-5">
      {children}
      <span className="absolute -left-6 top-0 hidden group-hover:block">#</span>
    </h1>
  );
}
