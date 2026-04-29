// Format address to show first and last 4 characters
export function shortenAddress(address) {
  if (!address) return "";
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

// Format date to readable string
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Format currency
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

// Validate Solana address
export function isValidSolanaAddress(address) {
  return /^[1-9A-HJ-NP-Z]{32,44}$/.test(address);
}
