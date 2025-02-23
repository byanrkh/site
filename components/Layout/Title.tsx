import React, { ReactNode } from "react";

export default function Title({
  children,
  emoji,
}: {
  children: ReactNode;
  emoji: string;
}) {
  return (
    <h1 className="text-3xl font-extrabold relative flex group cursor-pointer mb-5 w-fit items-center">
      {children}
      <span className="absolute -left-12 top-0 hidden group-hover:block">
        {emoji}
      </span>
    </h1>
  );
}
