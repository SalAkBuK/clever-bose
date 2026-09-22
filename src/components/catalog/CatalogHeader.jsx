import React from 'react';
import { IconSparkles, IconPlus, IconSearch } from '../icons/Icons.jsx';

export default function CatalogHeader({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenAddModal,
  totalFooters,
  liveCount,
}) {
  return (
    <header className="catalog-header">
      {/* Top Brand Banner */}
      <div className="header-top-row">
        <div className="header-brand">
          <div className="brand-logo-mark">
            <span className="logo-letter">C</span>
            <span className="logo-subline">&Delta;</span>
          </div>
          <div className="brand-titles">
            <div className="brand-pretitle">
              <span className="pretitle-dot" />
              <span>THE CURATED COMPENDIUM // VOL. 1</span>
            </div>
            <h1 className="brand-main-title">CADENCE FOOTER ARCHIVES</h1>
          </div>
        </div>

        <div className="header-actions">
          <div className="stat-pill">
            <span className="stat-live-dot" />
            <span className="stat-live-count">{liveCount} MODELS LIVE</span>
            <span className="stat-divider">/</span>
            <span className="stat-total">{totalFooters - liveCount} CONCEPTS</span>
          </div>

          <button
            type="button"
            className="add-footer-cta-btn"
            onClick={onOpenAddModal}
            title="Learn how to add custom footers to the catalog"
          >
            <IconPlus size={14} />
            <span>ADD FOOTER TO CATALOG</span>
          </button>
        </div>
      </div>

      {/* Editorial Intro Narrative */}
      <div className="header-narrative-row">
        <p className="narrative-text">
          A living architectural gallery of bespoke website footers. Engineered for designers and developers who refuse generic templates. From Victorian steel-engraved 60 FPS steam viaducts to kinetic Swiss modernist grids and cyberpunk orbital terminals.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="header-filter-bar">
        {/* Category Pills */}
        <div className="category-pills" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`category-pill ${isActive ? 'category-pill--active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.id === 'all' && <IconSparkles size={12} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <IconSearch size={14} className="search-icon" />
          <input
            type="text"
            placeholder="Filter by aesthetic, era, tag..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-label="Search footers catalog"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
