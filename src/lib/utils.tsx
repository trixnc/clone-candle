import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  if (seconds < 60) {
    return "just now";
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval}${unit[0]} ago`;
    }
  }

  return "just now";
}

export const isTokenValid = (id_token: string): boolean => {
  try {
    const payloadBase64 = id_token.split(".")[1]; // Get the payload part
    const decodedPayload = atob(payloadBase64); // Decode the Base64 payload
    const decoded = JSON.parse(decodedPayload);
    if (!decoded || !decoded.exp) {
      return false;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;
  } catch {
    return false;
  }
};