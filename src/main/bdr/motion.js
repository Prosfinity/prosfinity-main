import { useEffect, useRef, useState } from "react";

const visualFlows = {
  Visibility: { icon: "◎", accent: "cyan", result: "Context captured", glyphs: ["cursor", "radar", "chart"], labels: ["Action", "Sense", "See"] },
  Policy: { icon: "◇", accent: "violet", result: "Policy evaluated", glyphs: ["rule", "filter", "split"], labels: ["Rule", "Match", "Decide"] },
  Response: { icon: "↯", accent: "amber", result: "Threat contained", glyphs: ["alert", "shield", "bell"], labels: ["Detect", "Block", "Alert"] },
  Coverage: { icon: "◉", accent: "emerald", result: "Coverage verified", glyphs: ["browser", "pulse", "grid"], labels: ["Browser", "Health", "Fleet"] },
  Assignment: { icon: "⌘", accent: "blue", result: "Protection assigned", glyphs: ["person", "target", "lock"], labels: ["Identity", "Target", "Protect"] },
  Governance: { icon: "≋", accent: "rose", result: "Evidence preserved", glyphs: ["edit", "ledger", "check"], labels: ["Change", "Record", "Prove"] },
  Extension: { icon: "⬡", accent: "cyan", result: "Extension operational", glyphs: ["extension", "sync", "console"], labels: ["Control", "Sync", "Operate"] },
};

const portalScenes = {
  Visibility: { title: "Browser activity", metric: "1,284", metricLabel: "events today", rows: [["Prompt submitted", "Matched", "high"], ["File upload", "Monitored", "low"], ["Clipboard paste", "Blocked", "high"]], chart: true },
  Policy: { title: "Policy builder", metric: "12", metricLabel: "active policies", rows: [["GenAI data control", "Block", "high"], ["File upload control", "Monitor", "low"], ["Restricted domains", "Block", "high"]], toggles: true },
  Response: { title: "Alert investigation", metric: "08", metricLabel: "open alerts", rows: [["Sensitive file upload", "Blocked", "high"], ["Policy matched", "Upload control", "low"], ["Response complete", "Evidence ready", "ok"]], timeline: true },
  Coverage: { title: "Extension inventory", metric: "96%", metricLabel: "browser coverage", rows: [["Chrome · Finance-07", "Protected", "ok"], ["Edge · Design-12", "At risk", "high"], ["Chrome · Sales-04", "Protected", "ok"]], browsers: true },
  Assignment: { title: "Policy assignment", metric: "146", metricLabel: "users protected", rows: [["Finance", "3 policies", "ok"], ["Engineering", "5 policies", "ok"], ["Contractors", "Review", "high"]], people: true },
  Governance: { title: "Audit trail", metric: "24", metricLabel: "changes this week", rows: [["Policy updated", "Admin", "low"], ["Group assigned", "Recorded", "ok"], ["Rule enabled", "Evidence", "ok"]], audit: true },
  Extension: { title: "Extension health", metric: "142", metricLabel: "extensions online", rows: [["Policy sync", "Current", "ok"], ["Event delivery", "Healthy", "ok"], ["Runtime status", "Connected", "ok"]], extension: true },
};

function MiniPortal({ scene, accent }) {
  return <div className={`bdr-mini-portal is-${accent}`}>
    <aside><b>VG</b>{["overview", "shield", "alert", "devices", "settings"].map((x) => <i key={x} className={`is-${x}`} />)}</aside>
    <main>
      <header><div><small>PROSFINITY BDR</small><strong>{scene.title}</strong></div><span><i /> Live</span></header>
      <section className="bdr-mini-summary">
        <div className="bdr-mini-metric"><small>{scene.metricLabel}</small><strong>{scene.metric}</strong><span><i style={{ width: scene.metric === "96%" ? "96%" : "78%" }} /></span></div>
        <div className={`bdr-mini-feature ${scene.browsers ? "is-browsers" : ""}`}>
          {scene.browsers ? <><span className="bdr-browser-ring"><b>✓</b></span><div><strong>Managed extension</strong><small>Chrome & Chromium</small></div></> :
          scene.chart ? <div className="bdr-mini-bars">{[42,68,54,86,64,92,74].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div> :
          <><span className="bdr-browser-ring"><b>{scene.extension ? "⬡" : scene.timeline ? "!" : "✓"}</b></span><div><strong>{scene.extension ? "Runtime healthy" : scene.timeline ? "Action contained" : "Policy enforced"}</strong><small>Updated just now</small></div></>}
        </div>
      </section>
      <section className="bdr-mini-table"><div className="bdr-mini-table-head"><span>{scene.browsers ? "Protected browser" : "Activity"}</span><span>Status</span><span>Risk</span></div>
        {scene.rows.map(([name,status,risk],i)=><div className="bdr-mini-row" key={name} style={{"--row-delay":`${i * 180}ms`}}><span><i className={`bdr-row-icon is-${risk}`} />{name}</span><b>{status}</b><em className={`is-${risk}`}>{risk === "high" ? "High" : risk === "ok" ? "Healthy" : "Low"}</em></div>)}
      </section>
    </main>
  </div>;
}

function RoadmapVisual({ step, index }) {
  const flow = visualFlows[step.label] || { icon: "◎", accent: "cyan", result: "Flow complete", nodes: [] };
  const scene = portalScenes[step.label] || portalScenes.Visibility;
  return (
    <div className={`bdr-roadmap-visual is-${flow.accent}`} aria-label={`${step.label} product flow`}>
      <div className="bdr-visual-topbar">
        <span><i /> PROSFINITY BDR</span>
        <em>LIVE RESPONSE CHAIN</em>
      </div>
      <div className="bdr-visual-watermark" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
      <MiniPortal scene={scene} accent={flow.accent} />
      <div className="bdr-visual-status">
        <span><i /> Live</span>
        <b>{flow.result}</b>
      </div>
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("bdr-reveal-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`bdr-reveal ${className}`}
      style={{ "--bdr-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("bdr-stagger-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -14%" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`bdr-stagger ${className}`}>{children}</Tag>;
}

export function AmbientGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <i className="bdr-orb bdr-orb-one" />
      <i className="bdr-orb bdr-orb-two" />
      <i className="bdr-grid" />
    </div>
  );
}

export function ScrollStory({ steps }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const observers = refs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(index), { threshold: .55, rootMargin: "-18% 0px -18%" });
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [steps.length]);
  return (
    <section className="bdr-story px-5 py-24"><div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-400">Scroll through the response chain</p>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">One browser action. A complete security story.</h2>
      <div className="relative mt-14">
        <div className="bdr-story-line" aria-hidden="true"><i style={{ height: `${((active + 1) / steps.length) * 100}%` }} /></div>
        {steps.map((step, index) => <article key={step.title} ref={(node) => { refs.current[index] = node; }} className={`bdr-story-step ${active === index ? "is-active" : ""}`}>
          <div className="bdr-story-copy">
            <span className="bdr-story-dot">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-400">{step.label}</p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{step.title}</h3>
            <p className="mt-4 max-w-lg leading-7 text-slate-400">{step.text}</p>
          </div>
          <div className="bdr-story-stage"><div className="bdr-story-screen">
            <div className="bdr-story-image is-active"><RoadmapVisual step={step} index={index} /></div>
            <div className="bdr-story-caption"><span>Browser extension → policy → response</span><b>{step.label}</b></div>
          </div></div>
        </article>)}
      </div>
    </div></section>
  );
}
