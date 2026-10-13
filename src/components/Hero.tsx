function Phone() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]" aria-label="FocusFlow app preview" role="img">
      <div className="absolute -inset-6 -z-10 rounded-full bg-iris/15 blur-3xl" />
      <div className="rounded-[2.6rem] border-[10px] border-ink bg-ink p-0 shadow-2xl shadow-iris/30">
        <div className="rounded-[2rem] bg-white px-5 pb-6 pt-8">
          <p className="text-center text-xs font-semibold text-ink/50">Deep work · Write report</p>
          <div className="relative mx-auto mt-5 h-48 w-48">
            <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
              <circle cx="100" cy="100" r="85" fill="none" stroke="#ECEAFF" strokeWidth="14" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="#5B4BFF" strokeWidth="14" strokeLinecap="round"
                strokeDasharray="534" strokeDashoffset="160" className="animate-ring" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-extrabold tabular-nums">18:42</span>
              <span className="text-xs text-ink/50">left of 25 min</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2 text-xs font-semibold">
            <span className="rounded-full bg-ink px-4 py-2 text-white">Pause</span>
            <span className="rounded-full bg-iris-soft px-4 py-2 text-iris">Skip break</span>
          </div>
          <div className="mt-6 rounded-2xl bg-lime-ring/60 px-4 py-3 text-xs font-semibold">
            🔥 12-day streak · 3 of 4 sessions done
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="container-x grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Do your best work, without the noise.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70 lg:mx-0">
            FocusFlow blocks distractions, times your sessions and shows how your focus grows week after week.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#pricing" className="btn-primary w-full sm:w-auto">Get Started free</a>
            <a href="#how-it-works" className="btn-ghost w-full sm:w-auto">See how it works</a>
          </div>
          <p className="mt-5 text-sm text-ink/55">Free on iOS and Android. No credit card needed.</p>
        </div>
        <Phone />
      </div>
    </section>
  );
}
