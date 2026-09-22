import React from 'react';
import {
  IconDesktop,
  IconTablet,
  IconMobile,
  IconMaximize,
  IconSparkles,
} from '../icons/Icons.jsx';

export default function StageViewer({
  activeFooter,
  viewportMode,
  onChangeViewport,
  onOpenSpecs,
}) {
  const FooterComponent = activeFooter.component;
  const isConcept = activeFooter.status === 'concept';

  const VIEWPORT_WIDTHS = {
    fluid: '100%',
    desktop: '1440px',
    tablet: '768px',
    mobile: '390px',
  };

  return (
    <section className="stage-viewer-section" aria-label="Interactive Footer Stage">
      {/* Stage Toolbar */}
      <div className="stage-toolbar">
        <div className="stage-info-left">
          <span className="stage-badge-live">
            <span className="live-dot-pulse" />
            LIVE STAGE
          </span>
          <div className="stage-title-group">
            <h2 className="stage-title">{activeFooter.name}</h2>
            <span className="stage-era">{activeFooter.era}</span>
          </div>
        </div>

        {/* Viewport Width Controls */}
        <div className="stage-viewport-controls">
          <button
            type="button"
            className={`viewport-btn ${viewportMode === 'fluid' ? 'viewport-btn--active' : ''}`}
            onClick={() => onChangeViewport('fluid')}
            title="100% Fluid Full Width"
          >
            <IconMaximize size={14} />
            <span>FLUID</span>
          </button>
          <button
            type="button"
            className={`viewport-btn ${viewportMode === 'desktop' ? 'viewport-btn--active' : ''}`}
            onClick={() => onChangeViewport('desktop')}
            title="Desktop 1440px"
          >
            <IconDesktop size={14} />
            <span>1440px</span>
          </button>
          <button
            type="button"
            className={`viewport-btn ${viewportMode === 'tablet' ? 'viewport-btn--active' : ''}`}
            onClick={() => onChangeViewport('tablet')}
            title="Tablet 768px"
          >
            <IconTablet size={14} />
            <span>768px</span>
          </button>
          <button
            type="button"
            className={`viewport-btn ${viewportMode === 'mobile' ? 'viewport-btn--active' : ''}`}
            onClick={() => onChangeViewport('mobile')}
            title="Mobile 390px"
          >
            <IconMobile size={14} />
            <span>390px</span>
          </button>
        </div>

        <div className="stage-actions-right">
          <button
            type="button"
            className="stage-specs-link-btn"
            onClick={onOpenSpecs}
          >
            <IconSparkles size={13} />
            <span>VIEW TECH SPECS</span>
          </button>
        </div>
      </div>

      {/* Stage Canvas Frame */}
      <div className="stage-canvas-outer">
        <div
          className="stage-canvas-vessel"
          style={{
            maxWidth: VIEWPORT_WIDTHS[viewportMode] || '100%',
            backgroundColor: activeFooter.previewBg || '#000000',
          }}
        >
          {/* Header indicator within vessel for non-fluid modes */}
          {viewportMode !== 'fluid' && (
            <div className="vessel-viewport-ruler">
              <span className="ruler-line" />
              <span className="ruler-label">
                SIMULATED VIEWPORT // {VIEWPORT_WIDTHS[viewportMode].toUpperCase()}
              </span>
              <span className="ruler-line" />
            </div>
          )}

          {/* Render Active Component or Concept Placeholder */}
          {FooterComponent && !isConcept ? (
            <FooterComponent id="active-stage-footer" />
          ) : (
            <div className="concept-stage-banner">
              <div className="concept-watermark">ARCHITECTURAL BLUEPRINT</div>
              <h3 className="concept-banner-title">{activeFooter.name}</h3>
              <p className="concept-banner-desc">{activeFooter.summary}</p>
              <div className="concept-tags-row">
                {activeFooter.tags.map((t) => (
                  <span key={t} className="concept-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="concept-status-box">
                <span className="concept-lock-icon">&#9881;</span>
                <span>UNDER CRAFTING IN THE ATELIER &middot; BLUEPRINT REGISTERED</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Stage Footnote Bar */}
      <div className="stage-meta-footer">
        <div className="stage-meta-item">
          <span className="meta-lbl">STAGE ASPECT:</span>
          <span className="meta-val">{activeFooter.aspectRatio}</span>
        </div>
        <div className="stage-meta-item">
          <span className="meta-lbl">TARGET VIEWPORT:</span>
          <span className="meta-val">{VIEWPORT_WIDTHS[viewportMode]}</span>
        </div>
        <div className="stage-meta-item">
          <span className="meta-lbl">CANVAS RENDERER:</span>
          <span className="meta-val">{activeFooter.specs.animationType}</span>
        </div>
      </div>
    </section>
  );
}
