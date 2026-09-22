import React from 'react';
import { IconClose, IconPlus, IconCheck, IconCode } from '../icons/Icons.jsx';

export default function AddFooterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-pretitle">// DEVELOPER ATELIER SCHEMA</span>
            <h3 className="modal-title">HOW TO ADD A NEW FOOTER TO THE CATALOG</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IconClose size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-intro">
            The Cadence Footer Archive is built with an extensible schema. You can add new animated, kinetic, or typographic footers in three simple steps:
          </p>

          <div className="modal-steps-list">
            <div className="modal-step-item">
              <div className="step-num-badge">01</div>
              <div className="step-detail">
                <h4 className="step-name">Create Your Footer Component</h4>
                <p className="step-desc">
                  Build your custom footer inside <code>src/components/footers/MyFooter.jsx</code> and style it in <code>MyFooter.css</code>. Use container queries (<code>container-type: inline-size</code>) for flawless responsive behavior.
                </p>
              </div>
            </div>

            <div className="modal-step-item">
              <div className="step-num-badge">02</div>
              <div className="step-detail">
                <h4 className="step-name">Register in <code>src/catalog/footersData.js</code></h4>
                <p className="step-desc">
                  Import your component and append a new metadata object to the <code>FOOTERS_CATALOG</code> array:
                </p>
                <pre className="modal-code-snippet">
                  <code>{`{
  id: 'my-custom-footer',
  name: 'Solitude Astral',
  subtitle: 'Celestial Orbital Starfield',
  era: 'Deep Space Modernism',
  category: 'cyber', // 'illustrated' | 'modernist' | 'cyber' | 'concepts'
  status: 'ready',
  previewBg: '#05070e',
  component: MyFooter,
  tags: ['Starfield', 'WebGL Canvas', 'Parallax'],
  palette: [
    { hex: '#05070e', name: 'Cosmic Void', role: 'Stage Backdrop' },
    { hex: '#e2b855', name: 'Supernova Gold', role: 'Accent Stars' }
  ],
  specs: {
    framerate: '60 FPS',
    layers: 'Canvas + Vector HUD',
    animationType: 'requestAnimationFrame Particles'
  },
  codeSnippet: \`<MyFooter id="footer" />\`
}`}</code>
                </pre>
              </div>
            </div>

            <div className="modal-step-item">
              <div className="step-num-badge">03</div>
              <div className="step-detail">
                <h4 className="step-name">Instant Live Integration</h4>
                <p className="step-desc">
                  Vite instantly hot-reloads the catalog. Your footer automatically appears in the gallery grid, search bar, filter tabs, device viewport simulator (Fluid / 1440px / 768px / 390px), and the technical specs inspector.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="modal-confirm-btn" onClick={onClose}>
            <IconCheck size={14} />
            <span>GOT IT, READY TO BUILD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
