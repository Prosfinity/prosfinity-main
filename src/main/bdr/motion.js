import { useEffect, useRef, useState } from "react";

const visualFlows = {
  Visibility: [
    ["Browser action", "Upload · Paste · Prompt"],
    ["Extension sensor", "Action-level context"],
    ["Security overview", "Live operational signal"],
  ],
  Policy: [
    ["Business rule", "Channel + destination"],
    ["Policy engine", "User · Group · Device"],
    ["Decision", "Monitor / Block"],
  ],
  Response: [
    ["Matched event", "Rule + destination"],
    ["Browser response", "Action enforced"],
    ["Analyst alert", "Triage with context"],
  ],
  Coverage: [
    ["Managed browser", "Chrome / Chromium"],
    ["Extension health", "Version + last seen"],
    ["Inventory", "Coverage in one view"],
  ],
  Assignment: [
    ["Identity", "User directory"],
    ["Targeting", "Group · Role · Device"],
    ["Protection", "Right rule, right user"],
  ],
  Governance: [
    ["Admin change", "Who changed what"],
    ["Audit record", "Time + action + outcome"],
    ["Evidence", "Accountable history"],
  ],
  Extension: [
    ["Lightweight control", "In-browser enforcement"],
    ["Secure sync", "Policy + event delivery"],
    ["Central console", "Operate at scale"],
  ],
};

function RoadmapVisual({ step, index }) {
  const nodes = visualFlows[step.label] || [];
  return (
    <div className="bdr-roadmap-visual" aria-label={`${step.label} product flow`}>
      <div className="bdr-visual-topbar">
        <span><i /> PROSFINITY BDR</span>
        <em>LIVE RESPONSE CHAIN</em>
      </div>
      <div className="bdr-visual-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="bdr-visual-flow">
        {nodes.map(([title, detail], nodeIndex) => (
          <div className="bdr-visual-segment" key={title} style={{ "--node-delay": `${nodeIndex * 180}ms` }}>
            <div className="bdr-visual-node">
              <span>{String(index + 1).padStart(2, "0")}.{nodeIndex + 1}</span>
              <i className="bdr-visual-icon" aria-hidden="true">
                {nodeIndex === 0 ? "◎" : nodeIndex === 1 ? "◇" : "✓"}
              </i>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
            {nodeIndex < nodes.length - 1 && <div className="bdr-visual-connector"><i /></div>}
          </div>
        ))}
      </div>
      <div className="bdr-visual-status">
        <span><i /> Extension connected</span>
        <b>{step.label}</b>
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
      <div className="mt-14 grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
        <div className="relative">
          <div className="bdr-story-line" aria-hidden="true"><i style={{ height: `${((active + 1) / steps.length) * 100}%` }} /></div>
          {steps.map((step, index) => <article key={step.title} ref={(node) => { refs.current[index] = node; }} className={`bdr-story-step ${active === index ? "is-active" : ""}`}>
            <span className="bdr-story-dot">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-400">{step.label}</p>
            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{step.title}</h3><p className="mt-4 max-w-lg leading-7 text-slate-400">{step.text}</p>
          </article>)}
        </div>
        <div className="bdr-story-stage lg:sticky lg:top-28"><div className="bdr-story-screen">
          {steps.map((step, index) => <div key={step.label} className={`bdr-story-image ${active === index ? "is-active" : ""}`}><RoadmapVisual step={step} index={index} /></div>)}
          <div className="bdr-story-caption"><span>Browser extension → policy → response</span><b>{steps[active].label}</b></div>
        </div></div>
      </div>
    </div></section>
  );
}
