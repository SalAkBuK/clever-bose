import React, { useState } from 'react';
import {
  IconInfo,
  IconPalette,
  IconLayers,
  IconCode,
  IconCopy,
  IconCheck,
} from '../icons/Icons.jsx';

export default function FooterInspector({ footer, refProp }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedHex, setCopiedHex] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(footer.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section ref={refProp} className="footer-inspector-section" aria-label="Technical Inspector">
      {/* Inspector Header & Tabs */}
      <div className="inspector-top-bar">
        <div className="inspector-heading">
          <span className="inspector-icon-wrap">
            <IconLayers size={14} />
          </span>
          <span className="inspector-title">ATELIER SPECIFICATIONS &amp; BLUEPRINT</span>
          <span className="inspector-slug">// {footer.id}</span>
        </div>

        <div className="inspector-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`inspector-tab ${activeTab === 'overview' ? 'inspector-tab--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <IconInfo size={13} />
            <span>OVERVIEW</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'palette'}
            className={`inspector-tab ${activeTab === 'palette' ? 'inspector-tab--active' : ''}`}
            onClick={() => setActiveTab('palette')}
          >
            <IconPalette size={13} />
            <span>PALETTE ({footer.palette.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'specs'}
            className={`inspector-tab ${activeTab === 'specs' ? 'inspector-tab--active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <IconLayers size={13} />
            <span>ARCHITECTURE</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'code'}
            className={`inspector-tab ${activeTab === 'code' ? 'inspector-tab--active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <IconCode size={13} />
            <span>INTEGRATE JSX</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="inspector-body">
        {/* 1. Overview Tab */}
        {activeTab === 'overview' && (
          <div className="panel-overview">
            <div className="overview-summary-box">
              <h3 className="overview-headline">{footer.name}</h3>
              <span className="overview-subtitle">{footer.subtitle}</span>
              <p className="overview-text">{footer.summary}</p>
            </div>

            <div className="curatorial-notes-box">
              <h4 className="curatorial-heading">// CURATORIAL &amp; ENGINEERING NOTES</h4>
              <ul className="curatorial-list">
                {footer.curatorialNotes.map((note, idx) => (
                  <li key={idx} className="curatorial-item">
                    <span className="curatorial-bullet">&diams;</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-tags-box">
              <span className="tags-label">AESTHETIC TAGS:</span>
              <div className="tags-container">
                {footer.tags.map((t) => (
                  <span key={t} className="inspector-tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Color Palette Tab */}
        {activeTab === 'palette' && (
          <div className="panel-palette">
            <p className="palette-intro">
              Calibrated pigments and hex codes for {footer.name}. Click any swatch to copy the raw hex value.
            </p>
            <div className="palette-grid">
              {footer.palette.map((color) => {
                const isCopied = copiedHex === color.hex;
                return (
                  <button
                    key={color.hex}
                    type="button"
                    className="palette-card"
                    onClick={() => handleCopyHex(color.hex)}
                    title={`Click to copy ${color.hex}`}
                  >
                    <div
                      className="palette-swatch-box"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isCopied ? (
                        <span className="copied-pill">
                          <IconCheck size={12} /> COPIED
                        </span>
                      ) : (
                        <span className="copy-hint-pill">
                          <IconCopy size={11} />
                        </span>
                      )}
                    </div>
                    <div className="palette-meta">
                      <div className="palette-name-row">
                        <span className="palette-name">{color.name}</span>
                        <span className="palette-hex">{color.hex}</span>
                      </div>
                      <span className="palette-role">{color.role}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Specs Tab */}
        {activeTab === 'specs' && (
          <div className="panel-specs">
            <div className="specs-table">
              <div className="specs-row">
                <span className="spec-name">PERFORMANCE &amp; FPS</span>
                <span className="spec-val spec-highlight">{footer.specs.framerate}</span>
              </div>
              <div className="specs-row">
                <span className="spec-name">LAYER ARCHITECTURE</span>
                <span className="spec-val">{footer.specs.layers}</span>
              </div>
              <div className="specs-row">
                <span className="spec-name">ANIMATION PIPELINE</span>
                <span className="spec-val">{footer.specs.animationType}</span>
              </div>
              <div className="specs-row">
                <span className="spec-name">RENDER &amp; CSS BUDGET</span>
                <span className="spec-val">{footer.specs.renderBudget}</span>
              </div>
              <div className="specs-row">
                <span className="spec-name">VIEWPORT DISCIPLINE</span>
                <span className="spec-val">{footer.specs.responsiveness}</span>
              </div>
              <div className="specs-row">
                <span className="spec-name">CANVAS DIMENSIONS</span>
                <span className="spec-val">{footer.dimensions}</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Code Snippet Tab */}
        {activeTab === 'code' && (
          <div className="panel-code">
            <div className="code-header">
              <span className="code-label">JSX COMPONENT USAGE</span>
              <button
                type="button"
                className="copy-code-btn"
                onClick={handleCopyCode}
              >
                {copiedCode ? (
                  <>
                    <IconCheck size={13} />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <IconCopy size={13} />
                    <span>COPY SNIPPET</span>
                  </>
                )}
              </button>
            </div>
            <pre className="code-block">
              <code>{footer.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
