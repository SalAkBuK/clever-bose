import React, { useState } from 'react';
import { GO_ALVIN_STAGES } from './GoAlvinData.js';
import ApproachA_Bulkhead from './ApproachA_Bulkhead.jsx';
import ApproachB_Cutaway from './ApproachB_Cutaway.jsx';
import ApproachC_Aperture from './ApproachC_Aperture.jsx';
import BridgeFooter from '../../components/BridgeFooter.jsx';
import './OcclusionLab.css';

export default function OcclusionLab({ onReturnToCatalog }) {
  const [activeApproach, setActiveApproach] = useState('approach-a'); // 'approach-a' | 'approach-b' | 'approach-c'
  const [occlusionEnabled, setOcclusionEnabled] = useState(true);
  const [soloLayer, setSoloLayer] = useState('all'); // 'all' | 'bulkhead' | 'engine' | 'bg'
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [showFooterComparison, setShowFooterComparison] = useState(true);

  const currentStage = GO_ALVIN_STAGES[activeStageIndex];

  return (
    <div className="occlusion-lab">
      {/* 1. Master Laboratory Header & Context */}
      <header className="lab-header">
        <div className="lab-header-top">
          <div className="lab-branding">
            <span className="lab-symbol">&Omega;</span>
            <div className="lab-title-group">
              <div className="lab-eyebrow">
                <span>PORTFOLIO FIRST-PRINCIPLES R&amp;D</span>
                <span className="lab-pipe">&bull;</span>
                <span className="lab-prototype-badge">PROTOTYPE 01: LAYERED PHYSICAL OCCLUSION</span>
              </div>
              <h1 className="lab-main-title">
                The Spatial Depth Laboratory
              </h1>
            </div>
          </div>

          <div className="lab-header-actions">
            {onReturnToCatalog && (
              <button
                type="button"
                className="lab-return-btn"
                onClick={onReturnToCatalog}
              >
                &larr; VIEW FOOTER ARCHIVE ATELIER
              </button>
            )}
            <div className="lab-status-indicator">
              <span className="status-pip pulse" />
              <span className="status-label">ACTIVE BENCHMARK RUNTIME</span>
            </div>
          </div>
        </div>

        {/* Core Question Banner */}
        <div className="lab-hypothesis-bar">
          <div className="hypothesis-label">CORE QUESTION UNDER EMPIRICAL TEST:</div>
          <p className="hypothesis-text">
            <strong>&ldquo;Can layered physical depth become the proprietary presentation language of this portfolio?&rdquo;</strong>
            {' '}Testing whether structural occlusion transforms software documentation from disposable flat cards into an authentic engineered machine.
          </p>
          <div className="hypothesis-metadata">
            <span className="hyp-tag">TEST SUBJECT: <strong>Go Alvin Phones POS</strong> (Offline-first Electron + SQLite Desktop)</span>
            <span className="hyp-tag">METAPHOR: <strong>Sectional Elevation &amp; Surveying Datum</strong></span>
          </div>
        </div>
      </header>

      {/* 2. Global Experimentation HUD Controls */}
      <section className="lab-controls-panel">
        {/* Left: Approach Selector Tabs */}
        <div className="control-group">
          <span className="control-group-title">SPATIAL OCCLUSION APPROACH</span>
          <div className="approach-tabs">
            <button
              type="button"
              className={`approach-tab ${activeApproach === 'approach-a' ? 'approach-tab--active' : ''}`}
              onClick={() => setActiveApproach('approach-a')}
            >
              <div className="tab-id">APPROACH A</div>
              <div className="tab-name">Structural Bulkhead Traverse</div>
              <div className="tab-desc">Piers &amp; Girders Occlude Moving Engine</div>
            </button>

            <button
              type="button"
              className={`approach-tab ${activeApproach === 'approach-b' ? 'approach-tab--active' : ''}`}
              onClick={() => setActiveApproach('approach-b')}
            >
              <div className="tab-id">APPROACH B</div>
              <div className="tab-name">Stratified Cutaway Assembly</div>
              <div className="tab-desc">3-Plane Z-Axis Dissection (UI &rarr; IPC &rarr; SQLite)</div>
            </button>

            <button
              type="button"
              className={`approach-tab ${activeApproach === 'approach-c' ? 'approach-tab--active' : ''}`}
              onClick={() => setActiveApproach('approach-c')}
            >
              <div className="tab-id">APPROACH C</div>
              <div className="tab-name">Precision Aperture Gauge</div>
              <div className="tab-desc">Optical Reticle &amp; Surveyor Comparator</div>
            </button>
          </div>
        </div>

        {/* Right: Empirical Contrast Toggles */}
        <div className="control-group control-group--toggles">
          <span className="control-group-title">EMPIRICAL PROOF CONTROLS</span>
          
          <div className="toggles-grid">
            {/* The Critical Occlusion On/Off Switch */}
            <div className="toggle-card">
              <div className="toggle-info">
                <span className="toggle-name">PHYSICAL OCCLUSION</span>
                <span className="toggle-sub">Toggle foreground architecture</span>
              </div>
              <button
                type="button"
                className={`switch-button ${occlusionEnabled ? 'switch-button--on' : 'switch-button--off'}`}
                onClick={() => setOcclusionEnabled(!occlusionEnabled)}
                title="Toggle between layered physical occlusion and standard flat cards"
              >
                <span className="switch-state-text">{occlusionEnabled ? 'OCCLUSION: ON' : 'OCCLUSION: OFF (FLAT)'}</span>
                <span className="switch-handle" />
              </button>
            </div>

            {/* Layer Soloing Selector */}
            <div className="toggle-card">
              <div className="toggle-info">
                <span className="toggle-name">LAYER ISOLATION</span>
                <span className="toggle-sub">Inspect individual strata</span>
              </div>
              <div className="solo-buttons-row">
                <button
                  type="button"
                  className={`solo-btn ${soloLayer === 'all' ? 'solo-btn--active' : ''}`}
                  onClick={() => setSoloLayer('all')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`solo-btn ${soloLayer === 'bulkhead' ? 'solo-btn--active' : ''}`}
                  onClick={() => setSoloLayer('bulkhead')}
                  title="Foreground architectural masking geometry"
                >
                  Foreground
                </button>
                <button
                  type="button"
                  className={`solo-btn ${soloLayer === 'engine' ? 'solo-btn--active' : ''}`}
                  onClick={() => setSoloLayer('engine')}
                  title="Middle payload and state machine"
                >
                  Engine
                </button>
                <button
                  type="button"
                  className={`solo-btn ${soloLayer === 'bg' ? 'solo-btn--active' : ''}`}
                  onClick={() => setSoloLayer('bg')}
                  title="Background datum grid and elevation coordinate"
                >
                  Background
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Active Experimental Spatial Stage */}
      <section className="lab-stage-container">
        <div className="stage-top-meta">
          <div className="meta-left">
            <span className="meta-bracket">[</span>
            <span className="meta-title">
              {activeApproach === 'approach-a' && 'APPROACH A // STRUCTURAL BULKHEAD TRAVERSE'}
              {activeApproach === 'approach-b' && 'APPROACH B // STRATIFIED CUTAWAY ASSEMBLY'}
              {activeApproach === 'approach-c' && 'APPROACH C // PRECISION APERTURE GAUGE'}
            </span>
            <span className="meta-bracket">]</span>
            <span className="meta-elevation-pill">{currentStage.elevation}</span>
          </div>

          <div className="meta-right">
            {!occlusionEnabled && (
              <span className="no-occlusion-warning">
                &Delta; COMPARISON MODE: FOREGROUND GEOMETRY STRIPPED (FLAT CONVENTIONAL VIEW)
              </span>
            )}
            {occlusionEnabled && (
              <span className="occlusion-active-badge">
                &check; 3-TIER OCCLUSION ACTIVE (FOREGROUND &bull; ENGINE &bull; BACKGROUND)
              </span>
            )}
          </div>
        </div>

        {/* Viewport Render Area */}
        <div className="stage-viewport-frame">
          {activeApproach === 'approach-a' && (
            <ApproachA_Bulkhead
              stages={GO_ALVIN_STAGES}
              activeIndex={activeStageIndex}
              onSelectStage={setActiveStageIndex}
              occlusionEnabled={occlusionEnabled}
              soloLayer={soloLayer}
            />
          )}

          {activeApproach === 'approach-b' && (
            <ApproachB_Cutaway
              stages={GO_ALVIN_STAGES}
              occlusionEnabled={occlusionEnabled}
              soloLayer={soloLayer}
            />
          )}

          {activeApproach === 'approach-c' && (
            <ApproachC_Aperture
              stages={GO_ALVIN_STAGES}
              activeIndex={activeStageIndex}
              onSelectStage={setActiveStageIndex}
              occlusionEnabled={occlusionEnabled}
              soloLayer={soloLayer}
            />
          )}
        </div>
      </section>

      {/* 4. Comparative Evaluation Matrix */}
      <section className="lab-eval-matrix">
        <div className="eval-header">
          <h2 className="eval-title">Comparative Spatial Analysis &amp; Decision Criteria</h2>
          <span className="eval-sub">Evaluate how each approach addresses the core question</span>
        </div>

        <div className="eval-cards-grid">
          {/* Approach A Evaluation */}
          <div className={`eval-card ${activeApproach === 'approach-a' ? 'eval-card--highlighted' : ''}`}>
            <div className="eval-card-header">
              <span className="card-approach-code">01 // APPROACH A</span>
              <h3 className="card-approach-title">Structural Bulkhead Traverse</h3>
            </div>
            <div className="eval-card-body">
              <div className="eval-metric">
                <span className="metric-label">Spatial Depth Model:</span>
                <span className="metric-val">Horizontal traverse behind riveted bridge-pier bulkheads</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Narrative Strength:</span>
                <span className="metric-val">Makes system boundaries tangible; feels like a physical locomotive passing through architectural gates.</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Resonance with Viaduct Footer:</span>
                <span className="metric-val terracotta-text">Directly mirrors the train traveling behind the viaduct pillars.</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Trade-off / Risk:</span>
                <span className="metric-val">Cards are partially masked during transition; requires careful text margins so critical copy is never trapped behind pillars.</span>
              </div>
            </div>
            <button
              type="button"
              className="eval-select-btn"
              onClick={() => setActiveApproach('approach-a')}
            >
              {activeApproach === 'approach-a' ? 'CURRENTLY INSPECTING' : 'INSPECT APPROACH A'}
            </button>
          </div>

          {/* Approach B Evaluation */}
          <div className={`eval-card ${activeApproach === 'approach-b' ? 'eval-card--highlighted' : ''}`}>
            <div className="eval-card-header">
              <span className="card-approach-code">02 // APPROACH B</span>
              <h3 className="card-approach-title">Stratified Cutaway Assembly</h3>
            </div>
            <div className="eval-card-body">
              <div className="eval-metric">
                <span className="metric-label">Spatial Depth Model:</span>
                <span className="metric-val">3-plane Z-axis peeling (Surface UI &rarr; IPC &rarr; SQLite Disk)</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Narrative Strength:</span>
                <span className="metric-val">Most authentically explains offline-first desktop architecture; peeling the UI proves that the database lives locally on disk.</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Resonance with Viaduct Footer:</span>
                <span className="metric-val terracotta-text">Resonates with the Sectional Elevation metaphor (descending into subterranean foundation).</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Trade-off / Risk:</span>
                <span className="metric-val">Higher interaction density; best suited for deep-dive technical project case studies.</span>
              </div>
            </div>
            <button
              type="button"
              className="eval-select-btn"
              onClick={() => setActiveApproach('approach-b')}
            >
              {activeApproach === 'approach-b' ? 'CURRENTLY INSPECTING' : 'INSPECT APPROACH B'}
            </button>
          </div>

          {/* Approach C Evaluation */}
          <div className={`eval-card ${activeApproach === 'approach-c' ? 'eval-card--highlighted' : ''}`}>
            <div className="eval-card-header">
              <span className="card-approach-code">03 // APPROACH C</span>
              <h3 className="card-approach-title">Precision Aperture Gauge</h3>
            </div>
            <div className="eval-card-body">
              <div className="eval-metric">
                <span className="metric-label">Spatial Depth Model:</span>
                <span className="metric-val">Stationary optical reticle &amp; calibrated vernier aperture mask</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Narrative Strength:</span>
                <span className="metric-val">Conveys patient scientific observation and draughtsmanship; crosshairs and registration marks focus attention on active code.</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Resonance with Viaduct Footer:</span>
                <span className="metric-val terracotta-text">Shares the surveying coordinate language and precision calibration ticks of 19th-century civil engineering.</span>
              </div>
              <div className="eval-metric">
                <span className="metric-label">Trade-off / Risk:</span>
                <span className="metric-val">Stationary aperture restricts horizontal viewport width; requires high contrast in the focal window.</span>
              </div>
            </div>
            <button
              type="button"
              className="eval-select-btn"
              onClick={() => setActiveApproach('approach-c')}
            >
              {activeApproach === 'approach-c' ? 'CURRENTLY INSPECTING' : 'INSPECT APPROACH C'}
            </button>
          </div>
        </div>
      </section>

      {/* 5. Direct Coherence Check with Protected Grand Imperial Viaduct Footer */}
      <section className="lab-footer-coherence">
        <div className="coherence-header">
          <div className="coherence-title-group">
            <span className="coherence-tag">CROSS-SECTIONAL CONTINUITY VERIFICATION</span>
            <h2 className="coherence-title">Protected Grand Imperial Viaduct Footer (Ground-Level Datum)</h2>
            <p className="coherence-desc">
              Verify how the selected spatial depth approach harmonizes with the protected 1888 viaduct animation at the bottom of the sectional elevation.
            </p>
          </div>
          <button
            type="button"
            className="toggle-footer-preview-btn"
            onClick={() => setShowFooterComparison(!showFooterComparison)}
          >
            {showFooterComparison ? 'HIDE VIADUCT FOOTER' : 'REVEAL VIADUCT FOOTER'}
          </button>
        </div>

        {showFooterComparison && (
          <div className="viaduct-footer-wrapper">
            <BridgeFooter />
          </div>
        )}
      </section>
    </div>
  );
}
