import { ArrowRight, Check, Chrome, ShieldCheck } from "lucide-react";

const Banner = () => (
  <main className="demo-page">
    <section className="demo-intro">
      <span className="demo-eyebrow">REQUEST A DEMO</span>
      <h1>See security built around how your team actually works.</h1>
      <p>
        Tell us what you want to protect. We will tailor the conversation around
        endpoint threats, browser risk, or both—without a generic sales deck.
      </p>
      <div className="demo-product-list">
        <article><i><ShieldCheck size={20}/></i><div><strong>AIShieldNet</strong><span>AI-driven endpoint protection</span></div><Check size={17}/></article>
        <article><i><Chrome size={20}/></i><div><strong>ViewGuard BDR</strong><span>Extension-powered browser control</span></div><Check size={17}/></article>
      </div>
      <div className="demo-expect">
        <small>WHAT TO EXPECT</small>
        <div><b>01</b><span><strong>30-minute discovery</strong>Understand your environment and priorities.</span></div>
        <div><b>02</b><span><strong>Focused product walkthrough</strong>See the workflows relevant to your team.</span></div>
        <div><b>03</b><span><strong>Clear next steps</strong>Leave with a practical evaluation path.</span></div>
      </div>
    </section>

    <section className="demo-form-card">
      <div className="demo-form-heading"><span>LET&apos;S TALK</span><h2>Book your product demo</h2><p>Required fields are marked with an asterisk.</p></div>
      <form action="https://formspree.io/f/mnnpnbrk" method="POST">
        <div className="demo-form-grid">
          <label><span>Full name *</span><input type="text" name="name" placeholder="Your name" autoComplete="name" required/></label>
          <label><span>Work email *</span><input type="email" name="email" placeholder="name@company.com" autoComplete="email" required/></label>
          <label><span>Company *</span><input type="text" name="company" placeholder="Company name" autoComplete="organization" required/></label>
          <label><span>Phone</span><input type="tel" name="phone" placeholder="+852" autoComplete="tel"/></label>
        </div>
        <fieldset>
          <legend>Which product are you interested in? *</legend>
          <label className="demo-choice"><input type="radio" name="product" value="AIShieldNet" required/><span><ShieldCheck size={18}/><b>AIShieldNet</b><small>Endpoint protection</small></span></label>
          <label className="demo-choice"><input type="radio" name="product" value="ViewGuard BDR"/><span><Chrome size={18}/><b>ViewGuard BDR</b><small>Browser security</small></span></label>
          <label className="demo-choice"><input type="radio" name="product" value="Both products"/><span><i>+</i><b>Both products</b><small>Combined discussion</small></span></label>
        </fieldset>
        <label className="demo-message"><span>What would you like to solve?</span><textarea name="message" rows="4" placeholder="Tell us about your security priorities, environment, or preferred demo focus."/></label>
        <button type="submit">Request my demo <ArrowRight size={18}/></button>
        <p className="demo-privacy">By submitting, you agree that Prosfinity may contact you about this request.</p>
      </form>
    </section>
  </main>
);

export default Banner;
