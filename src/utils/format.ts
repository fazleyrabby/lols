export function formatVisits(num?: number): string {
  if (num === undefined || num === null) return 'Unavailable';
  if (num >= 1_000_000) {
    const formatted = (num / 1_000_000).toFixed(1);
    return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}M`;
  }
  if (num >= 1_000) {
    const formatted = (num / 1_000).toFixed(1);
    return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}K`;
  }
  return num.toString();
}

export function formatRank(rank?: number): string {
  if (!rank) return 'Unavailable';
  if (rank >= 1_000_000) return `#${(rank / 1_000_000).toFixed(1)}M`;
  if (rank >= 1_000) return `#${(rank / 1_000).toFixed(0)}K`;
  return `#${rank}`;
}
