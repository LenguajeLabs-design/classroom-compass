import { startTransition, useEffect, useState } from "react";
import { concerns, supportAreas, supportLevelCopy, type Strategy } from "@/content/compass";

function CompassMark() {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-200 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_55%),linear-gradient(180deg,#ffffff,#eff6ff)] shadow-sm">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M13.8 8.2 12 13.6 6.6 15.4 8.4 10z" fill="#2563EB" />
        <circle cx="11" cy="11" r="1.2" fill="#93C5FD" />
      </svg>
    </div>
  );
}

function SupportIcon({
  icon,
  color,
}: {
  icon: "focus" | "shield" | "heart" | "group" | "book" | "globe";
  color: string;
}) {
  if (icon === "focus") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" stroke={color} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="3.2" stroke={color} strokeWidth="1.6" />
        <circle cx="11" cy="11" r="0.9" fill={color} />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3.5 17 6v4.9c0 3.7-2.4 6.2-6 7.6-3.6-1.4-6-3.9-6-7.6V6l6-2.5Z" stroke={color} strokeWidth="1.6" />
        <path d="m8.6 11.2 1.6 1.6 3.2-3.3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "heart") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 18s-6-3.8-6-8.7C5 6.9 6.7 5.5 8.7 5.5c1.3 0 2.3.6 3.3 1.8 1-1.2 2-1.8 3.3-1.8 2 0 3.7 1.4 3.7 3.8 0 4.9-6 8.7-6 8.7Z" stroke={color} strokeWidth="1.6" />
        <path d="M8.5 10.8h1.7l.8-1.6 1.4 3 1-1.6h1.9" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "group") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="8" cy="8.2" r="2.6" stroke={color} strokeWidth="1.6" />
        <circle cx="14.8" cy="8.8" r="2.2" stroke={color} strokeWidth="1.6" />
        <path d="M3.8 17c0-2.4 2-4.2 4.4-4.2s4.4 1.8 4.4 4.2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12.7 16.4c.2-1.9 1.8-3.2 3.8-3.2 1.2 0 2.2.4 2.9 1.2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "globe") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" stroke={color} strokeWidth="1.6" />
        <path d="M3.9 11h14.2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 3.8c2.3 2.1 3.5 4.5 3.5 7.2 0 2.7-1.2 5.1-3.5 7.2-2.3-2.1-3.5-4.5-3.5-7.2 0-2.7 1.2-5.1 3.5-7.2Z" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5.5 4.5h5.3c1 0 1.7.8 1.7 1.7v11.3H7.2c-.9 0-1.7-.8-1.7-1.7V4.5Z" stroke={color} strokeWidth="1.6" />
      <path d="M16.5 4.5h-5.3c-1 0-1.7.8-1.7 1.7v11.3h5.3c.9 0 1.7-.8 1.7-1.7V4.5Z" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

function StrategyCard({
  strategy,
  selected,
  onToggle,
}: {
  strategy: Strategy;
  selected: boolean;
  onToggle: () => void;
}) {
  const isUniversal = strategy.level === "Universal";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-3xl border p-5 text-left transition-all ${
        selected
          ? isUniversal
            ? "border-sky-400 bg-sky-50 shadow-md"
            : "border-emerald-400 bg-emerald-50 shadow-md"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              isUniversal
                ? "bg-sky-100 text-sky-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {strategy.level}
          </div>
          <h4 className="text-lg font-semibold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {strategy.title}
          </h4>
        </div>
        <div
          className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
            selected
              ? isUniversal
                ? "border-sky-300 bg-sky-100 text-sky-700"
                : "border-emerald-300 bg-emerald-100 text-emerald-700"
              : "border-slate-200 bg-slate-50 text-slate-400"
          }`}
        >
          {selected ? "✓" : "+"}
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">What it helps with: </span>
          {strategy.helpsWith}
        </p>
        {strategy.bestFor && (
          <p>
            <span className="font-semibold text-slate-900">Best for: </span>
            {strategy.bestFor}
          </p>
        )}
        {strategy.supports && (
          <p>
            <span className="font-semibold text-slate-900">What it supports: </span>
            {strategy.supports}
          </p>
        )}
        <p>
          <span className="font-semibold text-slate-900">What it looks like in class: </span>
          {strategy.classroomLook}
        </p>
        {strategy.tryTomorrow ? (
          <p>
            <span className="font-semibold text-slate-900">Try this tomorrow: </span>
            {strategy.tryTomorrow}
          </p>
        ) : (
          <p>
            <span className="font-semibold text-slate-900">When to try it: </span>
            {strategy.whenToTry}
          </p>
        )}
        {strategy.lookFor && (
          <p>
            <span className="font-semibold text-slate-900">Look for: </span>
            {strategy.lookFor}
          </p>
        )}
        {strategy.reference && (
          <p className="text-xs leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-700">Reference: </span>
            {strategy.reference}
          </p>
        )}
      </div>
    </button>
  );
}

function App() {
  const [selectedConcernId, setSelectedConcernId] = useState(concerns[0].id);
  const [selectedAreaId, setSelectedAreaId] = useState("attention-focus");
  const [selectedUniversal, setSelectedUniversal] = useState<string[]>([]);
  const [selectedIntervention, setSelectedIntervention] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const selectedConcern = concerns.find((concern) => concern.id === selectedConcernId) ?? concerns[0];
  const likelyAreas = supportAreas.filter((area) => selectedConcern.supportAreaIds.includes(area.id));
  const selectedArea =
    supportAreas.find((area) => area.id === selectedAreaId) ??
    likelyAreas[0] ??
    supportAreas[0];

  useEffect(() => {
    if (!selectedConcern.supportAreaIds.includes(selectedArea.id)) {
      setSelectedAreaId(selectedConcern.supportAreaIds[0] ?? supportAreas[0].id);
    }
  }, [selectedConcern, selectedArea]);

  const toggleStrategy = (title: string, type: "universal" | "intervention") => {
    const update = type === "universal" ? setSelectedUniversal : setSelectedIntervention;
    const limit = type === "universal" ? 3 : 2;

    update((current) => {
      if (current.includes(title)) {
        return current.filter((item) => item !== title);
      }

      if (current.length >= limit) {
        return [...current.slice(1), title];
      }

      return [...current, title];
    });
  };

  const chooseConcern = (concernId: string) => {
    const concern = concerns.find((item) => item.id === concernId);
    if (!concern) return;

    startTransition(() => {
      setSelectedConcernId(concern.id);
      setSelectedAreaId(concern.supportAreaIds[0] ?? supportAreas[0].id);
      setSelectedUniversal([]);
      setSelectedIntervention([]);
    });
  };

  const selectedUniversalStrategies = selectedArea.universal.filter((strategy) =>
    selectedUniversal.includes(strategy.title),
  );
  const selectedInterventionStrategies = selectedArea.intervention.filter((strategy) =>
    selectedIntervention.includes(strategy.title),
  );
  const filteredConcerns = concerns.filter((concern) =>
    `${concern.label} ${concern.summary}`.toLowerCase().includes(query.toLowerCase()),
  );
  const filteredAreas = supportAreas.filter((area) =>
    `${area.name} ${area.tagline} ${area.intro}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7fb_42%,#eef4f8_100%)] text-slate-900">
      <header className="screen-only sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <CompassMark />
            <div>
              <p className="text-lg font-semibold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Classroom Compass
              </p>
              <p className="text-sm text-slate-500">Practical supports for teacher meetings</p>
            </div>
          </a>
          <div className="hidden max-w-xl flex-1 px-4 lg:block">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search concerns, support areas, or strategies..."
                className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-700 shadow-inner outline-none transition focus:border-slate-300 focus:bg-white"
              />
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m21 21-4.35-4.35M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 xl:flex">
            <a href="#concerns" className="hover:text-slate-950">Concerns</a>
            <a href="#meeting-mode" className="hover:text-slate-950">Meeting Mode</a>
            <a href="#areas" className="hover:text-slate-950">Support Areas</a>
            <a href="#plan" className="hover:text-slate-950">Action Plan</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="screen-only relative overflow-hidden px-6 pb-20 pt-16">
          <div className="absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Problem to plan
              </div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 md:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                When behavior is the signal, Classroom Compass helps teachers find the next move.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Start with the classroom concern, identify the likely need underneath it, and choose
                universal or intervention supports that make the next teacher meeting more useful.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#concerns"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Start with a classroom concern
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Browse support areas
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.25)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Meeting mode</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Leave the meeting with a plan, not just ideas.
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Universal + Intervention
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {[
                  "Name the concern",
                  "Choose the likely need",
                  "Pick 2 to 3 universal strategies",
                  "Add 1 intervention option if needed",
                  "Decide what to watch for this week",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-sm font-semibold text-slate-700">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="concerns" className="screen-only mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Browse by area</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Teacher support areas
              </h2>
            </div>
            <div className="space-y-2">
              {filteredAreas.map((area) => {
                const selected = area.id === selectedArea.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => {
                      setSelectedAreaId(area.id);
                      document.getElementById("meeting-mode")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                      selected ? "bg-slate-100" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: area.accentSoft }}>
                      <SupportIcon icon={area.icon} color={area.accent} />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-950">{area.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{area.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div>
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Start with what you see</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Teachers usually notice the problem before they know the reason.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Choose the classroom challenge that sounds most like your student. Then use Classroom
                Compass to slow the decision-making down and choose supports that are more likely to help.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredConcerns.map((concern) => {
                const selected = concern.id === selectedConcern.id;
                const accentArea = supportAreas.find((area) => area.id === concern.supportAreaIds[0]) ?? supportAreas[0];
                return (
                  <button
                    key={concern.id}
                    type="button"
                    onClick={() => chooseConcern(concern.id)}
                    className={`rounded-[1.75rem] border p-5 text-left transition-all ${
                      selected
                        ? "border-slate-900 bg-slate-950 text-white shadow-md"
                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div
                      className="mb-4 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: selected ? "rgba(255,255,255,0.14)" : accentArea.accentSoft,
                        color: selected ? "#ffffff" : accentArea.accent,
                      }}
                    >
                      {accentArea.name}
                    </div>
                    <h3 className={`text-xl font-semibold ${selected ? "text-white" : "text-slate-950"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {concern.label}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${selected ? "text-slate-200" : "text-slate-600"}`}>{concern.summary}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="meeting-mode" className="screen-only mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Likely support areas</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                What might be underneath this?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                This tool does not diagnose a student. It helps teachers choose better next steps.
              </p>

              <div className="mt-6 grid gap-3">
                {likelyAreas.map((area) => {
                  const selected = area.id === selectedArea.id;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setSelectedAreaId(area.id)}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${
                        selected
                          ? "border-slate-900 bg-slate-950 text-white shadow-md"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: selected ? "rgba(255,255,255,0.14)" : area.accentSoft }}>
                          <SupportIcon icon={area.icon} color={selected ? "#ffffff" : area.accent} />
                        </div>
                        <div>
                          <p className={`text-lg font-semibold ${selected ? "text-white" : "text-slate-950"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {area.name}
                          </p>
                          <p className={`mt-2 text-sm leading-relaxed ${selected ? "text-slate-200" : "text-slate-600"}`}>
                            {area.tagline}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Teacher lens</p>
                <p className="mt-3 text-base leading-relaxed text-slate-700">"{selectedArea.teacherQuestion}"</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Selected area</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {selectedArea.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{selectedArea.intro}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">You might be here if</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                    {selectedArea.youMightBeHereIf.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Choose this week by watching for</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                    {selectedArea.lookFors.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {selectedArea.decisionSupport && selectedArea.decisionSupport.length > 0 && (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">This section helps teams separate</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                    {selectedArea.decisionSupport.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6 rounded-3xl p-5" style={{ backgroundColor: selectedArea.accentSoft }}>
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/90">
                    <SupportIcon icon={selectedArea.icon} color={selectedArea.accent} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: selectedArea.accent }}>
                      Teacher question
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">"{selectedArea.teacherQuestion}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="screen-only mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Universal</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Start here first.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{supportLevelCopy.universal}</p>
            </div>
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Intervention</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Use when the first layer is not enough.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{supportLevelCopy.intervention}</p>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Universal supports</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Pick up to 3 to try this week
                  </h3>
                </div>
                <div className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                  {selectedUniversal.length}/3 selected
                </div>
              </div>
              <div className="space-y-4">
                {selectedArea.universal.map((strategy) => (
                  <StrategyCard
                    key={strategy.title}
                    strategy={strategy}
                    selected={selectedUniversal.includes(strategy.title)}
                    onToggle={() => toggleStrategy(strategy.title, "universal")}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Intervention supports</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Add up to 2 if needed next
                  </h3>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {selectedIntervention.length}/2 selected
                </div>
              </div>
              <div className="space-y-4">
                {selectedArea.intervention.map((strategy) => (
                  <StrategyCard
                    key={strategy.title}
                    strategy={strategy}
                    selected={selectedIntervention.includes(strategy.title)}
                    onToggle={() => toggleStrategy(strategy.title, "intervention")}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="plan" className="print-plan mx-auto max-w-7xl px-6 py-12">
          <div className="plan-grid grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm print-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Meeting notes</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Build this week's plan
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700">
                <div>
                  <p className="font-semibold text-slate-950">Observed concern</p>
                  <p className="mt-1">{selectedConcern.label}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Likely need area</p>
                  <p className="mt-1">{selectedArea.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">What the team should monitor</p>
                  <ul className="mt-2 space-y-2">
                    {selectedArea.lookFors.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="screen-only rounded-3xl border border-slate-200 bg-slate-50 p-4 print-compact">
                  <p className="font-semibold text-slate-950">Suggested meeting questions</p>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li>What is the teacher seeing most often?</li>
                    <li>When does it happen?</li>
                    <li>What has already been tried?</li>
                    <li>What seems to reduce the problem, even a little?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm print-card">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Teacher action plan</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Short enough to use tomorrow
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="screen-only rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Print plan
                </button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2 plan-columns">
                <div className="rounded-3xl border border-sky-200 bg-sky-50 p-5 print-compact">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Universal supports to try now</p>
                  {selectedUniversalStrategies.length > 0 ? (
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      {selectedUniversalStrategies.map((strategy) => (
                        <li key={strategy.title} className="rounded-2xl bg-white px-4 py-3 print-item">
                          <p className="font-semibold text-slate-950">{strategy.title}</p>
                          <p className="mt-1 leading-relaxed screen-only">{strategy.whenToTry}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      Select up to 3 universal strategies above to build the week's first layer of support.
                    </p>
                  )}
                </div>

                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 print-compact">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Intervention supports to hold ready</p>
                  {selectedInterventionStrategies.length > 0 ? (
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      {selectedInterventionStrategies.map((strategy) => (
                        <li key={strategy.title} className="rounded-2xl bg-white px-4 py-3 print-item">
                          <p className="font-semibold text-slate-950">{strategy.title}</p>
                          <p className="mt-1 leading-relaxed screen-only">{strategy.whenToTry}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      Add up to 2 intervention options if the team needs a stronger next layer after universal supports.
                    </p>
                  )}
                </div>
              </div>

              <div className="print-only mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What to monitor this week</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {selectedArea.lookFors.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="screen-only mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Support areas</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Browse the first five areas teachers ask for help with most.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              These categories cover the most common meeting starting points: attention, behavior,
              emotional response, participation with others, and literacy access.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => {
                  setSelectedAreaId(area.id);
                  document.getElementById("meeting-mode")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="grid h-14 w-14 place-items-center rounded-[1.25rem]" style={{ backgroundColor: area.accentSoft }}>
                  <SupportIcon icon={area.icon} color={area.accent} />
                </div>
                <p className="mt-5 text-lg font-semibold text-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {area.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.tagline}</p>
                <p className="mt-5 text-sm font-semibold text-slate-950">Teacher question</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.teacherQuestion}</p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
