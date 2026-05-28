import type { FloatBubble, HangoutEvent, Testimonial, Feature } from "@/types";

export const FLOAT_BUBBLES: FloatBubble[] = [
  // ── TOP ROW ─────────────────────────────────────────
  { src: "/emojis/soccer-ball_26bd.png",            alt: "Soccer",     size: "xl", top: "5%",  left: "3%",   delay: 0,    duration: 6.8 },
  { src: "/emojis/studio-microphone_1f399-fe0f.png",alt: "Music",      size: "lg", top: "8%",  left: "17%",  delay: 0.6,  duration: 5.9 },
  { src: "/emojis/sparkler_1f387.png",              alt: "Sparkler",   size: "sm", top: "7%",  left: "36%",  delay: 1.1,  duration: 7.2 },
  { src: "/emojis/confetti-ball_1f38a.png",         alt: "Confetti",   size: "sm", top: "7%",  right: "36%", delay: 1.4,  duration: 6.5 },
  { src: "/emojis/video-game_1f3ae.png",            alt: "Gaming",     size: "lg", top: "8%",  right: "17%", delay: 0.3,  duration: 6.1 },
  { src: "/emojis/basketball_1f3c0.png",            alt: "Basketball", size: "xl", top: "5%",  right: "3%",  delay: 0.9,  duration: 7.0 },

  // ── UPPER-MIDDLE ROW ────────────────────────────────
  { src: "/emojis/camping_1f3d5-fe0f.png",          alt: "Camping",    size: "lg", top: "30%", left: "2%",   delay: 1.6,  duration: 6.3 },
  { src: "/emojis/beach-with-umbrella_1f3d6-fe0f.png",alt:"Beach",     size: "md", top: "36%", left: "15%",  delay: 0.7,  duration: 5.7 },
  { src: "/emojis/artist-palette_1f3a8.png",        alt: "Art",        size: "md", top: "34%", right: "14%", delay: 1.2,  duration: 6.6 },
  { src: "/emojis/bowling_1f3b3.png",               alt: "Bowling",    size: "lg", top: "30%", right: "2%",  delay: 0.4,  duration: 5.8 },

  // ── LOWER-MIDDLE ROW ────────────────────────────────
  { src: "/emojis/books_1f4da.png",                 alt: "Study",      size: "lg", top: "57%", left: "3%",   delay: 2.0,  duration: 6.9 },
  { src: "/emojis/performing-arts_1f3ad.png",       alt: "Theatre",    size: "md", top: "61%", left: "18%",  delay: 0.5,  duration: 5.6 },
  { src: "/emojis/sailboat_26f5.png",               alt: "Sailing",    size: "md", top: "59%", right: "17%", delay: 1.8,  duration: 6.4 },
  { src: "/emojis/snow-capped-mountain_1f3d4-fe0f.png",alt:"Hiking",   size: "lg", top: "57%", right: "3%",  delay: 0.2,  duration: 7.1 },

  // ── BOTTOM ROW ──────────────────────────────────────
  { src: "/emojis/pool-8-ball_1f3b1.png",           alt: "Pool",       size: "xl", top: "78%", left: "4%",   delay: 1.3,  duration: 6.2 },
  { src: "/emojis/shopping-bags_1f6cd-fe0f.png",    alt: "Shopping",   size: "sm", top: "80%", left: "21%",  delay: 0.8,  duration: 5.5 },
  { src: "/emojis/cricket-game_1f3cf.png",          alt: "Cricket",    size: "xs", top: "88%", left: "13%",  delay: 2.2,  duration: 6.7 },
  { src: "/emojis/parachute_1fa82.png",             alt: "Adventure",  size: "xs", top: "88%", right: "12%", delay: 1.9,  duration: 5.9 },
  { src: "/emojis/auto-rickshaw_1f6fa.png",         alt: "Transport",  size: "sm", top: "80%", right: "20%", delay: 0.6,  duration: 6.0 },
  { src: "/emojis/racing-car_1f3ce-fe0f.png",       alt: "Racing",     size: "xl", top: "78%", right: "4%",  delay: 1.5,  duration: 7.3 },
];

export const CATEGORIES = [
  { name: "Soccer",      src: "/emojis/soccer-ball_26bd.png" },
  { name: "Basketball",  src: "/emojis/basketball_1f3c0.png" },
  { name: "Gaming",      src: "/emojis/video-game_1f3ae.png" },
  { name: "Music",       src: "/emojis/studio-microphone_1f399-fe0f.png" },
  { name: "Art & Design",src: "/emojis/artist-palette_1f3a8.png" },
  { name: "Study Groups",src: "/emojis/books_1f4da.png" },
  { name: "Theatre",     src: "/emojis/performing-arts_1f3ad.png" },
  { name: "Outdoors",    src: "/emojis/camping_1f3d5-fe0f.png" },
  { name: "Beach Days",  src: "/emojis/beach-with-umbrella_1f3d6-fe0f.png" },
  { name: "Bowling",     src: "/emojis/bowling_1f3b3.png" },
  { name: "Shopping",    src: "/emojis/shopping-bags_1f6cd-fe0f.png" },
  { name: "Parties",     src: "/emojis/confetti-ball_1f38a.png" },
  { name: "Pool",        src: "/emojis/pool-8-ball_1f3b1.png" },
  { name: "Cricket",     src: "/emojis/cricket-game_1f3cf.png" },
  { name: "Sailing",     src: "/emojis/sailboat_26f5.png" },
  { name: "Festivals",   src: "/emojis/sparkler_1f387.png" },
  { name: "Hiking",      src: "/emojis/snow-capped-mountain_1f3d4-fe0f.png" },
  { name: "Adventure",   src: "/emojis/parachute_1fa82.png" },
];

export const PHONE_EVENTS: HangoutEvent[] = [
  { id: "1", title: "Friday Night Soccer", emoji: "/emojis/soccer-ball_26bd.png",            location: "Riverside Park",   time: "6:00 PM", category: { id: "s", name: "Soccer",  emoji: "" } },
  { id: "2", title: "Rooftop Gaming Night", emoji: "/emojis/video-game_1f3ae.png",            location: "The Hub, Floor 8", time: "7:30 PM", category: { id: "g", name: "Gaming",  emoji: "" } },
  { id: "3", title: "Open Mic — Café Luna", emoji: "/emojis/studio-microphone_1f399-fe0f.png",location: "Café Luna",        time: "8:00 PM", category: { id: "m", name: "Music",   emoji: "" } },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", quote: "I moved to a new city and didn't know anyone. Found a weekly basketball game on Yanegi — now those guys are my best friends.", name: "James K.",  handle: "@jamesk",  city: "Mumbai",    initial: "J" },
  { id: "2", quote: "Hosting study groups used to be a hassle. Yanegi handles discovery — I just show up and teach.",                              name: "Priya M.",  handle: "@priyam",  city: "Bengaluru", initial: "P" },
  { id: "3", quote: "The map feature is genuinely addictive. I open it every Friday to see what's popping.",                                       name: "Rajan T.",  handle: "@rajant",  city: "Delhi",     initial: "R" },
];

export const FEATURES: Feature[] = [
  { icon: "🗺️",  title: "Live Map View",       description: "See active events in real time. Zoom into your neighbourhood and tap any pin to join." },
  { icon: "🎯",  title: "Smart Matching",       description: "Yanegi learns your interests and surfaces hangouts you'll actually enjoy." },
  { icon: "🏠",  title: "Host Your Own",        description: "Create an event in under 60 seconds. Set capacity, time, and location." },
  { icon: "💬",  title: "Event Chat",           description: "Every hangout has a built-in group chat. Build the vibe before you arrive." },
  { icon: "",    title: "Community Circles",    description: "Join recurring groups — weekly runs, game nights, startup brunches.", emojiSrc: "/emojis/handshake-no-skin-tone-no-skin-tone_1faf1-200d-1faf2.png" },
  { icon: "📊",  title: "Host Analytics",       description: "Track attendance trends and reach. Know what resonates and grow your community." },
];
