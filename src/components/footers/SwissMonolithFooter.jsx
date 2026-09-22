import React, { useState, useEffect } from 'react';
import './SwissMonolithFooter.css';

export default function SwissMonolithFooter({ id = 'swiss-footer' }) {
  const [times, setTimes] = useState({
    zurich: '--:--:--',
    tokyo: '--:--:--',
    sf: '--:--:--',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        zurich: now.toLocaleTimeString('de-CH', { timeZone: 'Europe/Zurich', hour12: false }),
        tokyo: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour12: false }),
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour12: false }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id={id} className="swiss-footer" role="contentinfo">
      {/* Top Telemetry & Clock Bar */}
      <div className="swiss-meta-strip">
        <div className="swiss-brand-mark">
          <span className="swiss-red-dot" />
          <span className="swiss-brand-code">CH-8001 / ZÜRICH</span>
        </div>
        <div className="swiss-clocks">
          <div className="swiss-clock-item">
            <span className="swiss-clock-city">ZUR</span>
            <span className="swiss-clock-val">{times.zurich}</span>
          </div>
          <div className="swiss-clock-item">
            <span className="swiss-clock-city">TYO</span>
            <span className="swiss-clock-val">{times.tokyo}</span>
          </div>
          <div className="swiss-clock-item">
            <span className="swiss-clock-city">SFO</span>
            <span className="swiss-clock-val">{times.sf}</span>
          </div>
        </div>
        <div className="swiss-status-pill">
          <span className="swiss-status-pulse" />
          SYSTEM OPERATIONAL
        </div>
      </div>

      {/* Main Massive Editorial Typography Section */}
      <div className="swiss-monolith-body">
        <div className="swiss-hero-column">
          <h2 className="swiss-massive-title">
            NEUE FORM<br />
            <span>SYSTEMATIK</span>
          </h2>
          <p className="swiss-mission-text">
            International Typographic Order. Strict modular grid structures engineered for clarity, objective information hierarchy, and timeless mathematical harmony.
          </p>
          <div className="swiss-newsletter-row">
            <input 
              type="email" 
              placeholder="ENTER ARCHIVE COMMUNIQUE EMAIL" 
              className="swiss-input" 
              readOnly 
              defaultValue="subscriber@neueform.ch" 
            />
            <button className="swiss-btn" type="button">SUBSCRIBE &rarr;</button>
          </div>
        </div>

        {/* Modular Grid Navigation Columns */}
        <div className="swiss-nav-grid">
          <div className="swiss-nav-col">
            <span className="swiss-col-index">01 // DISCIPLINES</span>
            <ul className="swiss-col-list">
              <li><a href="#typography" className="swiss-link">Grid Geometry</a></li>
              <li><a href="#asymmetry" className="swiss-link">Asymmetric Balance</a></li>
              <li><a href="#grotesk" className="swiss-link">Akzidenz Grotesk</a></li>
              <li><a href="#unification" className="swiss-link">Universal Standard</a></li>
            </ul>
          </div>
          <div className="swiss-nav-col">
            <span className="swiss-col-index">02 // ARCHIVE</span>
            <ul className="swiss-col-list">
              <li><a href="#monographs" className="swiss-link">Monographs 1958–68</a></li>
              <li><a href="#posters" className="swiss-link">Tonhalle Posters</a></li>
              <li><a href="#specimens" className="swiss-link">Type Specimens</a></li>
              <li><a href="#manifestos" className="swiss-link">The Grid Manual</a></li>
            </ul>
          </div>
          <div className="swiss-nav-col">
            <span className="swiss-col-index">03 // GUILD</span>
            <ul className="swiss-col-list">
              <li><a href="#zurich" className="swiss-link">Atelier Zürich</a></li>
              <li><a href="#basel" className="swiss-link">Kunstgewerbeschule</a></li>
              <li><a href="#colophon" className="swiss-link">Colophon &amp; Legal</a></li>
              <li><a href="#contact" className="swiss-link">Dispatch Wire</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Colophon Stripe */}
      <div className="swiss-bottom-stripe">
        <span className="swiss-colophon">&copy; 1968&ndash;2026 NEUE FORM DESIGN SYSTEM. ZÜRICH &middot; BASEL.</span>
        <div className="swiss-coordinates">
          <span>LAT 47.3769° N</span>
          <span className="swiss-coord-sep">/</span>
          <span>LON 8.5417° E</span>
        </div>
        <span className="swiss-release">RELEASE V4.2.0 // STABLE</span>
      </div>
    </footer>
  );
}
