"use client";

import Link from "next/link";
import React from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="border-t border-t-[#202024] py-8">
      <div className="mx-8 sm:mx-auto max-w-3xl sm:flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Abyan Raditya, All right reserved.
        </p>
        <ul className="flex gap-5 sm:mt-0 mt-2 text-zinc-400">
          <li>
            <Link href={"https://instagram.com/byanrkh"} target="_blank">
              <Instagram size={18} />
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/byanrkh"} target="_blank">
              <GitHub size={18} />
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/byanrkh"} target="_blank">
              <Twitter size={18} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
