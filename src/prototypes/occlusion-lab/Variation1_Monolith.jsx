import React from 'react';
import './Variation1_Monolith.css';

/**
 * Variation 1 — Monumental Structural Plane
 *
 * Core Concept:
 * An immense, imposing architectural monolith dominates the viewport asymmetrically.
 * The Go Alvin transaction stream glides continuously on a horizontal track *behind*
 * this structural plane, creating unambiguous physical occlusion without decorative chrome.
 */
export default function Variation1_Monolith({
  stages,
  activeIndex,
  onSelectStage,
  occlusionMode = 'solid', // 'solid' | 'xray'
}) {
  const currentStage = stages[activeIndex];

  return (
    <div className={`monolith-composition ${occlusionMode === 'xray' ? 'monolith-composition--xray' : ''}`}>
      {/* 1. BACKGROUND PLANE: Continuous Elevation Datum Rule & Coordinate Scale */}
      <div className="monolith-bg-stratum" aria-hidden="true">
        <div className="monolith-datum-rule" />
        <div className="monolith-elevation-spine">
          <span className="spine-mark spine-mark--active" style={{ left: `${(activeIndex / (stages.length - 1)) * 75 + 12}%` }}>
            <span className="spine-pip" />
            <span className="spine-coord">{currentStage.elevation.split(' ')[0]}</span>
          </span>
        </div>
      </div>

      {/* 2. MIDGROUND PLANE: Moving Transaction Payload (Travels behind the monolith) */}
      <div className="monolith-payload-track">
        <div
          className="monolith-payload-stream"
          style={{
            transform: `translate3d(-${activeIndex * 720}px, 0, 0)`,
          }}
        >
          {stages.map((stage, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={stage.id}
                className={`monolith-stage-block ${isActive ? 'monolith-stage-block--active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div className="monolith-stage-head">
                  <span className="monolith-stage-code">{stage.code}</span>
                  <span className="monolith-stage-domain">{stage.systemDomain}</span>
                </div>

                <h2 className="monolith-stage-title">{stage.title}</h2>

                <p className="monolith-stage-narrative">{stage.description}</p>

                {/* Authentic Go Alvin Technical Notations — Clean editorial layout, no cards-in-cards */}
                <dl className="monolith-technical-ledger">
                  {Object.entries(stage.runtimeMetrics).map(([k, val]) => (
                    <div key={k} className="ledger-datum">
                      <dt className="ledger-label">{k.replace(/([A-Z])/g, ' $1')}</dt>
                      <dd className="ledger-value" dangerouslySetInnerHTML={{ __html: val }} />
                    </div>
                  ))}
                  {Object.entries(stage.systemOutput).map(([k, val]) => (
                    <div key={k} className="ledger-datum ledger-datum--highlight">
                      <dt className="ledger-label">{k.replace(/([A-Z])/g, ' $1')}</dt>
                      <dd className="ledger-value">{val}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </div>

      {/* 3. FOREGROUND MONOLITH: The Enormous Structural Plane (Physically Occludes Midground) */}
      <aside
        className="monolith-foreground-structure"
        aria-hidden="true"
        title="Structural foreground plane physically occluding system payload"
      >
        <div className="monolith-face">
          {/* Architectural Joint Lines & Section Cut Detail */}
          <div className="monolith-joint-line top-joint" />
          <div className="monolith-vertical-slit">
            <span className="slit-hairline" />
            <span className="slit-datum-label">{currentStage.elevation}</span>
          </div>
          <div className="monolith-joint-line bottom-joint" />

          {/* Precision Architectural Reference Stamp */}
          <div className="monolith-stamp">
            <span className="stamp-symbol">&#9632;</span>
            <span className="stamp-id">STRATA 01 // PIER MASSIF</span>
            <span className="stamp-dimension">44.00m DEEP EMBANKMENT</span>
          </div>
        </div>

        {/* Crisp Shadow Cast over the Passing Payload */}
        <div className="monolith-cast-shadow" />
      </aside>

      {/* 4. RESTRAINED MINIMAL CONTROLS: Surveying Station Axis */}
      <footer className="monolith-station-bar">
        <div className="station-axis">
          {stages.map((st, i) => (
            <button
              key={st.id}
              type="button"
              className={`station-point ${i === activeIndex ? 'station-point--active' : ''}`}
              onClick={() => onSelectStage(i)}
            >
              <span className="station-ordinal">0{i + 1}</span>
              <span className="station-name">{st.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="station-datum-display">
          <span className="datum-key">ACTIVE DATUM:</span>
          <span className="datum-val">{currentStage.elevation}</span>
        </div>
      </footer>
    </div>
  );
}
