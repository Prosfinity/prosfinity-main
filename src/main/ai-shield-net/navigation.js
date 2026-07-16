import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  ["Overview", "/product/AIShieldNet"],
  ["LLM Protection", "/product/AIShieldNet/llm"],
  ["Why AIShieldNet", "/product/AIShieldNet/why-us"],
  ["Features", "/product/AIShieldNet/features"],
  ["Comparison", "/product/AIShieldNet/comparison"],
  ["Downloads & Pricing", "/product/AIShieldNet/download-and-price"],
  ["Free Trial", "/product/AIShieldNet/free-trial"],
];

export default function AIShieldNavigation() {
  const { pathname } = useRouter();

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#07101d]/95 px-4 backdrop-blur md:top-16">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        <Link href="/product/AIShieldNet" className="mr-3 shrink-0 px-2 py-2 text-sm font-semibold text-red-400">
          AIShieldNet
        </Link>
        {links.map(([label, href]) => {
          const active = pathname === href || (href.includes("download-and-price") && pathname.startsWith(href));
          return (
            <Link key={href} href={href} className={`shrink-0 rounded-md px-3 py-2 text-sm transition ${active ? "bg-red-500 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              {label}
            </Link>
          );
        })}
        <Link href="/contact" className="ml-auto shrink-0 rounded-md border border-red-400/50 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500 hover:text-white">
          Request a Demo
        </Link>
      </div>
    </div>
  );
}
