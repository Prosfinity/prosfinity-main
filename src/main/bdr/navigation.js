import Link from "next/link";
import { useRouter } from "next/router";

export const bdrLinks = [
  ["Overview", "/product/browser-detection-response"],
  ["Why BDR", "/product/browser-detection-response/why-bdr"],
  ["Features", "/product/browser-detection-response/features"],
  ["Use Cases", "/product/browser-detection-response/use-cases"],
  ["How It Works", "/product/browser-detection-response/how-it-works"],
  ["Comparison", "/product/browser-detection-response/comparison"],
  ["Deployment", "/product/browser-detection-response/deployment"],
];

export default function BdrNavigation() {
  const { pathname } = useRouter();

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#07101d]/95 px-4 backdrop-blur md:top-16">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        <Link
          href="/product/browser-detection-response"
          className="mr-3 shrink-0 px-2 py-2 text-sm font-semibold text-cyan-400"
        >
          Prosfinity BDR
        </Link>
        {bdrLinks.map(([label, href]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`shrink-0 rounded-md px-3 py-2 text-sm transition ${
                active
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="ml-auto shrink-0 rounded-md border border-cyan-400/50 px-3 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
        >
          Request a Demo
        </Link>
      </div>
    </div>
  );
}
