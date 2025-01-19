export async function getLastCommit(): Promise<string | null> {
    const response = await fetch('https://api.github.com/repos/byanrkh/site/commits', {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch commit data');
    }
  
    const commits = await response.json();
    const lastCommit = commits[0];
  
    return lastCommit ? lastCommit.sha : null; // Mengembalikan SHA commit terakhir
  }