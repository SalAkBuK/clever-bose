import React from 'react';
import './Variation3_SpatialSpecimen.css';

/**
 * Variation 3 — Spatial Specimen
 *
 * Core Concept:
 * Severe, monumental reduction of the Approach C aperture:
 * Black field, one enormous hairline circular aperture, one horizontal datum,
 * one vertical datum, one moving project artifact in deep space,
 * one small real coordinate in Signal Terracotta, one commanding editorial heading.
 * Zero control-panel soup, zero duplicative sidebars, mathematically calibrated occlusion.
 */
export default function Variation3_SpatialSpecimen({
  stages,
  activeIndex,
  onSelectStage,
  occlusionMode = 'solid', // 'solid' | 'xray'
}) {
  const currentStage = stages[activeIndex];

  return (
    <div className={`specimen-composition ${occlusionMode === 'xray' ? 'specimen-composition--xray' : ''}`}>
      {/* 1. TOP EDITORIAL HEADER: Commanding Serif in Deep Silence */}
      <header className="specimen-editorial-header">
        <div className="specimen-meta">
          <span className="specimen-pip" />
          <span className="specimen-plate-id">SPECIMEN 03 // PHYSICAL ARTIFACT RETICLE</span>
          <span className="specimen-divider">&bull;</span>
          <span className="specimen-coord-tag">{currentStage.elevation}</span>
        </div>

        <h2 className="specimen-heading">{currentStage.title}</h2>
        <p className="specimen-narrative">{currentStage.description}</p>
      </header>

      {/* 2. THE MONUMENTAL APERTURE FIELD */}
      <div className="specimen-viewport">
        {/* Full-width continuous horizontal datum hairline */}
        <div className="aperture-horizontal-datum" />

        {/* Full-height continuous vertical datum hairline */}
        <div className="aperture-vertical-datum" />

        {/* Signal coordinate datum at the aperture focal boundary */}
        <div className="aperture-focal-datum">
          <span className="focal-pip" />
          <span className="focal-coord">{currentStage.elevation.split(' ')[0]}</span>
          <span className="focal-domain">{currentStage.systemDomain}</span>
        </div>

        {/* THE CIRCULAR APERTURE CHAMBER (Foreground Mask with Midground Specimen inside) */}
        <div className="specimen-aperture-chamber">
          {/* Hairline Rim Ring */}
          <div className="aperture-rim" aria-hidden="true" />

          {/* Masked Specimen Stream: Perfectly calibrated 380px per stage */}
          <div
            className="specimen-stream-track"
            style={{
              transform: `translate3d(-${activeIndex * 380}px, 0, 0)`,
            }}
          >
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <article
                  key={stage.id}
                  className={`specimen-cell ${isActive ? 'specimen-cell--active' : ''}`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <div className="cell-inner">
                    <span className="cell-stage-tag">{stage.code}</span>

                    <div className="cell-metrics-list">
                      {Object.entries(stage.runtimeMetrics).slice(0, 3).map(([k, val]) => (
                        <div key={k} className="cell-metric-row">
                          <span className="metric-k">{k.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="metric-v" dangerouslySetInnerHTML={{ __html: val }} />
                        </div>
                      ))}
                    </div>

                    <div className="cell-status-node">
                      <span className="status-pip" />
                      <span className="status-text">{stage.systemOutput.status}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. RESTRAINED BOTTOM SURVEYOR AXIS */}
      <footer className="specimen-surveyor-bar">
        <div className="specimen-axis-marks">
          {stages.map((st, idx) => (
            <button
              key={st.id}
              type="button"
              className={`specimen-station-btn ${idx === activeIndex ? 'specimen-station-btn--active' : ''}`}
              onClick={() => onSelectStage(idx)}
            >
              <span className="station-pip" />
              <span className="station-coord">{st.elevation.split(' ')[0]}</span>
              <span className="station-title">{st.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="specimen-reading">
          <span className="reading-key">RETICLE DATUM:</span>
          <span className="reading-val">{currentStage.elevation}</span>
        </div>
      </footer>
    </div>
  );
}
