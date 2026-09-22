import React, { useState, useMemo, useRef } from 'react';
import { FOOTERS_CATALOG, CATEGORIES } from './catalog/footersData.js';
import CatalogHeader from './components/catalog/CatalogHeader.jsx';
import StageViewer from './components/catalog/StageViewer.jsx';
import FooterInspector from './components/catalog/FooterInspector.jsx';
import CatalogGrid from './components/catalog/CatalogGrid.jsx';
import AddFooterModal from './components/catalog/AddFooterModal.jsx';
import MonumentalEditorialLab from './prototypes/occlusion-lab/MonumentalEditorialLab.jsx';
import OcclusionLab from './prototypes/occlusion-lab/OcclusionLab.jsx';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('monumental-editorial'); // 'monumental-editorial' | 'occlusion-lab' | 'catalog'
  const [activeFooterId, setActiveFooterId] = useState('grand-imperial-viaduct');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewportMode, setViewportMode] = useState('fluid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const inspectorRef = useRef(null);

  // Active footer object
  const activeFooter = useMemo(() => {
    return (
      FOOTERS_CATALOG.find((f) => f.id === activeFooterId) ||
      FOOTERS_CATALOG[0]
    );
  }, [activeFooterId]);

  // Filtered footers for the catalog grid
  const filteredFooters = useMemo(() => {
    return FOOTERS_CATALOG.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.era.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const liveCount = useMemo(() => {
    return FOOTERS_CATALOG.filter((f) => f.status === 'ready').length;
  }, []);

  const handleSelectFooter = (id) => {
    setActiveFooterId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSpecs = () => {
    if (inspectorRef.current) {
      inspectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="catalog-app">
      {/* 0. Master Portfolio R&D View Switcher */}
      <nav className="portfolio-master-nav" aria-label="Portfolio Mode Switcher">
        <div className="portfolio-master-nav-inner">
          <div className="nav-brand-tag">
            <span className="nav-tag-pip" />
            <span className="nav-tag-text">ENGINEERED PORTFOLIO R&amp;D</span>
            <span className="nav-tag-divider">&bull;</span>
            <span className="nav-tag-sub">FIRST-PRINCIPLES SPRINT</span>
          </div>

          <div className="nav-view-toggles">
            <button
              type="button"
              className={`master-nav-btn ${currentView === 'monumental-editorial' ? 'master-nav-btn--active' : ''}`}
              onClick={() => setCurrentView('monumental-editorial')}
            >
              <span className="btn-glyph">&sect;</span>
              <span className="btn-title">ART DIRECTION PASS: MONUMENTAL TECHNICAL EDITORIAL</span>
            </button>

            <button
              type="button"
              className={`master-nav-btn ${currentView === 'occlusion-lab' ? 'master-nav-btn--active' : ''}`}
              onClick={() => setCurrentView('occlusion-lab')}
            >
              <span className="btn-glyph">&Omega;</span>
              <span className="btn-title">LEGACY LAB (UNREDUCED)</span>
            </button>

            <button
              type="button"
              className={`master-nav-btn ${currentView === 'catalog' ? 'master-nav-btn--active' : ''}`}
              onClick={() => setCurrentView('catalog')}
            >
              <span className="btn-glyph">&Delta;</span>
              <span className="btn-title">FOOTER ARCHIVE ATELIER</span>
            </button>
          </div>
        </div>
      </nav>

      {currentView === 'monumental-editorial' ? (
        <MonumentalEditorialLab onReturnToCatalog={() => setCurrentView('catalog')} />
      ) : currentView === 'occlusion-lab' ? (
        <OcclusionLab onReturnToCatalog={() => setCurrentView('catalog')} />
      ) : (
        <>
          {/* 1. Atelier Top Header */}
          <CatalogHeader
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            totalFooters={FOOTERS_CATALOG.length}
            liveCount={liveCount}
          />

          <main className="catalog-main-content">
            {/* 2. Active Stage Theatre with Viewport Simulator */}
            <StageViewer
              activeFooter={activeFooter}
              viewportMode={viewportMode}
              onChangeViewport={setViewportMode}
              onOpenSpecs={handleOpenSpecs}
            />

            {/* 3. Footer Inspector Panel (Curatorial Notes, Palette, Specs, Code) */}
            <FooterInspector
              refProp={inspectorRef}
              footer={activeFooter}
            />

            {/* 4. The Collection Grid (Browse All Footers & Add Blueprint) */}
            <CatalogGrid
              footers={filteredFooters}
              activeFooterId={activeFooterId}
              onSelectFooter={handleSelectFooter}
              onOpenAddModal={() => setIsAddModalOpen(true)}
            />
          </main>

          {/* 5. Master Atelier Colophon */}
          <footer className="master-atelier-footer">
            <div className="master-colophon-inner">
              <div className="master-colophon-brand">
                <span className="colophon-mark">&Delta;</span>
                <span className="colophon-name">CADENCE // FOOTER ARCHIVE ATELIER</span>
              </div>
              <p className="master-colophon-text">
                Engineered with React 19, CSS Container Queries, and 60 FPS GPU hardware acceleration. Built to showcase bespoke digital endings for fine modern web craft.
              </p>
              <span className="master-colophon-copy">
                &copy; 1888&ndash;2026 ARCHIVE COMPENDIUM &middot; OPEN FOR EXTENSION
              </span>
            </div>
          </footer>

          {/* 6. Add Footer Guide Modal */}
          <AddFooterModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
