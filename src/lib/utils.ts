import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Commission pieces carry no price, so the shop shows an enquiry line in place
 * of a figure rather than a blank or a zero.
 */
export function priceLabel(value: number | undefined, currency: string = "USD") {
  return value === undefined ? "Price on request" : formatPrice(value, currency);
}
