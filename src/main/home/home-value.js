import { ArrowUpRight, BrainCircuit, Chrome, Layers3, ShieldCheck } from "lucide-react";
import Link from "next/link";

const HomeValue = () => (
  <section className="home-value">
    <div className="home-value-intro">
      <div>
        <span>ONE SECURITY STRATEGY</span>
        <h2>Protect the endpoint. Control the browser.</h2>
      </div>
      <p>
        Two focused products cover two different control points. Deploy either
        independently, or bring them together for defence that follows work
        from the device into the browser.
      </p>
    </div>

    <div className="home-value-flow">
      <article className="home-value-node is-endpoint">
        <div><BrainCircuit size={25}/></div>
        <small>01 / ENDPOINT</small>
        <h3>AIShieldNet</h3>
        <p>Analyse suspicious behaviour and stop unknown threats at the device.</p>
        <span><i/> AI-powered protection</span>
      </article>
      <div className="home-value-link" aria-hidden="true"><i/><b>CONNECTED DEFENCE</b></div>
      <article className="home-value-node is-browser">
        <div><Chrome size={25}/></div>
        <small>02 / BROWSER</small>
        <h3>ViewGuard BDR</h3>
        <p>Monitor or block risky browser actions with a managed extension.</p>
        <span><i/> Policy connected</span>
      </article>
    </div>

    <div className="home-outcomes">
      <article><ShieldCheck/><strong>Purpose-built controls</strong><p>Each product stays focused on the security layer it understands best.</p></article>
      <article><Layers3/><strong>Clear security coverage</strong><p>Close the gap between device-level threats and browser-based data movement.</p></article>
      <article><BrainCircuit/><strong>Operational visibility</strong><p>Give security teams useful signals and controls without flattening both products into one story.</p></article>
    </div>

    <div className="home-demo-strip">
      <div><span>NOT SURE WHERE TO START?</span><h2>See the right product in action.</h2></div>
      <Link href="/contact">Request a demo <ArrowUpRight size={19}/></Link>
    </div>
  </section>
);

export default HomeValue;
