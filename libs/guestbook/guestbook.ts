import { supabase } from "@/libs/supabase"

export interface GuestbookEntry {
  id: number
  username: string
  message: string
  created_at: string
}

export async function fetchEntries(): Promise<GuestbookEntry[]> {
  const { data, error } = await supabase
    .from("new_guestbook_entries")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching entries:", error)
    return []
  }
  return data || []
}

export async function addEntry(message: string): Promise<boolean> {
  const { error } = await supabase.from("new_guestbook_entries").insert({ message: message.trim() })

  if (error) {
    console.error("Error adding entry:", error)
    return false
  }
  return true
}

