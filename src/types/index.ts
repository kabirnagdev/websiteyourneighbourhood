export interface HangoutEvent {
  id: string;
  title: string;
  emoji: string;
  location: string;
  time: string;
  category: Category;
  lat?: number;
  lng?: number;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  handle: string;
  city: string;
  initial: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  emojiSrc?: string;
}

export type FloatSize = "xl" | "lg" | "md" | "sm" | "xs";

export interface FloatBubble {
  src: string;
  alt: string;
  size: FloatSize;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
  rotate?: number;
}
