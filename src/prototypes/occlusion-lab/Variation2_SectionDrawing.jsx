import React from 'react';
import './Variation2_SectionDrawing.css';

/**
 * Variation 2 — Editorial Section Drawing
 *
 * Core Concept:
 * Arranged as an architectural sectional elevation monograph plate.
 * The Go Alvin POS pipeline traverses along genuine elevation coordinates
 * (+48.5m -> +32.0m -> +16.5m -> +0.0m). System stages glide horizontally
 * along the active sectional cut and pass physically behind a monumental
 * architectural retaining pier and subterranean foundation strata.
 */
export default function Variation2_SectionDrawing({
  stages,
  activeIndex,
  onSelectStage,
  occlusionMode = 'solid', // 'solid' | 'xray'
}) {
  const currentStage = stages[activeIndex];

  const elevations = [
    { label: '+48.5m', title: 'HARDWARE PLANE' },
    { label: '+32.0m', title: 'RUNTIME PLANE' },
    { label: '+16.5m', title: 'PERSISTENCE PLANE' },
    { label: '+0.0m', title: 'DECK DATUM' },
  ];

  return (
    <div className={`section-drawing ${occlusionMode === 'xray' ? 'section-drawing--xray' : ''}`}>
      {/* 1. ARCHITECTURAL PLATE HEADER */}
      <header className="drawing-folio-header">
        <div className="folio-meta">
          <span className="folio-plate">SECTION 02 / ELEVATION A&ndash;A&prime;</span>
          <span className="folio-divider">&bull;</span>
          <span className="folio-system">GO ALVIN PHONES POS ARCHITECTURE</span>
        </div>
        <h2 className="folio-title">{currentStage.title}</h2>
        <p className="folio-narrative">{currentStage.description}</p>
      </header>

      {/* 2. MAIN SECTION ELEVATION VIEWPORT */}
      <div className="drawing-body">
        {/* ELEVATION SURVEYOR AXIS (Left Margin) */}
        <aside className="drawing-surveyor-axis" aria-label="Elevation Scale">
          <div className="axis-track-line" />
          {elevations.map((elev, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={elev.label}
                type="button"
                className={`elevation-datum-mark ${isActive ? 'elevation-datum-mark--active' : ''}`}
                onClick={() => onSelectStage(idx)}
              >
                <span className="datum-crosshair" />
                <span className="datum-elevation">{elev.label}</span>
                <span className="datum-label">{elev.title}</span>
              </button>
            );
          })}
        </aside>

        {/* DRAWING CANVAS */}
        <div className="drawing-canvas">
          {/* Dynamic Sectional Cut Datum Line */}
          <div
            className="datum-cut-line"
            style={{ top: `${24 + activeIndex * 24}px` }}
          >
            <span className="cut-callout">
              SECTION CUT A&ndash;A&prime; // ELEV. {currentStage.elevation.split(' ')[0]}
            </span>
            <div className="cut-line-rule" />
          </div>

          {/* MIDGROUND: Horizontal Stage Payload Stream (Travels behind the retaining pier) */}
          <div className="drawing-payload-track">
            <div
              className="drawing-payload-stream"
              style={{
                transform: `translate3d(-${activeIndex * 560}px, 0, 0)`,
              }}
            >
              {stages.map((stage, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <article
                    key={stage.id}
                    className={`drawing-stage-artifact ${isActive ? 'drawing-stage-artifact--active' : ''}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <div className="artifact-identity">
                      <span className="artifact-code">{stage.code}</span>
                      <span className="artifact-domain">{stage.systemDomain}</span>
                    </div>

                    <h3 className="artifact-title">{stage.title}</h3>

                    {/* Fine leader annotations with authentic engineering data */}
                    <div className="artifact-annotated-specs">
                      {Object.entries(stage.runtimeMetrics).slice(0, 3).map(([k, val]) => (
                        <div key={k} className="annotation-line">
                          <span className="annotation-point" />
                          <span className="annotation-rule" />
                          <div className="annotation-text">
                            <span className="annot-key">{k.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="annot-val" dangerouslySetInnerHTML={{ __html: val }} />
                          </div>
                        </div>
                      ))}

                      <div className="annotation-line annotation-line--highlight">
                        <span className="annotation-point annotation-point--signal" />
                        <span className="annotation-rule annotation-rule--signal" />
                        <div className="annotation-text">
                          <span className="annot-key">SYSTEM STATE:</span>
                          <span className="annot-val">{stage.systemOutput.status}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* FOREGROUND: Structural Retaining Pier & Subterranean Bedrock (OCCLUDES MIDGROUND) */}
          <div className="drawing-foreground-masonry" aria-hidden="true">
            {/* Monumental Vertical Retaining Pier on the Right */}
            <aside className="masonry-vertical-pier">
              <div className="pier-cap" />
              <div className="pier-face">
                <div className="pier-elevation-guide">
                  <div className="pier-datum-rule" />
                  <span className="pier-datum-tag">{currentStage.elevation}</span>
                </div>
                <div className="pier-section-stamp">
                  <span className="stamp-title">MASONRY PIER STRATUM</span>
                  <span className="stamp-sub">RETAINING BUTTRESS 02B</span>
                </div>
              </div>
              <div className="pier-cast-shadow" />
            </aside>

            {/* Subterranean Bedrock Deck at the bottom */}
            <div className="masonry-subterranean-deck">
              <div className="hatch-pattern" />
              <div className="deck-boundary-rule" />
              <div className="deck-annotation-row">
                <span className="deck-annotation">SOLID FOUNDATION STRATA // BEDROCK DATUM 00</span>
                <span className="deck-datum-val">{currentStage.elevation.split(' ')[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FOOTER MONOGRAPH COLOPHON */}
      <footer className="drawing-colophon-bar">
        <div className="colophon-datum">
          <span className="colophon-label">COORDINATE:</span>
          <span className="colophon-value">{currentStage.elevation}</span>
        </div>
        <div className="colophon-nav-instruction">
          <span className="instruction-text">CLICK ELEVATION MARKS TO TRAVERSE STRATA</span>
        </div>
      </footer>
    </div>
  );
}
