import React from 'react';
import { IconSparkles, IconPlus, IconCheck } from '../icons/Icons.jsx';

export default function CatalogGrid({
  footers,
  activeFooterId,
  onSelectFooter,
  onOpenAddModal,
}) {
  return (
    <section className="catalog-grid-section" aria-label="Footer Collection Grid">
      <div className="grid-section-header">
        <div className="grid-title-group">
          <span className="grid-pretitle">// ARCHIVAL INDEX</span>
          <h2 className="grid-heading">THE FOOTER COLLECTION</h2>
        </div>
        <span className="grid-count">{footers.length} ENTRIES REGISTERED</span>
      </div>

      <div className="catalog-cards-grid">
        {footers.map((footer) => {
          const isActive = footer.id === activeFooterId;
          const isConcept = footer.status === 'concept';

          return (
            <article
              key={footer.id}
              className={`footer-card ${isActive ? 'footer-card--active' : ''} ${isConcept ? 'footer-card--concept' : ''}`}
            >
              {/* Card Top Aesthetic Color Bar */}
              <div
                className="card-color-stripe"
                style={{ backgroundColor: footer.previewBg || '#1e2430' }}
              >
                <div className="stripe-overlay-tags">
                  <span className={`status-pill ${isConcept ? 'status-pill--concept' : 'status-pill--live'}`}>
                    {isConcept ? 'ATELIER CONCEPT' : 'LIVE MODEL'}
                  </span>
                  {footer.featured && (
                    <span className="featured-pill">
                      <IconSparkles size={11} />
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="card-body">
                <div className="card-titles">
                  <span className="card-era">{footer.era}</span>
                  <h3 className="card-title">{footer.name}</h3>
                  <span className="card-subtitle">{footer.subtitle}</span>
                </div>

                <p className="card-summary">{footer.summary}</p>

                {/* Color Swatch Preview Dots */}
                <div className="card-palette-row">
                  <span className="palette-label">PIGMENTS:</span>
                  <div className="palette-dots">
                    {footer.palette.slice(0, 5).map((col) => (
                      <span
                        key={col.hex}
                        className="palette-mini-dot"
                        style={{ backgroundColor: col.hex }}
                        title={`${col.name} (${col.hex})`}
                      />
                    ))}
                  </div>
                </div>

                {/* Tag Chips */}
                <div className="card-tags">
                  {footer.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="card-tag-pill">
                      {tag}
                    </span>
                  ))}
                  {footer.tags.length > 3 && (
                    <span className="card-tag-pill card-tag-more">
                      +{footer.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Activation CTA */}
                <div className="card-actions">
                  <button
                    type="button"
                    className={`card-select-btn ${isActive ? 'card-select-btn--active' : ''}`}
                    onClick={() => onSelectFooter(footer.id)}
                  >
                    {isActive ? (
                      <>
                        <IconCheck size={14} />
                        <span>ACTIVE IN STAGE</span>
                      </>
                    ) : (
                      <>
                        <IconSparkles size={14} />
                        <span>LOAD IN STAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}

        {/* Developer "+ Add New Footer" Blueprint Card */}
        <article className="footer-card footer-card--add" onClick={onOpenAddModal}>
          <div className="add-card-inner">
            <div className="add-card-icon-wrap">
              <IconPlus size={24} />
            </div>
            <h3 className="add-card-title">ADD YOUR BESPOKE FOOTER</h3>
            <p className="add-card-desc">
              Have an idea for a dynamic footer? Drop in your component and register it in <code>footersData.js</code>.
            </p>
            <span className="add-card-action-link">
              VIEW INTEGRATION SCHEMA &rarr;
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
