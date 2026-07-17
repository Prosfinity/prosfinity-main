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

function FlowGlyph({ type }) {
  return <span className={`bdr-glyph bdr-glyph-${type}`} aria-hidden="true"><i /><i /><i /><i /></span>;
}

function RoadmapVisual({ step, index }) {
  const flow = visualFlows[step.label] || { icon: "◎", accent: "cyan", result: "Flow complete", nodes: [] };
  return (
    <div className={`bdr-roadmap-visual is-${flow.accent}`} aria-label={`${step.label} product flow`}>
      <div className="bdr-visual-topbar">
        <span><i /> PROSFINITY BDR</span>
        <em>LIVE RESPONSE CHAIN</em>
      </div>
      <div className="bdr-visual-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="bdr-visual-watermark" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span><i>{flow.icon}</i>
      </div>
      <div className="bdr-visual-flow">
        {flow.glyphs.map((glyph, nodeIndex) => (
          <div className="bdr-visual-segment" key={glyph} style={{ "--node-delay": `${nodeIndex * 220}ms` }}>
            <div className="bdr-visual-node">
              <FlowGlyph type={glyph} />
              <strong>{flow.labels[nodeIndex]}</strong>
            </div>
            {nodeIndex < flow.glyphs.length - 1 && <div className="bdr-visual-connector"><i /><b /></div>}
          </div>
        ))}
      </div>
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
  return <Tag className={`bdr-stagger ${className}`}>{children}</Tag>;
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
