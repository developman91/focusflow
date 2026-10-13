import type { IconName } from "./components/Icon";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "timer", title: "Focus sessions", text: "Start a 25, 50 or custom timer. Breaks are scheduled for you, so you never lose the thread." },
  { icon: "shield", title: "Distraction blocker", text: "Mute apps and sites while a session runs. Allow only the tools your task needs." },
  { icon: "target", title: "Daily goals", text: "Pick up to three priorities each morning and see them move as you finish sessions." },
  { icon: "chart", title: "Focus insights", text: "Weekly charts show when you focus best and what pulls you away." },
  { icon: "moon", title: "Ambient sounds", text: "Rain, café, white noise. Mix the soundscape that keeps you in the zone." },
  { icon: "sync", title: "Sync everywhere", text: "Your plan, streaks and history stay in step across phone, tablet and desktop." },
];

export const steps = [
  { title: "Set your task", text: "Write what you want to finish and choose how long you'll work on it." },
  { title: "Start the flow", text: "FocusFlow silences distractions and keeps a calm timer on screen." },
  { title: "Review your day", text: "See finished sessions, streaks and trends, then plan tomorrow in a minute." },
];

export const plans = [
  {
    name: "Free", monthly: 0, yearly: 0, cta: "Start for free", featured: false,
    note: "For trying out the habit.",
    items: ["Unlimited focus timer", "3 daily goals", "7-day history", "2 ambient sounds"],
  },
  {
    name: "Pro", monthly: 8, yearly: 6, cta: "Get Pro", featured: true,
    note: "For people who work deeply every day.",
    items: ["Everything in Free", "Distraction blocker", "Full insights and streaks", "All ambient sounds", "Sync on all devices"],
  },
  {
    name: "Team", monthly: 15, yearly: 12, cta: "Contact sales", featured: false,
    note: "Per seat, for teams of 3 or more.",
    items: ["Everything in Pro", "Shared focus rooms", "Team insights", "Admin controls", "Priority support"],
  },
];

export const testimonials = [
  { name: "Anna Keller", role: "Product designer", text: "I finish my main task before lunch now. The blocker alone saved me about an hour a day." },
  { name: "Marcus Lee", role: "Software engineer", text: "The weekly insights showed me my best hours are 9 to 11. I moved all meetings to the afternoon." },
  { name: "Sofia Petrova", role: "Graduate student", text: "Short sessions and a visible streak got me through my thesis. Simple, calm and it works." },
];
