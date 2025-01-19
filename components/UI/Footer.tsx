"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-t-[#202024] py-8">
      <div className="mx-8 sm:mx-auto max-w-3xl sm:flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Abyan Raditya, All right reserved.
        </p>
        <p className="text-xs text-[#636367]">
          {new Date()
            .toLocaleTimeString("en-US", {
              timeZone: "Asia/Jakarta",
              timeZoneName: "shortGeneric",
              hour: "2-digit",
              // hour12:
              minute: "numeric",
            })
            .slice(0, 8)}
        </p>
      </div>
    </footer>
  );
}
