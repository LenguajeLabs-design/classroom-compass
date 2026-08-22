import { useMemo, useState } from "react";
import { concerns, supportAreas, type Strategy, type SupportArea } from "@/content/compass";

const steps = ["Concern", "Likely need", "Supports", "Plan"];

function CompassMark() {
  return <div className="brand-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.5"/><path d="M13.8 8.2 12 13.6 6.6 15.4 8.4 10z" fill="currentColor"/><circle cx="11" cy="11" r="1.2" fill="white"/></svg></div>;
}

function AreaIcon({ area }: { area: SupportArea }) {
  const icons = { focus: "◎", shield: "◇", heart: "♡", group: "◌", book: "▤", globe: "◎", voice: "♬" };
  return <span className="area-icon" style={{ backgroundColor: area.accentSoft, color: area.accent }} aria-hidden="true">{icons[area.icon]}</span>;
}

function Stepper({ current, onStep }: { current: number; onStep: (step: number) => void }) {
  return <nav className="stepper screen-only" aria-label="Plan progress">{steps.map((label, index) => <button key={label} type="button" className={`step ${index === current ? "is-current" : ""} ${index < current ? "is-complete" : ""}`} onClick={() => index <= current && onStep(index)} disabled={index > current} aria-current={index === current ? "step" : undefined}><span className="step-number">{index < current ? "✓" : index + 1}</span><span>{label}</span></button>)}</nav>;
}

function StrategyOption({ strategy, selected, onToggle }: { strategy: Strategy; selected: boolean; onToggle: () => void }) {
  return <article className={`strategy ${selected ? "is-selected" : ""}`}>
    <button type="button" className="strategy-select" onClick={onToggle} aria-pressed={selected}><span className="strategy-copy"><span className="strategy-title">{strategy.title}</span><span className="strategy-summary">{strategy.helpsWith}</span></span><span className="selection-mark" aria-hidden="true">{selected ? "✓" : "+"}</span></button>
    <details className="strategy-details"><summary>View classroom details</summary><div className="detail-grid"><p><strong>What it looks like</strong>{strategy.classroomLook}</p><p><strong>When to try it</strong>{strategy.tryTomorrow ?? strategy.whenToTry}</p>{strategy.lookFor && <p><strong>Look for</strong>{strategy.lookFor}</p>}{strategy.reference && <p className="reference"><strong>Reference</strong>{strategy.reference}</p>}</div></details>
  </article>;
}

function PlanSummary({ area, concernLabel, universal, intervention, compact = false }: { area: SupportArea; concernLabel: string; universal: Strategy[]; intervention: Strategy[]; compact?: boolean }) {
  const total = universal.length + intervention.length;
  return <div className={compact ? "plan-summary compact" : "plan-summary"}>
    <div className="plan-summary-heading"><div><p className="eyebrow">Your plan</p><h2>{total ? `${total} support${total === 1 ? "" : "s"} selected` : "Ready when you are"}</h2></div><span className="plan-count" aria-label={`${total} supports selected`}>{total}</span></div>
    {!compact && <><dl className="plan-facts"><div><dt>Concern</dt><dd>{concernLabel}</dd></div><div><dt>Likely need</dt><dd>{area.name}</dd></div></dl>{total === 0 ? <div className="empty-state"><p>Choose a few practical supports to create a plan for this week.</p></div> : <div className="plan-picks">{universal.map(item => <p key={item.title}><span className="dot universal-dot"/>{item.title}</p>)}{intervention.map(item => <p key={item.title}><span className="dot intervention-dot"/>{item.title}</p>)}</div>}</>}
  </div>;
}

function App() {
  const [step, setStep] = useState(0);
  const [selectedConcernId, setSelectedConcernId] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [selectedUniversal, setSelectedUniversal] = useState<string[]>([]);
  const [selectedIntervention, setSelectedIntervention] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [showAllAreas, setShowAllAreas] = useState(false);
  const [message, setMessage] = useState("");

  const selectedConcern = concerns.find(item => item.id === selectedConcernId) ?? null;
  const likelyAreas = selectedConcern ? supportAreas.filter(area => selectedConcern.supportAreaIds.includes(area.id)) : [];
  const selectedArea = supportAreas.find(item => item.id === selectedAreaId) ?? likelyAreas[0] ?? supportAreas[0];
  const filteredConcerns = useMemo(() => { const value = query.trim().toLowerCase(); return value ? concerns.filter(item => `${item.label} ${item.summary}`.toLowerCase().includes(value)) : concerns; }, [query]);
  const universalStrategies = selectedArea.universal.filter(item => selectedUniversal.includes(item.title));
  const interventionStrategies = selectedArea.intervention.filter(item => selectedIntervention.includes(item.title));
  const selectionTotal = selectedUniversal.length + selectedIntervention.length;

  const chooseConcern = (id: string) => {
    const concern = concerns.find(item => item.id === id); if (!concern) return;
    setSelectedConcernId(id); setSelectedAreaId(concern.supportAreaIds[0] ?? supportAreas[0].id); setSelectedUniversal([]); setSelectedIntervention([]); setMessage("");
  };
  const chooseArea = (id: string) => { setSelectedAreaId(id); setSelectedUniversal([]); setSelectedIntervention([]); setMessage(""); };
  const toggleStrategy = (title: string, type: "universal" | "intervention") => {
    const selected = type === "universal" ? selectedUniversal : selectedIntervention;
    const update = type === "universal" ? setSelectedUniversal : setSelectedIntervention;
    const limit = type === "universal" ? 3 : 2;
    if (selected.includes(title)) { update(selected.filter(item => item !== title)); setMessage("Support removed from your plan."); return; }
    if (selected.length >= limit) { setMessage(`You can choose up to ${limit} ${type} supports. Remove one before adding another.`); return; }
    update([...selected, title]); setMessage("Support added to your plan.");
  };
  const reset = () => { setStep(0); setSelectedConcernId(null); setSelectedAreaId(null); setSelectedUniversal([]); setSelectedIntervention([]); setQuery(""); setShowAllAreas(false); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goToStep = (next: number) => { setStep(next); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const concernLabel = selectedConcern?.label ?? "No concern selected";

  return <div className="app-shell">
    <a className="skip-link" href="#workspace">Skip to plan builder</a>
    <header className="app-header screen-only"><div className="header-inner"><button type="button" className="brand" onClick={reset} aria-label="Classroom Compass home"><CompassMark/><span><strong>Classroom Compass</strong><small>Practical support planning</small></span></button><button type="button" className="quiet-button" onClick={reset}>Start a new plan</button></div></header>
    <main id="workspace" className="workspace">
      <section className="intro screen-only"><p className="eyebrow">Problem to plan</p><h1>Find a helpful next step for a student.</h1><p>Start with what you notice. Classroom Compass will guide you toward practical supports for this week.</p><div className="safety-note"><span aria-hidden="true">i</span>This tool supports teacher decision-making. It does not diagnose students.</div></section>
      <Stepper current={step} onStep={goToStep}/>
      <div className="workspace-grid">
        <section className="flow-card" aria-labelledby={`step-${step}-title`}>
          {step === 0 && <div className="step-panel">
            <div className="section-heading"><p className="eyebrow">Step 1 of 4</p><h2 id="step-0-title">What are you noticing?</h2><p>Choose the classroom concern that feels closest. You can adjust it later.</p></div>
            <label className="search-field"><span>Search concerns</span><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Try “reading,” “shutdown,” or “group work”"/></label>
            <div className="choice-grid concern-grid">{filteredConcerns.map(concern => <button key={concern.id} type="button" className={`choice-card ${selectedConcernId === concern.id ? "is-selected" : ""}`} aria-pressed={selectedConcernId === concern.id} onClick={() => chooseConcern(concern.id)}><span className="choice-check" aria-hidden="true">{selectedConcernId === concern.id ? "✓" : ""}</span><strong>{concern.label}</strong><span>{concern.summary}</span></button>)}</div>
            {filteredConcerns.length === 0 && <div className="empty-state"><p>No close match. Try a shorter search.</p></div>}
            <div className="flow-actions end"><button className="primary-button" type="button" disabled={!selectedConcern} onClick={() => goToStep(1)}>Consider the likely need <span aria-hidden="true">→</span></button></div>
          </div>}

          {step === 1 && selectedConcern && <div className="step-panel">
            <div className="section-heading"><p className="eyebrow">Step 2 of 4</p><h2 id="step-1-title">What might be underneath this?</h2><p>These are possibilities, not labels. Choose the area that gives the team the most useful place to start.</p></div>
            <div className="context-chip"><span>Observed concern</span><strong>{selectedConcern.label}</strong></div>
            <div className="choice-grid">{(showAllAreas ? supportAreas : likelyAreas).map(area => <button key={area.id} type="button" className={`choice-card area-choice ${selectedArea.id === area.id ? "is-selected" : ""}`} aria-pressed={selectedArea.id === area.id} onClick={() => chooseArea(area.id)}><AreaIcon area={area}/><span className="choice-copy"><strong>{area.name}</strong><span>{area.tagline}</span></span><span className="choice-check" aria-hidden="true">{selectedArea.id === area.id ? "✓" : ""}</span></button>)}</div>
            <button className="text-button" type="button" onClick={() => setShowAllAreas(!showAllAreas)}>{showAllAreas ? "Show suggested areas only" : "Not quite right? Browse all support areas"}</button>
            <div className="teacher-lens"><span>Useful question for the team</span><p>“{selectedArea.teacherQuestion}”</p></div>
            <div className="flow-actions"><button className="secondary-button" type="button" onClick={() => goToStep(0)}>Back</button><button className="primary-button" type="button" onClick={() => goToStep(2)}>Choose supports <span aria-hidden="true">→</span></button></div>
          </div>}

          {step === 2 && selectedConcern && <div className="step-panel">
            <div className="section-heading"><p className="eyebrow">Step 3 of 4</p><h2 id="step-2-title">Choose a small plan for this week.</h2><p>Start with one or two universal supports. Add an intervention only when the team needs a stronger layer.</p></div>
            <div className="support-section universal-section"><div className="support-heading"><div><span className="level-label universal-label">Start here</span><h3>Universal supports</h3></div><span>{selectedUniversal.length} of 3 selected</span></div><div className="strategy-list">{selectedArea.universal.map(strategy => <StrategyOption key={strategy.title} strategy={strategy} selected={selectedUniversal.includes(strategy.title)} onToggle={() => toggleStrategy(strategy.title, "universal")}/>)}</div></div>
            <details className="intervention-section" open={selectedIntervention.length > 0}><summary><span><span className="level-label intervention-label">Optional next layer</span><strong>Intervention supports</strong></span><span>{selectedIntervention.length} of 2 selected</span></summary><p className="intervention-intro">Use these when universal supports have been tried consistently and the student needs more individualized help.</p><div className="strategy-list">{selectedArea.intervention.map(strategy => <StrategyOption key={strategy.title} strategy={strategy} selected={selectedIntervention.includes(strategy.title)} onToggle={() => toggleStrategy(strategy.title, "intervention")}/>)}</div></details>
            <p className="status-message" aria-live="polite">{message}</p>
            <div className="flow-actions"><button className="secondary-button" type="button" onClick={() => goToStep(1)}>Back</button><button className="primary-button" type="button" disabled={selectionTotal === 0} onClick={() => goToStep(3)}>Review the plan <span aria-hidden="true">→</span></button></div>
          </div>}

          {step === 3 && selectedConcern && <div className="step-panel final-plan">
            <div className="section-heading"><p className="eyebrow">Step 4 of 4</p><h2 id="step-3-title">Your plan for this week</h2><p>Short, specific, and ready to use in the next teacher meeting.</p></div>
            <div className="final-context"><div><span>Observed concern</span><strong>{selectedConcern.label}</strong></div><div><span>Likely need</span><strong>{selectedArea.name}</strong></div></div>
            <div className="final-section universal-final"><p className="eyebrow">Universal supports to try now</p>{universalStrategies.length ? universalStrategies.map(strategy => <div className="final-strategy" key={strategy.title}><strong>{strategy.title}</strong><p>{strategy.tryTomorrow ?? strategy.classroomLook}</p></div>) : <p>No universal supports selected.</p>}</div>
            {interventionStrategies.length > 0 && <div className="final-section intervention-final"><p className="eyebrow">Intervention supports to hold ready</p>{interventionStrategies.map(strategy => <div className="final-strategy" key={strategy.title}><strong>{strategy.title}</strong><p>{strategy.whenToTry}</p></div>)}</div>}
            <div className="monitor-section"><p className="eyebrow">Watch for this week</p><ul>{selectedArea.lookFors.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="flow-actions final-actions"><button className="secondary-button screen-only" type="button" onClick={() => goToStep(2)}>Edit supports</button><button className="primary-button screen-only" type="button" onClick={() => window.print()}>Print this plan</button></div>
          </div>}
        </section>
        <aside className="summary-column screen-only" aria-label="Current plan summary"><PlanSummary area={selectedArea} concernLabel={concernLabel} universal={universalStrategies} intervention={interventionStrategies}/><div className="meeting-tip"><span>Meeting tip</span><p>Agree on what the teacher will try, when they will try it, and what the team will watch for.</p></div></aside>
      </div>
    </main>
    {step < 3 && selectedConcern && <button type="button" className="mobile-plan-bar screen-only" onClick={() => selectionTotal > 0 && goToStep(3)} disabled={selectionTotal === 0}><PlanSummary compact area={selectedArea} concernLabel={concernLabel} universal={universalStrategies} intervention={interventionStrategies}/><span aria-hidden="true">↑</span></button>}
  </div>;
}

export default App;
