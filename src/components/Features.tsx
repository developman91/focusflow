import Icon from "./Icon";
import { features } from "../data";

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to stay in the zone</h2>
          <p className="mt-4 text-lg text-ink/70">Six tools that work together, so focusing becomes the easy default.</p>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-iris-soft text-iris">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-ink/70">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
