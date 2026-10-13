import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">People who got their time back</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8">
              <blockquote className="text-lg leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-iris text-sm font-bold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="text-ink/60">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
