import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import "dotenv/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const baseUrl = process.env.BASE_URL;
