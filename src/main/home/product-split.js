import { ArrowUpRight, BrainCircuit, Chrome, ShieldCheck } from "lucide-react";
import Link from "next/link";

const ProductSplit = () => (
  <main className="home-split">
    <div className="home-split-glow" aria-hidden="true" />
    <section className="home-product home-product-endpoint">
      <div className="home-product-grid" aria-hidden="true" />
      <div className="home-product-copy">
        <div className="home-product-kicker">
          <ShieldCheck size={16} /> Endpoint security
        </div>
        <h1>Stop unknown threats before they become incidents.</h1>
        <p>
          AIShieldNet brings LLM-powered analysis and real-time protection to
          the endpoint—built to identify suspicious behaviour beyond known
          signatures.
        </p>
        <div className="home-product-pills">
          <span>Zero-day defence</span><span>LLM analysis</span><span>One agent</span>
        </div>
        <Link className="home-product-cta" href="/product/AIShieldNet">
          Explore AIShieldNet <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="home-endpoint-visual" aria-hidden="true">
        <div className="home-endpoint-scan" />
        <div className="home-endpoint-orbit orbit-one"><i /><i /><i /></div>
        <div className="home-endpoint-orbit orbit-two"><i /><i /></div>
        <div className="home-endpoint-core">
          <BrainCircuit size={44} />
          <strong>AI</strong><small>ANALYSIS ACTIVE</small>
        </div>
        <div className="home-threat threat-one"><i /> UNKNOWN BINARY</div>
        <div className="home-threat threat-two"><i /> BEHAVIOUR SIGNAL</div>
        <div className="home-threat threat-three"><i /> THREAT BLOCKED</div>
      </div>
    </section>

    <section className="home-product home-product-browser">
      <div className="home-product-grid" aria-hidden="true" />
      <div className="home-product-copy">
        <div className="home-product-kicker">
          <Chrome size={16} /> Browser security
        </div>
        <h2>See and control risk where work happens: the browser.</h2>
        <p>
          ViewGuard BDR uses a lightweight managed extension to monitor or
          block browser actions through centrally assigned policies.
        </p>
        <div className="home-product-pills">
          <span>Upload</span><span>Clipboard</span><span>GenAI</span><span>Download</span>
        </div>
        <Link className="home-product-cta" href="/product/browser-detection-response">
          Explore ViewGuard BDR <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="home-browser-visual" aria-hidden="true">
        <div className="home-browser-orbit orbit-one" />
        <div className="home-browser-orbit orbit-two" />
        <div className="home-browser-core">
          <Chrome size={42} />
          <strong>BDR</strong><small>EXTENSION ACTIVE</small>
        </div>
        <div className="home-browser-signal signal-one"><i /> FILE UPLOAD <b>MONITOR</b></div>
        <div className="home-browser-signal signal-two"><i /> GENAI PASTE <b>BLOCKED</b></div>
        <div className="home-browser-signal signal-three"><i /> POLICY SYNCED <b>PROTECTED</b></div>
      </div>
    </section>
    <div className="home-split-divider" aria-hidden="true"><span>2 PRODUCTS</span></div>
  </main>
);

export default ProductSplit;
