import React, { useState, useEffect } from 'react';
import './CyberTelemetryFooter.css';

export default function CyberTelemetryFooter({ id = 'cyber-footer' }) {
  const [telemetry, setTelemetry] = useState({
    coords: '35.6762° N, 139.6503° E',
    orbit: '412.8 km',
    uptime: '4129:18:42',
    packets: 849204,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        packets: prev.packets + Math.floor(Math.random() * 8) + 1,
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id={id} className="cyber-footer" role="contentinfo">
      {/* HUD Header Bar */}
      <div className="cyber-hud-bar">
        <div className="cyber-hud-left">
          <span className="cyber-terminal-tag">TERM // 0x7F9A</span>
          <span className="cyber-divider">/</span>
          <span className="cyber-node-id">ORBITAL-NODE.JP-TYO</span>
        </div>
        <div className="cyber-hud-center">
          <span className="cyber-beacon" />
          <span className="cyber-beacon-text">TELEMETRY LINK: ENCRYPTED (AES-GCM-512)</span>
        </div>
        <div className="cyber-hud-right">
          <span>PKTS: {telemetry.packets.toLocaleString()}</span>
          <span className="cyber-divider">/</span>
          <span className="cyber-status-text">SYS_OK</span>
        </div>
      </div>

      {/* Main Cyber Matrix Body */}
      <div className="cyber-body">
        {/* Radar & Waveform Telemetry Visualizer */}
        <div className="cyber-radar-panel">
          <div className="cyber-radar-widget">
            <svg viewBox="0 0 160 160" className="cyber-radar-svg">
              {/* Radar Grid Circles */}
              <circle cx="80" cy="80" r="70" className="radar-ring" />
              <circle cx="80" cy="80" r="48" className="radar-ring" />
              <circle cx="80" cy="80" r="24" className="radar-ring" />
              {/* Radar Crosshairs */}
              <line x1="10" y1="80" x2="150" y2="80" className="radar-cross" />
              <line x1="80" y1="10" x2="80" y2="150" className="radar-cross" />
              {/* Rotating Sweep Beam */}
              <line x1="80" y1="80" x2="148" y2="80" className="radar-beam" />
              {/* Blip targets */}
              <circle cx="108" cy="54" r="3.5" className="radar-blip blip-1" />
              <circle cx="56" cy="112" r="3" className="radar-blip blip-2" />
            </svg>
            <div className="cyber-radar-info">
              <span className="cyber-info-label">RADAR SCAN</span>
              <span className="cyber-info-val">360° SWEEP // ACTIVE</span>
            </div>
          </div>

          {/* Audio Waveform Equalizer */}
          <div className="cyber-waveform-widget">
            <span className="cyber-info-label">CARRIER HARMONICS</span>
            <div className="cyber-equalizer-bars">
              {[65, 40, 85, 95, 30, 50, 75, 90, 60, 45, 80, 70, 95, 40, 85, 60].map((h, i) => (
                <span
                  key={i}
                  className="cyber-eq-bar"
                  style={{ '--bar-height': `${h}%`, '--anim-delay': `${i * 0.08}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center Cyber Brand & Terminal Prompt */}
        <div className="cyber-center-panel">
          <div className="cyber-prompt-line">
            <span className="cyber-prompt-user">user@orbit-viaduct:~$</span>
            <span className="cyber-prompt-cmd">netstat --footer --verbose</span>
          </div>
          <h2 className="cyber-brand-glitch" data-text="NEO-TOKYO 2099">
            NEO-TOKYO 2099
          </h2>
          <p className="cyber-terminal-desc">
            Sub-orbital telemetry, quantum block relay, and automated civil infrastructure networks. High-density kinetic computing for the Pacific Rim orbital ring.
          </p>
          <div className="cyber-telemetry-box">
            <div className="cyber-stat">
              <span className="stat-label">GEODETIC FIX</span>
              <span className="stat-val">{telemetry.coords}</span>
            </div>
            <div className="cyber-stat">
              <span className="stat-label">ALTITUDE</span>
              <span className="stat-val">{telemetry.orbit}</span>
            </div>
            <div className="cyber-stat">
              <span className="stat-label">UPTIME</span>
              <span className="stat-val">{telemetry.uptime}</span>
            </div>
          </div>
        </div>

        {/* Right Navigation & Sub-Networks */}
        <div className="cyber-nav-panel">
          <div className="cyber-nav-group">
            <span className="cyber-nav-hdr">// NET_NODES</span>
            <ul className="cyber-links">
              <li><a href="#orbital" className="cyber-link">Orbital Shuttles</a></li>
              <li><a href="#quantum" className="cyber-link">Quantum Grid Relay</a></li>
              <li><a href="#telemetry" className="cyber-link">Kinetic Telemetry</a></li>
              <li><a href="#security" className="cyber-link">Cryptographic Root</a></li>
            </ul>
          </div>
          <div className="cyber-nav-group">
            <span className="cyber-nav-hdr">// PROTOCOLS</span>
            <ul className="cyber-links">
              <li><a href="#mesh" className="cyber-link">Dark-Fiber Mesh</a></li>
              <li><a href="#diagnostics" className="cyber-link">Sub-Station Core</a></li>
              <li><a href="#blueprints" className="cyber-link">Schematics API</a></li>
              <li><a href="#comms" className="cyber-link">Hyper-Band Wire</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Terminal Footer Strip */}
      <div className="cyber-footer-strip">
        <span className="cyber-copy">&copy; 2099 NEO-TOKYO CYBERNETIC ALLIANCE. ALL FREQUENCIES RESERVED.</span>
        <div className="cyber-warning">
          <span className="cyber-warn-icon">&Delta;</span>
          <span>RESTRICTED TRANSMISSION // PROTOCOL 9</span>
        </div>
      </div>
    </footer>
  );
}
