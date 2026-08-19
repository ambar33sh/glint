import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Sparkles, Menu, X } from 'lucide-react';
import './styles.css';

const categories = [
  { name: 'Electronics', risk: 18, change: '+4.2%', color: 'orange', insight: 'Returns are clustering around sizing and setup friction.', score: 82 },
  { name: 'Beauty', risk: 11, change: '-2.8%', color: 'violet', insight: 'Sentiment is improving after recent product-page changes.', score: 91 },
  { name: 'Home', risk: 24, change: '+7.1%', color: 'blue', insight: 'Delivery expectations are driving a growing share of complaints.', score: 73 },
];

function App() {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const item = categories[active];

  return (
    <div className="app">
      <div className="grain" />
      <header className="nav">
        <a className="logo" href="#">GLINT<span>.</span></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#product" onClick={() => setMenu(false)}>Product</a>
          <a href="#signal" onClick={() => setMenu(false)}>Signal</a>
          <a href="#workflow" onClick={() => setMenu(false)}>Workflow</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
        </nav>
        <a className="nav-cta" href="#demo">Explore Glint <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section className="hero" id="product">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> PRODUCT INTELLIGENCE</div>
            <h1>Make better decisions <em>before</em> they become expensive.</h1>
            <p className="hero-sub">Glint turns scattered customer signals into clear, actionable product intelligence — so teams can see what is changing before the numbers catch up.</p>
            <div className="hero-actions">
              <a className="button primary" href="#demo">Explore the signal <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#workflow">See how it works <span>↘</span></a>
            </div>
            <div className="quiet-proof"><Sparkles size={15}/> Built to surface the signal, not manufacture it.</div>
          </div>

          <div className="hero-visual reveal delay">
            <div className="dashboard">
              <div className="dash-top">
                <div>
                  <span className="dash-kicker">GLINT / OVERVIEW</span>
                  <h3>Product health</h3>
                </div>
                <div className="live"><span/> LIVE</div>
              </div>
              <div className="dash-main">
                <div className="risk-card">
                  <div className="card-label">RETURN RISK</div>
                  <div className="big-number">{item.risk}<span>%</span></div>
                  <div className="delta">{item.change} <span>vs last period</span></div>
                  <div className="mini-bars">
                    {[42,58,51,72,61,83,68,91,74,88].map((h,i)=><i key={i} style={{height:`${h}%`}}/>) }
                  </div>
                </div>
                <div className="insight-card">
                  <div className="ai-label"><Sparkles size={14}/> GLINT SIGNAL</div>
                  <p>{item.insight}</p>
                  <div className="confidence"><span>Confidence</span><b>{item.score}%</b></div>
                  <div className="confidence-track"><i style={{width:`${item.score}%`}}/></div>
                </div>
              </div>
              <div className="category-row">
                {categories.map((c,i)=>(
                  <button key={c.name} className={active===i?'cat active':'cat'} onClick={()=>setActive(i)}>
                    <span className={`dot ${c.color}`}/>{c.name}<small>{c.risk}%</small>
                  </button>
                ))}
              </div>
            </div>
            <div className="floating-note"><span>01</span> signal detected <b>↗</b></div>
          </div>
        </section>

        <section className="ticker" aria-label="Glint capabilities">
          <span>SEE THE SIGNAL</span><i/> CUSTOMER SENTIMENT <i/> PRODUCT HEALTH <i/> RETURN RISK <i/> ACTIONABLE INSIGHTS <i/> SEE THE SIGNAL
        </section>

        <section className="signal section" id="signal">
          <div className="section-intro">
            <span className="section-no">01 / SIGNAL</span>
            <h2>The story behind<br/><em>the number.</em></h2>
            <p>Dashboards tell you what happened. Glint helps you understand why — then points toward what to do next.</p>
          </div>
          <div className="signal-demo" id="demo">
            <div className="demo-header"><span>LIVE SIGNAL MAP</span><span>Updated moments ago</span></div>
            <div className="map">
              <div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/>
              <div className="core"><Sparkles size={22}/><span>GLINT</span></div>
              {['01','02','03','04','05'].map((n,i)=><div className={`node n${i+1}`} key={n}><span>{n}</span></div>)}
              <div className="map-label l1">SENTIMENT</div>
              <div className="map-label l2">RETURNS</div>
              <div className="map-label l3">REVIEWS</div>
            </div>
            <div className="demo-bottom">
              <div><small>Detected pattern</small><strong>Setup friction → return intent</strong></div>
              <div><small>Suggested action</small><strong>Clarify onboarding before checkout</strong></div>
            </div>
          </div>
        </section>

        <section className="workflow section" id="workflow">
          <div className="section-intro">
            <span className="section-no">02 / WORKFLOW</span>
            <h2>From noise<br/>to <em>next move.</em></h2>
          </div>
          <div className="steps">
            {[
              ['01','COLLECT','Bring customer feedback, product signals and behavioral data into one view.'],
              ['02','CONNECT','Glint finds relationships between signals that are easy to miss in isolation.'],
              ['03','ACT','Turn the strongest signal into a focused recommendation your team can use.']
            ].map(([n,t,d])=>(
              <article className="step" key={n}>
                <span>{n}</span><h3>{t}</h3><p>{d}</p><div className="step-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement" id="about">
          <div className="statement-mark">“</div>
          <h2>Good intelligence doesn't<br/><em>add more noise.</em></h2>
          <p>It makes the important thing impossible to miss.</p>
        </section>

        <section className="cta">
          <div>
            <span className="section-no">03 / START</span>
            <h2>See what your<br/><em>data is saying.</em></h2>
          </div>
          <a className="button light" href="mailto:hello@example.com">Explore Glint <ArrowUpRight size={18}/></a>
        </section>
      </main>

      <footer>
        <div className="logo">GLINT<span>.</span></div>
        <span>Product intelligence, without the noise.</span>
        <span>© 2026 Glint</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
