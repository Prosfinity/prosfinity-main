import { useEffect, useRef } from "react";

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
