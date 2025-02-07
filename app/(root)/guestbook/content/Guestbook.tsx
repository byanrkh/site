"use client";

import Title from "@/components/Layout/Title";
import Link from "next/link";
import {
  fetchEntries,
  addEntry,
  type GuestbookEntry,
} from "@/libs/guestbook/guestbook";
import { signInWithGithub, getUser } from "@/libs/guestbook/auth";
import { useEffect, useState } from "react";

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadEntries();
    checkUser();
  }, []);

  async function loadEntries() {
    const fetchedEntries = await fetchEntries();
    setEntries(fetchedEntries);
  }

  async function checkUser() {
    const currentUser = await getUser();
    setUser(currentUser);
  }

  async function handleSignIn() {
    await signInWithGithub();
    checkUser();
  }

  // async function handleSignOut() {
  //   await signOut();
  //   setUser(null);
  // }

  async function handleAddEntry() {
    if (!user || !newMessage.trim()) return;

    const success = await addEntry(newMessage);
    if (success) {
      setNewMessage(""); // Clear the input immediately
      await loadEntries(); // Reload entries after successful submission
    }
  }

  return (
    <section>
      <Title>Guestbook</Title>
      <div>
        {user ? (
          <div>
            <div className="flex gap-5 p-1 border border-zinc-800 rounded-md">
              {/* <input
                onChange={(e) => setNewMessage(e.target.value)}
                type="text"
                placeholder="Enter a message"
                className="flex-grow px-3 bg-transparent outline-none"
              /> */}
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Enter your message"
                className="flex-grow px-3 bg-transparent outline-none"
              />
              <button
                onClick={handleAddEntry}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:bg-zinc-900/80 duration-100 rounded"
              >
                Post
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded"
          >
            login with Github
          </button>
        )}
      </div>
      <ul className="mt-5 space-y-1">
        {entries.map((entry) => (
          <li key={entry.id} className="flex gap-2">
            <Link href={"/"} className="text-zinc-400">
              {entry.username}:
            </Link>
            <p>{entry.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
