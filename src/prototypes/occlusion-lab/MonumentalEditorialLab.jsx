import React, { useState } from 'react';
import { GO_ALVIN_STAGES } from './GoAlvinData.js';
import Variation1_Monolith from './Variation1_Monolith.jsx';
import Variation2_SectionDrawing from './Variation2_SectionDrawing.jsx';
import Variation3_SpatialSpecimen from './Variation3_SpatialSpecimen.jsx';
import BridgeFooter from '../../components/BridgeFooter.jsx';
import './MonumentalTheme.css';
import './MonumentalEditorialLab.css';

/**
 * Master Comparison View for the Art Direction Reduction Pass
 *
 * Showcases the 3 distinct compositions of Approach A:
 *   Variation 1 — Monumental Structural Plane
 *   Variation 2 — Editorial Section Drawing
 *   Variation 3 — Spatial Specimen
 *
 * Enforces:
 *   - Strict 3-color discipline: INK (#080A0B), BONE (#F2F0E9), SIGNAL TERRACOTTA (#A83606)
 *   - Editorial restraint × civil engineering drawings × architectural scale
 *   - Elimination of all dashboard slop, cards inside cards, status pills, and fake telemetry
 *   - Authentic Go Alvin Phones POS technical data
 *   - Physical foreground/midground/background occlusion
 */
export default function MonumentalEditorialLab({ onReturnToCatalog }) {
  const [activeVariation, setActiveVariation] = useState('variation-1'); // 'variation-1' | 'variation-2' | 'variation-3' | 'triptych'
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [occlusionMode, setOcclusionMode] = useState('solid'); // 'solid' | 'xray'
  const [showFooterProof, setShowFooterProof] = useState(true);

  const currentStage = GO_ALVIN_STAGES[activeStageIndex];

  return (
    <div className="monumental-lab-root">
      {/* 1. MASTER FOLIO BANNER */}
      <header className="folio-masthead">
        <div className="masthead-top">
          <div className="masthead-identity">
            <span className="masthead-roman">I&ndash;III</span>
            <div className="masthead-titles">
              <span className="masthead-kicker">
                PORTFOLIO ART DIRECTION REDUCTION PASS &bull; APPROACH A RECOMPOSED
              </span>
              <h1 className="masthead-headline">
                Monumental Technical Editorial
              </h1>
              <p className="masthead-subhead">
                Three architectural compositions of layered physical occlusion for Go Alvin Phones POS
              </p>
            </div>
          </div>

          <div className="masthead-controls">
            {/* Occlusion X-Ray Toggle */}
            <button
              type="button"
              className={`masthead-tool-btn ${occlusionMode === 'solid' ? 'masthead-tool-btn--active' : ''}`}
              onClick={() => setOcclusionMode(occlusionMode === 'solid' ? 'xray' : 'solid')}
              title="Toggle foreground structural opacity to demonstrate physical occlusion"
            >
              <span className="tool-indicator">&#9632;</span>
              <span className="tool-text">
                {occlusionMode === 'solid' ? 'OCCLUSION: SOLID FOREGROUND' : 'OCCLUSION: X-RAY TRANSLUCENT'}
              </span>
            </button>

            {onReturnToCatalog && (
              <button
                type="button"
                className="masthead-back-btn"
                onClick={onReturnToCatalog}
              >
                &larr; ARCHIVE
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. COMPOSITION SELECTOR TABS */}
      <nav className="composition-nav" aria-label="Visual Variations">
        <button
          type="button"
          className={`comp-tab-btn ${activeVariation === 'variation-1' ? 'comp-tab-btn--active' : ''}`}
          onClick={() => setActiveVariation('variation-1')}
        >
          <span className="tab-ordinal">01</span>
          <div className="tab-copy">
            <span className="tab-title">Monumental Structural Plane</span>
            <span className="tab-sub">Monolithic pier occluding horizontal system traverse</span>
          </div>
        </button>

        <button
          type="button"
          className={`comp-tab-btn ${activeVariation === 'variation-2' ? 'comp-tab-btn--active' : ''}`}
          onClick={() => setActiveVariation('variation-2')}
        >
          <span className="tab-ordinal">02</span>
          <div className="tab-copy">
            <span className="tab-title">Editorial Section Drawing</span>
            <span className="tab-sub">Civil elevation folio dipping into subterranean foundation</span>
          </div>
        </button>

        <button
          type="button"
          className={`comp-tab-btn ${activeVariation === 'variation-3' ? 'comp-tab-btn--active' : ''}`}
          onClick={() => setActiveVariation('variation-3')}
        >
          <span className="tab-ordinal">03</span>
          <div className="tab-copy">
            <span className="tab-title">Spatial Specimen</span>
            <span className="tab-sub">Enormous circular hairline aperture masking deep Z-field</span>
          </div>
        </button>

        <button
          type="button"
          className={`comp-tab-btn comp-tab-btn--triptych ${activeVariation === 'triptych' ? 'comp-tab-btn--active' : ''}`}
          onClick={() => setActiveVariation('triptych')}
        >
          <span className="tab-ordinal">&equiv;</span>
          <div className="tab-copy">
            <span className="tab-title">Triptych Comparison</span>
            <span className="tab-sub">Inspect all 3 compositions side-by-side</span>
          </div>
        </button>
      </nav>

      {/* 3. ACTIVE COMPOSITION VIEWPORT */}
      <main className="composition-theatre">
        {activeVariation === 'variation-1' && (
          <section className="theatre-stage" aria-label="Variation 1">
            <Variation1_Monolith
              stages={GO_ALVIN_STAGES}
              activeIndex={activeStageIndex}
              onSelectStage={setActiveStageIndex}
              occlusionMode={occlusionMode}
            />
          </section>
        )}

        {activeVariation === 'variation-2' && (
          <section className="theatre-stage" aria-label="Variation 2">
            <Variation2_SectionDrawing
              stages={GO_ALVIN_STAGES}
              activeIndex={activeStageIndex}
              onSelectStage={setActiveStageIndex}
              occlusionMode={occlusionMode}
            />
          </section>
        )}

        {activeVariation === 'variation-3' && (
          <section className="theatre-stage" aria-label="Variation 3">
            <Variation3_SpatialSpecimen
              stages={GO_ALVIN_STAGES}
              activeIndex={activeStageIndex}
              onSelectStage={setActiveStageIndex}
              occlusionMode={occlusionMode}
            />
          </section>
        )}

        {activeVariation === 'triptych' && (
          <section className="theatre-triptych" aria-label="Triptych Comparison">
            {/* Triptych Universal Synchronized Stage Bar */}
            <div className="triptych-sync-bar">
              <span className="sync-bar-label">SYNCHRONIZED SYSTEM STAGE:</span>
              <div className="sync-stage-buttons">
                {GO_ALVIN_STAGES.map((st, i) => (
                  <button
                    key={st.id}
                    type="button"
                    className={`sync-stage-btn ${i === activeStageIndex ? 'sync-stage-btn--active' : ''}`}
                    onClick={() => setActiveStageIndex(i)}
                  >
                    <span className="btn-index">0{i + 1}</span>
                    <span className="btn-name">{st.title.split(' ')[0]}</span>
                    <span className="btn-elev">{st.elevation.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="triptych-item">
              <div className="triptych-header">
                <span className="triptych-tag">01 // MONUMENTAL STRUCTURAL PLANE</span>
                <span className="triptych-elev">{currentStage.elevation}</span>
              </div>
              <Variation1_Monolith
                stages={GO_ALVIN_STAGES}
                activeIndex={activeStageIndex}
                onSelectStage={setActiveStageIndex}
                occlusionMode={occlusionMode}
              />
            </div>

            <div className="triptych-item">
              <div className="triptych-header">
                <span className="triptych-tag">02 // EDITORIAL SECTION DRAWING</span>
                <span className="triptych-elev">{currentStage.elevation}</span>
              </div>
              <Variation2_SectionDrawing
                stages={GO_ALVIN_STAGES}
                activeIndex={activeStageIndex}
                onSelectStage={setActiveStageIndex}
                occlusionMode={occlusionMode}
              />
            </div>

            <div className="triptych-item">
              <div className="triptych-header">
                <span className="triptych-tag">03 // SPATIAL SPECIMEN</span>
                <span className="triptych-elev">{currentStage.elevation}</span>
              </div>
              <Variation3_SpatialSpecimen
                stages={GO_ALVIN_STAGES}
                activeIndex={activeStageIndex}
                onSelectStage={setActiveStageIndex}
                occlusionMode={occlusionMode}
              />
            </div>
          </section>
        )}
      </main>

      {/* 4. ARCHITECTURAL COMPARISON & EVALUATION NOTES */}
      <section className="editorial-critique-section">
        <header className="critique-header">
          <span className="critique-kicker">COMPARATIVE ARCHITECTURAL EVALUATION</span>
          <h2 className="critique-title">Evaluation Matrix: 3 Compositions of Approach A</h2>
          <p className="critique-desc">
            Evaluating how each reduced composition satisfies the visual direction:
            editorial restraint &times; civil engineering drawings &times; architectural scale &times; physical interaction.
          </p>
        </header>

        <div className="critique-columns">
          {/* Variation 1 Critique */}
          <article className="critique-col">
            <span className="critique-col-code">VARIATION 01</span>
            <h3 className="critique-col-title">Monumental Structural Plane</h3>
            <p className="critique-col-body">
              <strong>Spatial Behavior:</strong> A colossal vertical pier in pure Ink mass anchors the left viewport. The Go Alvin transaction stream glides horizontally along an elevation datum behind this structural mass, occluding past stages while the active stage emerges into expansive negative space.
            </p>
            <p className="critique-col-body">
              <strong>Resonance with Viaduct Footer:</strong> Directly mirrors the train sliding behind the stone pillars of the 1888 viaduct. Maximum physical occlusion payoff.
            </p>
            <div className="critique-col-footer">
              <span className="tag-key">DOMINANT FEEL:</span>
              <span className="tag-val">Heavy Civil Infrastructure &bull; Unyielding Mass</span>
            </div>
          </article>

          {/* Variation 2 Critique */}
          <article className="critique-col">
            <span className="critique-col-code">VARIATION 02</span>
            <h3 className="critique-col-title">Editorial Section Drawing</h3>
            <p className="critique-col-body">
              <strong>Spatial Behavior:</strong> Organized as an architectural folio plate. A left surveyor elevation axis (+48.5m down to +0.0m) coordinates the horizontal stream passing behind a monumental masonry retaining buttress and bedrock foundation deck.
            </p>
            <p className="critique-col-body">
              <strong>Resonance with Viaduct Footer:</strong> Prepares the eye for the ground-level bedrock datum by expressing system layers as physical elevation strata.
            </p>
            <div className="critique-col-footer">
              <span className="tag-key">DOMINANT FEEL:</span>
              <span className="tag-val">Monograph Folio &bull; Elevation Section Cut</span>
            </div>
          </article>

          {/* Variation 3 Critique */}
          <article className="critique-col">
            <span className="critique-col-code">VARIATION 03</span>
            <h3 className="critique-col-title">Spatial Specimen</h3>
            <p className="critique-col-body">
              <strong>Spatial Behavior:</strong> Severe reduction of the Approach C aperture concept. A pure Ink field cut by an enormous hairline circular aperture (500px diameter). The Go Alvin artifact sits in deep physical Z-space, traveling across intersecting horizontal and vertical hairline datums with a singular terracotta focal coordinate.
            </p>
            <p className="critique-col-body">
              <strong>Resonance with Viaduct Footer:</strong> Shares the surveying coordinate crosshairs and optical precision of 19th-century civil engineering instruments.
            </p>
            <div className="critique-col-footer">
              <span className="tag-key">DOMINANT FEEL:</span>
              <span className="tag-val">Scientific Reticle &bull; Curated Specimen in Void</span>
            </div>
          </article>
        </div>
      </section>

      {/* 5. CONTINUITY VERIFICATION: THE PROTECTED 1888 VIADUCT FOOTER */}
      <section className="viaduct-continuity-section">
        <div className="viaduct-continuity-header">
          <div className="continuity-identity">
            <span className="continuity-tag">GROUND-LEVEL DATUM CONTINUITY CHECK</span>
            <h2 className="continuity-title">Protected 1888 Grand Imperial Viaduct Footer</h2>
            <p className="continuity-desc">
              Verification that the Monumental Technical Editorial language seamlessly prepares the eye for the protected 1888 viaduct animation at the bottom of the page.
            </p>
          </div>
          <button
            type="button"
            className="continuity-toggle-btn"
            onClick={() => setShowFooterProof(!showFooterProof)}
          >
            {showFooterProof ? 'COLLAPSE FOOTER PREVIEW' : 'EXPAND FOOTER PREVIEW'}
          </button>
        </div>

        {showFooterProof && (
          <div className="viaduct-footer-enclosure">
            <BridgeFooter />
          </div>
        )}
      </section>
    </div>
  );
}
