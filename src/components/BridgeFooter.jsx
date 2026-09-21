import React, { useEffect, useState, useRef } from 'react';
import bridgeBase from '../assets/bridge-base.png';
import bridgeForeground from '../assets/bridge-foreground.png';
import trainStatic from '../assets/train_static_1320.webp';
import trainAnimated from '../assets/train_animated_transparent_seamless_1320.webp';
import './BridgeFooter.css';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Cantilever Engine', href: '#cantilever-engine' },
      { label: 'Rail Telemetry', href: '#rail-telemetry' },
      { label: 'Fleet Monitor', href: '#fleet-monitor' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#documentation' },
      { label: 'Blueprints', href: '#blueprints' },
      { label: 'Signal Safety', href: '#safety-code' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About the Guild', href: '#about' },
      { label: 'Heritage', href: '#heritage' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function BridgeFooter({
  id = 'footer',
  className = '',
  showDebugGuide = false,
}) {
  const footerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const debugClass = !showDebugGuide ? 'bridge-footer--hide-debug' : '';
  const revealClass = isRevealed ? 'bridge-sky-content--revealed' : '';

  return (
    <footer
      id={id}
      ref={footerRef}
      className={`bridge-footer ${debugClass} ${className}`}
      role="contentinfo"
    >
      {/* 1. Text lives DIRECTLY inside the sky of the graphic with scroll-triggered stagger reveal */}
      <div className={`bridge-sky-content ${revealClass}`}>
        <div className="brand-col reveal-item" style={{ '--stagger-index': 0 }}>
          <div className="brand-header">
            <span className="brand-badge">EST. 1888</span>
            <h2 className="brand-title">The Grand Imperial Viaduct</h2>
          </div>
          <p className="brand-desc">
            Classical digital engineering suspended 46m above the Firth.
          </p>
          <p className="copyright-text">
            &copy; 1888&ndash;2026 The Grand Imperial &amp; Bose Viaduct Railway Company.
          </p>
        </div>

        <div className="nav-cols">
          {FOOTER_COLUMNS.map((col, idx) => (
            <div
              key={col.title}
              className="nav-col reveal-item"
              style={{ '--stagger-index': idx + 1 }}
            >
              <h3 className="nav-col-title">{col.title}</h3>
              <ul className="nav-link-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Train and Bridge stay in the exact same frame */}
      <div className="bridge-train-layer" aria-hidden="true">
        <div className="bridge-footer__train-slot">
          <div className="bridge-footer__train-mover">
            <picture className="bridge-footer__train-picture">
              <source media="(prefers-reduced-motion: reduce)" srcSet={trainStatic} />
              <img
                src={trainAnimated}
                alt=""
                className="bridge-footer__train-img"
                draggable="false"
              />
            </picture>
          </div>
        </div>

        {showDebugGuide && (
          <div className="bridge-footer__debug-guide">
            <div className="bridge-footer__debug-box" />
            <div className="bridge-footer__debug-wheel-line" />
            <div className="bridge-footer__debug-baseline" />
          </div>
        )}
      </div>

      {/* 3. Bridge Foreground Layer (balustrade wall & stone pillar caps occluding train wheels) */}
      <img
        src={bridgeForeground}
        alt=""
        className="bridge-foreground-img"
        aria-hidden="true"
        draggable="false"
      />

      {/* Base Bridge Graphic */}
      <img
        src={bridgeBase}
        alt="The Grand Imperial Viaduct monumental civil engineering panorama"
        className="bridge-base-img"
        draggable="false"
      />
    </footer>
  );
}
