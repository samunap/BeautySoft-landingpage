import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Analytics tracking interface
interface TrackEventProperties {
  [key: string]: string | number | boolean | undefined
}

// Track events for analytics
export const trackEvent = (eventName: string, properties?: TrackEventProperties) => {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track Event:', eventName, properties)
  }
  
  // In production, integrate with your analytics service
  // Example: analytics.track(eventName, properties)
  // Example: gtag('event', eventName, properties)
  // Example: mixpanel.track(eventName, properties)
}
