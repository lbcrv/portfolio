const OWNER = 'lbcrv';
const TOKEN = import.meta.env.GITHUB_TOKEN;

// Runs at build time. Returns null instead of failing the build when the
// API is unreachable or rate limited; the page then omits the date.
export async function lastPush(repo: string): Promise<Date | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.pushed_at ? new Date(data.pushed_at) : null;
  } catch {
    return null;
  }
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10).replaceAll('-', '.');
}

export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}
