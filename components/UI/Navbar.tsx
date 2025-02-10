"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/libs/cn";
import { Drawer } from "vaul";

export default function Navbar() {
  const pathname = usePathname();

  const Links = [
    {
      label: "home",
      path: "/",
    },
    {
      label: "writings",
      path: "/writings",
    },
    {
      label: "guestbook",
      path: "/guestbook",
    },
  ];

  return (
    <nav className={cn("border-b border-b-[#202024] py-6 sm:py-8")}>
      <div className="mx-8 px-4 sm:mx-auto max-w-3xl flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/assets/logo.svg"} alt="logo" width={20} height={20} />
        </Link>
        <ul className="hidden sm:flex gap-5">
          {Links.map((nav, idx) => {
            return (
              <li
                className={cn(
                  "text-sm capitalize",
                  pathname == nav.path
                    ? "underline underline-offset-2 text-white"
                    : ""
                )}
                key={idx}
              >
                <Link href={nav.path}>{nav.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="block sm:hidden">
          <Drawer.Root>
            <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm shadow-sm transition-all bg-[#202024] hover:bg-[#1A1A19] text-white">
              Menu
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="backdrop-blur-md flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline outline-[#202024]">
                <div className="p-4 rounded-t-[10px] flex-1">
                  <div
                    aria-hidden
                    className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#202024] mb-8"
                  />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="hidden"></Drawer.Title>
                    <div className="grid grid-cols-1 gap-2">
                      {Links.map((nav, idx) => {
                        return (
                          <Link
                            key={idx}
                            href={nav.path}
                            className={cn(
                              "border border-[#202024] rounded-lg py-3 text-center capitalize",
                              pathname == nav.path ? "bg-[#202024]" : ""
                            )}
                          >
                            {nav.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </nav>
  );
}
