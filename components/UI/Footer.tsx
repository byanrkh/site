"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getLastCommit } from "@/libs/commit";

export default function Footer() {
  const [lastCommitHash, setLastCommitHash] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommitHash() {
      try {
        const hash = await getLastCommit();
        setLastCommitHash(hash);
      } catch (error) {
        console.error("Error fetching commit hash:", error);
      }
    }

    fetchCommitHash();
  }, []);

  return (
    <footer className="border-t border-t-[#202024] py-8">
      <div className="mx-8 sm:mx-auto max-w-3xl sm:flex justify-between items-center">
        <p className="text-sm">© 2025 Abyan Raditya, All right reserved.</p>
        <p className="text-xs text-zinc-400">
          {lastCommitHash ? lastCommitHash : "Loading..."}
        </p>
      </div>
    </footer>
  );
}
