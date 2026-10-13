import { Logo } from "./Header";

const columns = [
  { title: "Product", links: ["Features", "Pricing", "Download", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Support", links: ["Help center", "Privacy", "Terms", "Contact"] },
];
const socials = [
  { label: "X", short: "X" },
  { label: "Instagram", short: "Ig" },
  { label: "LinkedIn", short: "in" },
  { label: "YouTube", short: "Yt" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-white/65">Calm focus for busy people. Questions? Write to hello@focusflow.app</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#top" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition-colors hover:bg-iris">
                  {s.short}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h3 className="font-sans text-sm font-semibold text-white">{c.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  {c.links.map((l) => (
                    <li key={l}><a href="#top" className="hover:text-white">{l}</a></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} FocusFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
