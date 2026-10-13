import { steps } from "../data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Three steps to a focused day</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-ink p-8 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-ring font-display text-lg font-extrabold text-ink">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
