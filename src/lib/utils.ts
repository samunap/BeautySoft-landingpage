import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Analytics tracking - implement based on your analytics provider
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
    
    // Meta Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', eventName, properties);
    }
  }
}

export function getUTMParams() {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || '',
    medium: urlParams.get('utm_medium') || '',
    campaign: urlParams.get('utm_campaign') || '',
  };
}
