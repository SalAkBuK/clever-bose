import React from 'react';
import BridgeFooter from './components/BridgeFooter.jsx';
import './App.css';

export default function App() {
  return (
    <div className="site-wrapper">
      {/* Sample Navigation Header */}
      <header className="site-nav">
        <div className="site-nav__inner">
          <div className="site-nav__brand">
            <span className="site-nav__dot" />
            <span className="site-nav__title">The Grand Imperial Viaduct</span>
          </div>
          <nav className="site-nav__links">
            <a href="#overview" className="site-nav__link">Overview</a>
            <a href="#engineering" className="site-nav__link">Engineering</a>
            <a href="#fleet" className="site-nav__link">Fleet</a>
            <a href="#footer" className="site-nav__cta">View Footer &darr;</a>
          </nav>
        </div>
      </header>

      {/* Main Page Content (demonstrates natural scrolling down to footer) */}
      <main className="site-main">
        {/* Hero Section */}
        <section id="overview" className="hero-section">
          <div className="hero-section__content">
            <span className="hero-section__pretitle">CIVIL INFRASTRUCTURE &bull; EST. 1888</span>
            <h1 className="hero-section__title">
              Engineering at Monumental Scale.
            </h1>
            <p className="hero-section__lead">
              A double-tracked steel lattice roadbed spanning granite caissons sunk 91 feet beneath tidal mud into solid sandstone bedrock. Built to withstand North Sea gales and carry continental commerce across the Firth.
            </p>
            <div className="hero-section__actions">
              <a href="#engineering" className="btn btn--primary">Explore Blueprints</a>
              <a href="#footer" className="btn btn--secondary">Scroll to Footer &darr;</a>
            </div>
          </div>
        </section>

        {/* Feature / Engineering Section */}
        <section id="engineering" className="features-section">
          <div className="section-header">
            <span className="section-pretitle">INFRASTRUCTURE SPECIFICATIONS</span>
            <h2 className="section-title">Architectural Principles</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card__badge">01 &bull; DECK ELEVATION</div>
              <h3 className="feature-card__title">46-Metre High-Water Clearance</h3>
              <p className="feature-card__desc">
                Suspended high above storm tides, enabling unobstructed transit for royal naval frigates and commercial clipper traffic across the estuary roadstead.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__badge">02 &bull; CAISSON STABILITY</div>
              <h3 className="feature-card__title">Submerged Granite Piers</h3>
              <p className="feature-card__desc">
                Poured basalt concrete core encased in hand-tooled granite blocks, engineered with rounded cutwaters to defuse winter tidal flow and scouring.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__badge">03 &bull; TELEMETRY</div>
              <h3 className="feature-card__title">Real-Time Train Dispatch</h3>
              <p className="feature-card__desc">
                Synchronized telegraph block signalling coordinates passenger expresses and industrial freight trains across uninterrupted viaduct spans.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Website Footer (closing element in normal document flow) */}
      <BridgeFooter id="footer" viewMode="fill" />
    </div>
  );
}
