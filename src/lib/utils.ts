import { clsx, type ClassValue } from "clsx";
import slugifyjs from "slugify";
import { twMerge } from "tailwind-merge";
import { env } from "~/env.mjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  if (env.NEXT_PUBLIC_APP_URL) {
    return `${env.NEXT_PUBLIC_APP_URL}${path}`;
  }
}

export function slugify(string: string) {
  return slugifyjs(string, { lower: true });
}
