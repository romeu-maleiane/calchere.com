import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateSet(value: string, setValue: (value: any) => void) {
  value = value.replace(/[^0-9.,]/, '')
  
  const onlyPoint = value.match(/[,]/g)
  if (onlyPoint) {
      value = value.slice(0, value.length - 1)
  }

  if (/[.]{2}/.test(value)) {
      value = value.slice(0, value.length - 1)
  }

  setValue(value)
}