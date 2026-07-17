import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
          {steps.map((step, index) => <Image key={step.image} src={step.image} alt={step.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className={`bdr-story-image ${active === index ? "is-active" : ""}`} />)}
          <div className="bdr-story-caption"><span>Live product console</span><b>{steps[active].label}</b></div>
        </div></div>
      </div>
    </div></section>
  );
}
