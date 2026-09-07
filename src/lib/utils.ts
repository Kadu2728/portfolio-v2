import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "01", "02", … — numeração técnica usada em seções e projetos. */
export const pad = (n: number) => String(n).padStart(2, '0')
