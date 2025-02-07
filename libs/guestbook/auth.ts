import { supabase } from "@/libs/supabase"

export async function signInWithGithub() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/guestbook`,
    },
  })
  if (error) console.error("Error signing in with Github:", error)
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error("Error signing out:", error)
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

