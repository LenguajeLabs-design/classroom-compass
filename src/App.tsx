import { useMemo, useState } from "react";
import { concerns, supportAreas, type Strategy, type SupportArea } from "@/content/compass";
import { evidenceSources, getProfileStrategies, profiles, type ProfileId, type ProfileStrategy } from "@/content/profiles";

const steps = ["Notice", "Consider", "Choose", "Act"];
const assetPath = (filename: string) => `${import.meta.env.BASE_URL}${filename}`;

function CompassMark() {
  return <div className="brand-mark" aria-hidden="true"><img src={assetPath("classroom-compass-mark.svg")} alt="" width="48" height="48" /></div>;
}

function AreaIcon({ area }: { area: SupportArea }) {
  const paths = {
    focus: <><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/></>,
    shield: <><path d="M12 3.5 18 6v5c0 3.7-2.4 6.4-6 8-3.6-1.6-6-4.3-6-8V6l6-2.5Z"/><path d="m9.5 11.5 1.6 1.6 3.6-3.7"/></>,
    heart: <path d="M12 19s-7-4.2-7-9.4A3.9 3.9 0 0 1 12 7.2a3.9 3.9 0 0 1 7 2.4C19 14.8 12 19 12 19Z"/>,
    group: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3.5 19c0-3.2 2.5-5.5 5.6-5.5s5.6 2.3 5.6 5.5M14.5 15c.8-.7 1.8-1 3-1 1.7 0 3 .7 3.8 1.8"/></>,
    book: <><path d="M4.5 5h5a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3h-5V5Z"/><path d="M19.5 5h-5a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h5V5Z"/></>,
    globe: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8S14.2 17.7 12 20c-2.2-2.3-3.3-5-3.3-8S9.8 6.3 12 4Z"/></>,
    voice: <><rect x="9" y="4" width="6" height="10" rx="3"/><path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3M9 20h6"/></>,
  };
  return <span className="area-icon" style={{ backgroundColor: area.accentSoft, color: area.accent }} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[area.icon]}</svg></span>;
}

function Stepper({ current, onStep }: { current: number; onStep: (step: number) => void }) {
  return <nav className={`stepper stepper-progress-${current} screen-only`} aria-label="Plan progress">{steps.map((label, index) => <button key={label} type="button" className={`step ${index === current ? "is-current" : ""} ${index < current ? "is-complete" : ""}`} onClick={() => index <= current && onStep(index)} disabled={index > current} aria-current={index === current ? "step" : undefined}><span className="step-number">{index === current ? <img className="route-compass" src={assetPath("favicon.svg")} alt="" aria-hidden="true" /> : index < current ? "✓" : index + 1}</span><span>{label}</span></button>)}</nav>;
}

function StrategyOption({ strategy, selected, onToggle, badge }: { strategy: Strategy; selected: boolean; onToggle: () => void; badge?: string }) {
  const quickStart = strategy.tryTomorrow ?? strategy.helpsWith;
  return <article className={`strategy ${selected ? "is-selected" : ""}`}>
    <button type="button" className="strategy-select" onClick={onToggle} aria-pressed={selected}><span className="strategy-copy">{badge && <span className="strategy-badge">{badge}</span>}<span className="strategy-title">{strategy.title}</span><span className="quick-start-label">Try tomorrow</span><span className="strategy-summary">{quickStart}</span></span><span className="selection-mark" aria-hidden="true">{selected ? "✓" : "+"}</span></button>
    <details className="strategy-details"><summary>Why and how this helps</summary><div className="detail-grid"><p><strong>What it helps with</strong>{strategy.helpsWith}</p><p><strong>What it looks like</strong>{strategy.classroomLook}</p><p><strong>When to try it</strong>{strategy.whenToTry}</p>{strategy.lookFor && <p><strong>Look for</strong>{strategy.lookFor}</p>}{strategy.reference && <p className="reference"><strong>Evidence or guidance source</strong>{strategy.reference}</p>}</div></details>
  </article>;
}

function asCompassStrategy(strategy: ProfileStrategy): Strategy {
  return {
    title: strategy.title,
    level: strategy.level === "teacher-ready" ? "Universal" : "Intervention",
    helpsWith: strategy.needAddressed,
    classroomLook: strategy.teacherAction,
    whenToTry: strategy.trainingNeeded ?? strategy.teacherAction,
    tryTomorrow: strategy.tryTomorrow,
    lookFor: strategy.monitor.join(" • "),
    reference: strategy.evidenceNote,
  };
}

function PlanSummary({ area, concernLabel, profileLabel, universal, intervention, compact = false }: { area: SupportArea; concernLabel: string; profileLabel?: string; universal: Strategy[]; intervention: Strategy[]; compact?: boolean }) {
  const total = universal.length + intervention.length;
  return <div className={compact ? "plan-summary compact" : "plan-summary"}>
    <div className="plan-summary-heading"><div><p className="eyebrow">Meeting brief</p><h2>{total ? `${total} support${total === 1 ? "" : "s"} selected` : "Ready when you are"}</h2></div><span className="plan-count" aria-label={`${total} supports selected`}>{total}</span></div>
    {!compact && <><dl className="plan-facts"><div><dt>Concern</dt><dd>{concernLabel}</dd></div><div><dt>Likely need</dt><dd>{area.name}</dd></div>{profileLabel && <div><dt>Known learner profile</dt><dd>{profileLabel}</dd></div>}</dl>{total === 0 ? <div className="empty-state"><p>Choose a few practical supports to create a plan for this week.</p></div> : <div className="plan-picks">{universal.map(item => <p key={item.title}><span className="dot universal-dot"/>{item.title}</p>)}{intervention.map(item => <p key={item.title}><span className="dot intervention-dot"/>{item.title}</p>)}</div>}</>}
  </div>;
}

function App() {
  const [step, setStep] = useState(0);
  const [selectedConcernId, setSelectedConcernId] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [selectedUniversal, setSelectedUniversal] = useState<string[]>([]);
  const [selectedIntervention, setSelectedIntervention] = useState<string[]>([]);
  const [selectedProfileIds, setSelectedProfileIds] = useState<ProfileId[]>([]);
  const [query, setQuery] = useState("");
  const [showAllAreas, setShowAllAreas] = useState(false);
  const [message, setMessage] = useState("");
  const [implementationNote, setImplementationNote] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  const selectedConcern = concerns.find(item => item.id === selectedConcernId) ?? null;
  const likelyAreas = selectedConcern ? supportAreas.filter(area => selectedConcern.supportAreaIds.includes(area.id)) : [];
  const selectedArea = supportAreas.find(item => item.id === selectedAreaId) ?? likelyAreas[0] ?? supportAreas[0];
  const filteredConcerns = useMemo(() => { const value = query.trim().toLowerCase(); return value ? concerns.filter(item => `${item.label} ${item.summary}`.toLowerCase().includes(value)) : concerns; }, [query]);
  const matchingProfileStrategies = selectedConcern ? getProfileStrategies(selectedProfileIds, selectedConcern.id) : [];
  const profileUniversal = matchingProfileStrategies.filter(item => item.level === "teacher-ready").map(asCompassStrategy);
  const profileIntervention = matchingProfileStrategies.filter(item => item.level === "specialist-supported").map(asCompassStrategy);
  const universalStrategies = [...profileUniversal, ...selectedArea.universal].filter(item => selectedUniversal.includes(item.title));
  const interventionStrategies = [...profileIntervention, ...selectedArea.intervention].filter(item => selectedIntervention.includes(item.title));
  const selectedProfiles = profiles.filter(profile => selectedProfileIds.includes(profile.id));
  const profileLabel = selectedProfiles.map(profile => profile.shortName).join(", ");
  const selectionTotal = selectedUniversal.length + selectedIntervention.length;

  const chooseConcern = (id: string) => {
    const concern = concerns.find(item => item.id === id); if (!concern) return;
    setSelectedConcernId(id); setSelectedAreaId(concern.supportAreaIds[0] ?? supportAreas[0].id); setSelectedUniversal([]); setSelectedIntervention([]); setMessage("");
  };
  const chooseArea = (id: string) => { setSelectedAreaId(id); setSelectedUniversal([]); setSelectedIntervention([]); setMessage(""); };
  const toggleProfile = (id: ProfileId) => {
    setSelectedProfileIds(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
    setSelectedUniversal([]); setSelectedIntervention([]); setMessage("");
  };
  const toggleStrategy = (title: string, type: "universal" | "intervention") => {
    const selected = type === "universal" ? selectedUniversal : selectedIntervention;
    const update = type === "universal" ? setSelectedUniversal : setSelectedIntervention;
    const limit = type === "universal" ? 3 : 2;
    if (selected.includes(title)) { update(selected.filter(item => item !== title)); setMessage("Support removed from your plan."); return; }
    if (selected.length >= limit) { setMessage(`You can choose up to ${limit} ${type} supports. Remove one before adding another.`); return; }
    update([...selected, title]); setMessage("Support added to your plan.");
  };
  const reset = () => { setStep(0); setSelectedConcernId(null); setSelectedAreaId(null); setSelectedUniversal([]); setSelectedIntervention([]); setSelectedProfileIds([]); setQuery(""); setShowAllAreas(false); setMessage(""); setImplementationNote(""); setReviewDate(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goToStep = (next: number) => { setStep(next); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const concernLabel = selectedConcern?.label ?? "No concern selected";

  return <div className="app-shell">
    <a className="skip-link" href="#workspace">Skip to plan builder</a>
    <header className="app-header screen-only"><div className="header-inner"><button type="button" className="brand" onClick={reset} aria-label="Classroom Compass home"><CompassMark/><span><strong>Classroom Compass</strong><small>Practical support planning</small></span></button><button type="button" className="quiet-button" onClick={reset}>Start a new plan</button></div></header>
    <main id="workspace" className="workspace">
      <section className="intro screen-only">
        <div className="intro-copy"><p className="eyebrow">Problem to plan</p><h1>Find a helpful next step for a student.</h1><p>Start with what you notice. Classroom Compass will guide you toward practical supports for this week.</p><div className="trust-row" aria-label="About this tool"><span>About 3 minutes</span><span>No student data saved</span><span>Not a diagnostic tool</span></div></div>
        <aside className="outcome-card" aria-label="What the plan includes"><div className="outcome-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M16 27c0-9 2-15 10-20M16 20c-4-1-7-4-8-8 5 0 8 2 9 5M19 15c1-5 4-8 9-9 0 5-2 8-7 10"/></svg></div><div><h2>You’ll leave with</h2><ul><li><span>✓</span>1–3 practical supports</li><li><span>◎</span>One monitoring focus</li><li><span>□</span>A printable meeting plan</li></ul></div></aside>
      </section>
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
            <fieldset className="profile-picker"><legend>Known learner profile? <span>Optional</span></legend><p>Use this only when a profile is already known. Select up to two. It refines suggestions; it does not diagnose the student.</p><div className="profile-options">{profiles.map(profile => { const isSelected = selectedProfileIds.includes(profile.id); return <button key={profile.id} type="button" className={isSelected ? "is-selected" : ""} aria-pressed={isSelected} disabled={!isSelected && selectedProfileIds.length >= 2} onClick={() => toggleProfile(profile.id)}><span aria-hidden="true">{isSelected ? "✓" : "+"}</span>{profile.shortName}</button>; })}</div>{selectedProfiles.length > 0 && <div className="profile-safeguards">{selectedProfiles.map(profile => <p key={profile.id}><strong>{profile.shortName}:</strong> {profile.safeguard}</p>)}</div>}</fieldset>
            <div className="flow-actions"><button className="secondary-button" type="button" onClick={() => goToStep(0)}>Back</button><button className="primary-button" type="button" onClick={() => goToStep(2)}>Choose supports <span aria-hidden="true">→</span></button></div>
          </div>}

          {step === 2 && selectedConcern && <div className="step-panel">
            <div className="section-heading"><p className="eyebrow">Step 3 of 4</p><h2 id="step-2-title">Choose a small plan for this week.</h2><p>Start with one or two universal supports. Add an intervention only when the team needs a stronger layer.</p></div>
            {matchingProfileStrategies.length > 0 && <section className="profile-recommendations" aria-labelledby="profile-recommendations-title"><div className="support-heading"><div><span className="level-label profile-label">Refined by known profile</span><h3 id="profile-recommendations-title">Suggestions for {profileLabel}</h3></div></div><p className="profile-recommendations-intro">These options respond to both the observed concern and the known profile. They do not replace the student’s individual plan.</p><div className="strategy-list">{matchingProfileStrategies.map(item => { const strategy = asCompassStrategy(item); const type = item.level === "teacher-ready" ? "universal" : "intervention"; const selected = type === "universal" ? selectedUniversal.includes(strategy.title) : selectedIntervention.includes(strategy.title); return <StrategyOption key={item.id} strategy={strategy} badge={item.level === "teacher-ready" ? "Teacher-ready" : "Specialist-supported"} selected={selected} onToggle={() => toggleStrategy(strategy.title, type)}/>; })}</div></section>}
            <div className="support-section universal-section"><div className="support-heading"><div><span className="level-label universal-label">Start here</span><h3>Universal supports</h3></div><span>{selectedUniversal.length} of 3 selected</span></div><div className="strategy-list">{selectedArea.universal.map(strategy => <StrategyOption key={strategy.title} strategy={strategy} selected={selectedUniversal.includes(strategy.title)} onToggle={() => toggleStrategy(strategy.title, "universal")}/>)}</div></div>
            <details className="intervention-section" open={selectedIntervention.length > 0}><summary><span><span className="level-label intervention-label">Optional next layer</span><strong>Intervention supports</strong></span><span>{selectedIntervention.length} of 2 selected</span></summary><p className="intervention-intro">Use these when universal supports have been tried consistently and the student needs more individualized help.</p><div className="strategy-list">{selectedArea.intervention.map(strategy => <StrategyOption key={strategy.title} strategy={strategy} selected={selectedIntervention.includes(strategy.title)} onToggle={() => toggleStrategy(strategy.title, "intervention")}/>)}</div></details>
            <p className="status-message" aria-live="polite">{message}</p>
            <div className="flow-actions"><button className="secondary-button" type="button" onClick={() => goToStep(1)}>Back</button><button className="primary-button" type="button" disabled={selectionTotal === 0} onClick={() => goToStep(3)}>Review the plan <span aria-hidden="true">→</span></button></div>
          </div>}

          {step === 3 && selectedConcern && <div className="step-panel final-plan">
            <div className="section-heading"><p className="eyebrow">Step 4 of 4</p><h2 id="step-3-title">Your plan for this week</h2><p>Short, specific, and ready to use in the next teacher meeting.</p></div>
            <div className={`final-context ${profileLabel ? "has-profile" : ""}`}><div><span>Observed concern</span><strong>{selectedConcern.label}</strong></div><div><span>Likely need</span><strong>{selectedArea.name}</strong></div>{profileLabel && <div><span>Known learner profile</span><strong>{profileLabel}</strong></div>}</div>
            <div className="final-section universal-final"><p className="eyebrow">Universal supports to try now</p>{universalStrategies.length ? universalStrategies.map(strategy => <div className="final-strategy" key={strategy.title}><strong>{strategy.title}</strong><p>{strategy.tryTomorrow ?? strategy.classroomLook}</p></div>) : <p>No universal supports selected.</p>}</div>
            {interventionStrategies.length > 0 && <div className="final-section intervention-final"><p className="eyebrow">Intervention supports to hold ready</p>{interventionStrategies.map(strategy => <div className="final-strategy" key={strategy.title}><strong>{strategy.title}</strong><p>{strategy.whenToTry}</p></div>)}</div>}
            <div className="monitor-section"><p className="eyebrow">Watch for this week</p><ul>{selectedArea.lookFors.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="commitment-section">
              <div className="commitment-heading"><p className="eyebrow">Before the meeting ends</p><h3>Make the follow-through clear.</h3><p>Keep this brief. Do not enter a student’s full name or sensitive information.</p></div>
              <label className="plan-field"><span>When and where will the team try this?</span><textarea value={implementationNote} onChange={event => setImplementationNote(event.target.value)} rows={3} placeholder="Example: Ms. Lee will use the visual task card during independent writing." /></label>
              <label className="plan-field date-field"><span>Check back on</span><input type="date" value={reviewDate} onChange={event => setReviewDate(event.target.value)} /></label>
            </div>
            <div className="principled-next-step"><strong>If the plan is not helping</strong><p>Check whether it was used consistently, ask the student what helped or got in the way, and review the plan with the family or appropriate support team. Escalate urgent safety, safeguarding, or severe-distress concerns through school procedures rather than relying on this tool.</p></div>
            <div className="flow-actions final-actions"><button className="secondary-button screen-only" type="button" onClick={() => goToStep(2)}>Edit supports</button><button className="primary-button screen-only" type="button" onClick={() => window.print()}>Print this plan</button></div>
          </div>}
        </section>
        <aside className="summary-column screen-only" aria-label="Current plan summary"><PlanSummary area={selectedArea} concernLabel={concernLabel} profileLabel={profileLabel} universal={universalStrategies} intervention={interventionStrategies}/><div className="meeting-tip"><span>Meeting tip</span><p>Agree on what the teacher will try, when they will try it, and what the team will watch for.</p></div></aside>
      </div>
    </main>
    <footer className="evidence-footer screen-only">
      <details>
        <summary><span><strong>Evidence &amp; guidance</strong><small>See the sources and how recommendations are described</small></span><span aria-hidden="true">+</span></summary>
        <div className="evidence-content">
          <div className="evidence-intro"><p className="eyebrow">Our approach</p><h2>Useful guidance, with its limits visible.</h2><p>Classroom Compass translates authoritative practice guides and professional guidance into small classroom actions. It does not diagnose students, replace an individual plan, or imply that every accommodation has the same level of research support.</p></div>
          <div className="evidence-key" aria-label="How evidence is described"><div><strong>Evidence-backed practice</strong><p>A broader intervention approach supported by research reviews or authoritative evidence summaries.</p></div><div><strong>Practice-guide recommendation</strong><p>A recommendation taken from a formal practice guide that reports the supporting evidence.</p></div><div><strong>Professional consensus</strong><p>Authoritative implementation guidance where evidence for the exact classroom action may be indirect.</p></div><div><strong>Access accommodation</strong><p>A practical way to reduce a barrier. Helpfulness should be checked with the student rather than assumed.</p></div></div>
          <div className="source-list"><h3>Sources used in the current strategy library</h3><ul>{evidenceSources.map(source => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer"><strong>{source.organization}</strong><span>{source.title}</span><span aria-hidden="true">↗</span></a></li>)}</ul></div>
          <p className="evidence-review-note">Sources were checked in August 2026. Recommendations should be reviewed with relevant specialists and adapted with the student, family, and school team.</p>
        </div>
      </details>
    </footer>
    {step < 3 && selectedConcern && <button type="button" className="mobile-plan-bar screen-only" onClick={() => selectionTotal > 0 && goToStep(3)} disabled={selectionTotal === 0}><PlanSummary compact area={selectedArea} concernLabel={concernLabel} profileLabel={profileLabel} universal={universalStrategies} intervention={interventionStrategies}/><span aria-hidden="true">↑</span></button>}
  </div>;
}

export default App;
