import React, { useState } from 'react';
import './ApproachC_Aperture.css';

/**
 * Approach C: Precision Aperture Gauge (Optical Comparator / Reticle Mask)
 * 
 * Concept: A stationary engineered surveyor's optical aperture / comparator gauge.
 * The authentic transaction stream of Go Alvin POS glides behind a heavy machined
 * chassis with calibrated crosshair sightlines, vernier millimeter scales, and
 * terracotta focal registration points.
 */
export default function ApproachC_Aperture({
  stages,
  activeIndex,
  onSelectStage,
  occlusionEnabled = true,
  soloLayer = 'all', // 'all' | 'bg' | 'engine' | 'bulkhead'
}) {
  const [reticleZoom, setReticleZoom] = useState('1x'); // '1x' | '2x'
  const currentStage = stages[activeIndex];

  return (
    <div
      className={`aperture-stage ${!occlusionEnabled ? 'aperture-stage--no-occlusion' : ''} aperture-stage--zoom-${reticleZoom}`}
    >
      {/* 1. LAYER 1: Background Radial Coordinate Field & Surveying Grid */}
      {(soloLayer === 'all' || soloLayer === 'bg') && (
        <div className="aperture-layer aperture-layer--bg" aria-hidden="true">
          <div className="aperture-radial-grid" />
          <div className="aperture-concentric-circles">
            <div className="reticle-ring ring-1" />
            <div className="reticle-ring ring-2" />
            <div className="reticle-ring ring-3" />
          </div>
          <div className="aperture-bg-axes">
            <span className="bg-axis bg-axis-h" />
            <span className="bg-axis bg-axis-v" />
          </div>
          <div className="aperture-bg-metadata">
            <span className="meta-item">OPTICAL FIELD: 120&deg; STEREO</span>
            <span className="meta-item">REF: SURVEY_BENCHMARK_1888</span>
            <span className="meta-item">AZIMUTH: 042.85&deg; N</span>
          </div>
        </div>
      )}

      {/* 2. LAYER 2: Middle Continuous Engine Tape (Go Alvin Transaction Stream) */}
      {(soloLayer === 'all' || soloLayer === 'engine') && (
        <div className="aperture-layer aperture-layer--engine">
          <div
            className="aperture-tape-track"
            style={{
              transform: `translate3d(calc(50% - ${activeIndex * 380 + 190}px), 0, 0)`,
            }}
          >
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={stage.id}
                  className={`aperture-tape-card ${isActive ? 'aperture-tape-card--active' : ''}`}
                  onClick={() => onSelectStage(idx)}
                >
                  <div className="tape-card-header">
                    <span className="tape-step-badge">0{idx + 1}</span>
                    <span className="tape-stage-code">{stage.code}</span>
                    <span className="tape-elevation-tag">{stage.elevation}</span>
                  </div>

                  <h3 className="tape-card-title">{stage.title}</h3>
                  <div className="tape-domain-line">{stage.systemDomain}</div>

                  <p className="tape-card-description">{stage.description}</p>

                  <div className="tape-metrics-block">
                    <div className="tape-metrics-header">RUNTIME TELEMETRY</div>
                    <div className="tape-metrics-list">
                      {Object.entries(stage.runtimeMetrics).map(([k, v]) => (
                        <div key={k} className="tape-metric-row">
                          <span className="metric-k">{k.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
                          <span className="metric-v" dangerouslySetInnerHTML={{ __html: v }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tape-output-seal">
                    <div className="seal-heading">COMMIT STATE</div>
                    <div className="seal-status terracotta-text">
                      &bull; {stage.systemOutput.status}
                    </div>
                    {stage.systemOutput.deviceModel && (
                      <div className="seal-sub">{stage.systemOutput.deviceModel}</div>
                    )}
                    {stage.systemOutput.dbTxnId && (
                      <div className="seal-sub">SQL_TXN: {stage.systemOutput.dbTxnId}</div>
                    )}
                    {stage.systemOutput.receiptCut && (
                      <div className="seal-sub">HARDWARE: {stage.systemOutput.receiptCut}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. LAYER 3: Foreground Machined Aperture Chassis & Optical Reticle */}
      {occlusionEnabled && (soloLayer === 'all' || soloLayer === 'bulkhead') && (
        <div className="aperture-layer aperture-layer--foreground" aria-hidden="true">
          {/* Top Machined Mask Plate */}
          <div className="gauge-mask gauge-mask--top">
            <div className="mask-bevel" />
            <div className="mask-rule-strip">
              <div className="vernier-scale top-scale">
                {Array.from({ length: 41 }).map((_, i) => (
                  <span
                    key={i}
                    className={`vernier-tick ${i % 10 === 0 ? 'tick-major' : i % 5 === 0 ? 'tick-mid' : ''}`}
                  />
                ))}
              </div>
              <div className="mask-datum-label">
                <span>DATUM AXIS 00 &middot; ELEVATION HORIZON</span>
                <span className="terracotta-badge">GAUGE: CALIBRATED 0.05mm</span>
              </div>
            </div>
          </div>

          {/* Left Opaque Wing with Shadow Chamfer */}
          <div className="gauge-mask gauge-mask--left">
            <div className="wing-chassis">
              <div className="wing-rivets">
                <span className="rivet-mark" />
                <span className="rivet-mark" />
                <span className="rivet-mark" />
                <span className="rivet-mark" />
              </div>
              <div className="wing-legend">
                <span className="wing-title">TRANSACTION STREAM</span>
                <span className="wing-sub">&larr; INGESTION VECTOR</span>
              </div>
            </div>
            <div className="wing-bevel-edge right-bevel" />
          </div>

          {/* Right Opaque Wing with Shadow Chamfer */}
          <div className="gauge-mask gauge-mask--right">
            <div className="wing-bevel-edge left-bevel" />
            <div className="wing-chassis">
              <div className="wing-legend">
                <span className="wing-title">HARDWARE DISPATCH</span>
                <span className="wing-sub">SERIAL ESC/POS &rarr;</span>
              </div>
              <div className="wing-rivets">
                <span className="rivet-mark" />
                <span className="rivet-mark" />
                <span className="rivet-mark" />
                <span className="rivet-mark" />
              </div>
            </div>
          </div>

          {/* Bottom Machined Mask Plate */}
          <div className="gauge-mask gauge-mask--bottom">
            <div className="mask-rule-strip">
              <div className="mask-datum-label">
                <span>OPTICAL RETICLE RETICULATION // PERSISTENCE CHAMBER</span>
                <span>SYSTEM ELEVATION: {currentStage.elevation}</span>
              </div>
              <div className="vernier-scale bottom-scale">
                {Array.from({ length: 41 }).map((_, i) => (
                  <span
                    key={i}
                    className={`vernier-tick ${i % 10 === 0 ? 'tick-major' : i % 5 === 0 ? 'tick-mid' : ''}`}
                  />
                ))}
              </div>
            </div>
            <div className="mask-bevel" />
          </div>

          {/* Central Optical Sightline Frame (Crosshairs & Alignment Indices) */}
          <div className="aperture-reticle-box">
            {/* Corner Alignment Brackets */}
            <div className="reticle-corner corner--tl" />
            <div className="reticle-corner corner--tr" />
            <div className="reticle-corner corner--bl" />
            <div className="reticle-corner corner--br" />

            {/* Central Precision Hairlines */}
            <div className="crosshair-hairline crosshair--x" />
            <div className="crosshair-hairline crosshair--y" />

            {/* Terracotta Central Optical Pip */}
            <div className="reticle-center-target">
              <div className="target-dot" />
              <div className="target-pulse" />
            </div>

            {/* Stage Elevation Sightline Stamping */}
            <div className="reticle-stamping">
              <span className="stamp-item">FOCAL POINT // ACTIVE_CHAMBER</span>
              <span className="stamp-item terracotta-text">TARGET: 0{activeIndex + 1}</span>
            </div>
          </div>
        </div>
      )}

      {/* 4. Interactive Aperture HUD Bar */}
      <div className="aperture-hud">
        <div className="hud-stages-pills">
          <span className="hud-prefix">SLIDE APERTURE:</span>
          {stages.map((st, i) => (
            <button
              key={st.id}
              type="button"
              className={`aperture-pill ${i === activeIndex ? 'aperture-pill--active' : ''}`}
              onClick={() => onSelectStage(i)}
            >
              <span className="pill-num">0{i + 1}</span>
              <span className="pill-name">{st.code.split('//')[1]?.trim() || st.code}</span>
            </button>
          ))}
        </div>

        <div className="hud-controls-right">
          <div className="hud-zoom-toggle">
            <span className="zoom-lbl">RETICLE FIELD:</span>
            <button
              type="button"
              className={`zoom-btn ${reticleZoom === '1x' ? 'zoom-btn--active' : ''}`}
              onClick={() => setReticleZoom('1x')}
            >
              WIDE 1X
            </button>
            <button
              type="button"
              className={`zoom-btn ${reticleZoom === '2x' ? 'zoom-btn--active' : ''}`}
              onClick={() => setReticleZoom('2x')}
            >
              FOCUSED 2X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
