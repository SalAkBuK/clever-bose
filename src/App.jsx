import React, { useState, useMemo, useRef } from 'react';
import { FOOTERS_CATALOG, CATEGORIES } from './catalog/footersData.js';
import CatalogHeader from './components/catalog/CatalogHeader.jsx';
import StageViewer from './components/catalog/StageViewer.jsx';
import FooterInspector from './components/catalog/FooterInspector.jsx';
import CatalogGrid from './components/catalog/CatalogGrid.jsx';
import AddFooterModal from './components/catalog/AddFooterModal.jsx';
import './App.css';

export default function App() {
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
    </div>
  );
}
