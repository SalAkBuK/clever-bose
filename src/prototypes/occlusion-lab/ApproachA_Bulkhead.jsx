import React from 'react';
import './ApproachA_Bulkhead.css';

export default function ApproachA_Bulkhead({
  stages,
  activeIndex,
  onSelectStage,
  occlusionEnabled = true,
  soloLayer = 'all', // 'all' | 'bg' | 'engine' | 'bulkhead'
}) {
  const currentStage = stages[activeIndex];

  return (
    <div className={`bulkhead-stage ${!occlusionEnabled ? 'bulkhead-stage--no-occlusion' : ''}`}>
      {/* 1. LAYER 1: Background Datum Grid */}
      {(soloLayer === 'all' || soloLayer === 'bg') && (
        <div className="bulkhead-layer bulkhead-layer--bg" aria-hidden="true">
          <div className="bg-datum-grid" />
          <div className="bg-elevation-track">
            <span className="bg-track-line" />
            <span className="bg-track-label">ELEVATION TRAVERSE AXIS // DATUM 00</span>
          </div>
          <div className="bg-coordinate-marks">
            <span>X: 000.00</span>
            <span>X: 250.00</span>
            <span>X: 500.00</span>
            <span>X: 750.00</span>
            <span>X: 1000.00</span>
          </div>
        </div>
      )}

      {/* 2. LAYER 2: Middle Engine Plane (The Transaction Payload Moving Through) */}
      {(soloLayer === 'all' || soloLayer === 'engine') && (
        <div className="bulkhead-layer bulkhead-layer--engine">
          <div
            className="engine-carousel"
            style={{ transform: `translate3d(-${activeIndex * 25}%, 0, 0)` }}
          >
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={stage.id}
                  className={`stage-engine-card ${isActive ? 'stage-engine-card--active' : ''}`}
                >
                  <div className="engine-card-header">
                    <span className="engine-card-code">{stage.code}</span>
                    <span className="engine-card-domain">{stage.systemDomain}</span>
                  </div>

                  <h3 className="engine-card-title">{stage.title}</h3>
                  <p className="engine-card-desc">{stage.description}</p>

                  <div className="engine-specs-grid">
                    {Object.entries(stage.runtimeMetrics).map(([key, val]) => (
                      <div key={key} className="engine-spec-item">
                        <span className="spec-k">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                        <span className="spec-v" dangerouslySetInnerHTML={{ __html: val }} />
                      </div>
                    ))}
                  </div>

                  <div className="engine-output-box">
                    <div className="output-status-line">
                      <span className="output-dot" />
                      <span className="output-status">{stage.systemOutput.status}</span>
                    </div>
                    <div className="output-details">
                      {Object.entries(stage.systemOutput)
                        .filter(([k]) => k !== 'status')
                        .map(([k, v]) => (
                          <div key={k} className="output-kv">
                            <span className="kv-k">{k}:</span>
                            <span className="kv-v">{v}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. LAYER 3: Foreground Structural Bulkheads (Occludes Payload as it Moves) */}
      {occlusionEnabled && (soloLayer === 'all' || soloLayer === 'bulkhead') && (
        <div className="bulkhead-layer bulkhead-layer--foreground" aria-hidden="true">
          {/* Left Bulkhead Pillar */}
          <div className="structural-bulkhead bulkhead--left">
            <div className="bulkhead-chassis">
              <div className="bulkhead-rivets">
                <span className="rivet" />
                <span className="rivet" />
                <span className="rivet" />
                <span className="rivet" />
              </div>
              <div className="bulkhead-label-strip">
                <span className="bulkhead-id">BULKHEAD_01 // HARDWARE_ISOLATION</span>
                <span className="bulkhead-datum">+48.5m</span>
              </div>
            </div>
          </div>

          {/* Center Dividing Strut (Occludes during transition) */}
          <div className="structural-bulkhead bulkhead--center-strut">
            <div className="strut-notch top-notch" />
            <div className="strut-center-beam" />
            <div className="strut-notch bottom-notch" />
            <div className="strut-signal-pip" />
          </div>

          {/* Right Bulkhead Pillar */}
          <div className="structural-bulkhead bulkhead--right">
            <div className="bulkhead-chassis">
              <div className="bulkhead-label-strip">
                <span className="bulkhead-id">BULKHEAD_02 // DISK_COMMIT_CHAMBER</span>
                <span className="bulkhead-datum">+16.5m</span>
              </div>
              <div className="bulkhead-rivets">
                <span className="rivet" />
                <span className="rivet" />
                <span className="rivet" />
                <span className="rivet" />
              </div>
            </div>
          </div>

          {/* Top Structural Girders */}
          <div className="bulkhead-overhead-girder">
            <div className="girder-rule" />
            <span className="girder-tag">CHASSIS BOUNDARY // PHYSICAL PERSISTENCE SHIELD</span>
            <div className="girder-rule" />
          </div>

          {/* Bottom Rail / Deck Occlusion */}
          <div className="bulkhead-track-bed">
            <div className="track-rail-groove" />
          </div>
        </div>
      )}

      {/* 4. Stage Traversal Controller (Dedicated Bottom Instrument Strip) */}
      <div className="bulkhead-hud-controls">
        <div className="hud-stage-tracker">
          <span className="hud-tracker-label">TRAVERSE STAGES:</span>
          {stages.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`stage-step-btn ${idx === activeIndex ? 'stage-step-btn--active' : ''}`}
              onClick={() => onSelectStage(idx)}
            >
              <span className="step-index">0{idx + 1}</span>
              <span className="step-name">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="hud-center-telemetry">
          <span className="terracotta-highlight">ACID 0.42ms</span>
          <span className="telemetry-pipe">&bull;</span>
          <span>DATUM 00 RUNTIME BUS</span>
          <span className="telemetry-pipe">&bull;</span>
          <span>STORE #042 (TERMINAL A)</span>
        </div>

        <div className="hud-elevation-indicator">
          <span className="hud-elev-label">ELEVATION:</span>
          <span className="hud-elev-val">{currentStage.elevation}</span>
        </div>
      </div>
    </div>
  );
}
