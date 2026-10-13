import { useState } from "react";
import Icon from "./Icon";
import { plans } from "../data";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple pricing, start free</h2>
          <p className="mt-4 text-lg text-ink/70">Upgrade only when you want more. Cancel any time.</p>
          <div role="group" aria-label="Billing period" className="mt-8 inline-flex rounded-full bg-paper p-1 text-sm font-semibold">
            {[{ l: "Monthly", v: false }, { l: "Yearly (save 25%)", v: true }].map((o) => (
              <button key={o.l} type="button" aria-pressed={yearly === o.v} onClick={() => setYearly(o.v)}
                className={`rounded-full px-4 py-2 transition-colors ${yearly === o.v ? "bg-ink text-white" : "text-ink/70"}`}>
                {o.l}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article key={p.name}
              className={`flex flex-col rounded-3xl p-8 ${p.featured ? "bg-iris text-white shadow-xl shadow-iris/30 lg:-my-3" : "border border-ink/10 bg-paper"}`}>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-white/75" : "text-ink/60"}`}>{p.note}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">${yearly ? p.yearly : p.monthly}</span>
                <span className={p.featured ? "text-white/75" : "text-ink/60"}>/month</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "text-lime-ring" : "text-iris"}`} />
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 ${p.featured ? "btn bg-white text-iris hover:bg-iris-soft" : "btn-ghost"}`}>{p.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
